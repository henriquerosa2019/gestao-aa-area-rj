const image       = document.getElementById("zoomImage");
const zoomSlider  = document.getElementById("zoomSlider");
const zoomLabel   = document.getElementById("zoomLabel");
const resetButton = document.getElementById("resetZoom");
const tooltip     = document.getElementById("tooltip");
const container   = document.getElementById("container");
const scrollArea  = document.getElementById("bottomFrame");
const printButton = document.getElementById("printPage");

let originalWidth    = 0;
let currentScale     = 1;
let animationFrameId = null;

// Helper function to read CSS variables
function getCssVariable(element, varName) {
  return getComputedStyle(element).getPropertyValue(varName).trim();
}

// Reading slider parameters from CSS variables, with fallback values
// Using document.documentElement to fetch variables defined in :root
const cssMin   = parseFloat(getCssVariable(document.documentElement, "--zoom-value-min"));
const cssMax   = parseFloat(getCssVariable(document.documentElement, "--zoom-value-max"));
const cssStep  = parseFloat(getCssVariable(document.documentElement, "--zoom-value-step"));
const cssValue = parseFloat(getCssVariable(document.documentElement, "--zoom-value-default"));

// Assign the values read from CSS variables to slider properties.
// If a CSS variable is not a valid number, use the original defaults as fallback.
zoomSlider.min   = isNaN(cssMin)   ? 20  : cssMin;
zoomSlider.max   = isNaN(cssMax)   ? 160 : cssMax;
zoomSlider.step  = isNaN(cssStep)  ? 5   : cssStep;
zoomSlider.value = isNaN(cssValue) ? 100 : cssValue;

// === Session storage ================================================
const pageKey = window.location.pathname;
const zoomStorageKey   = `zoomLevel_${pageKey}`;
const scrollStorageKey = `scrollPos_${pageKey}`;

function saveZoomLevel(value) {
  sessionStorage.setItem(zoomStorageKey, value);
  console.log(`[DEBUG - Zoom Save] Page: ${pageKey}, Saved Zoom Level:`, value);
}

// Saves scroll position as a FRACTION of the total content size
function saveScrollPosition() {
  // Ensure scrollWidth and scrollHeight are not zero to avoid division by zero
  const maxScrollLeft = Math.max(0, scrollArea.scrollWidth - scrollArea.clientWidth);
  const maxScrollTop  = Math.max(0, scrollArea.scrollHeight - scrollArea.clientHeight);
  const relativeLeft  = maxScrollLeft > 0 ? scrollArea.scrollLeft / maxScrollLeft : 0;
  const relativeTop   = maxScrollTop  > 0 ? scrollArea.scrollTop  / maxScrollTop  : 0;
  const pos = { relativeLeft, relativeTop };
  sessionStorage.setItem(scrollStorageKey, JSON.stringify(pos));
  console.log(`[DEBUG - Scroll Save] Page: ${pageKey}, Saved Position (relative):`, pos);
  if (scrollArea.scrollLeft === 0 && scrollArea.scrollTop === 0 &&
      (scrollArea.scrollWidth > scrollArea.clientWidth || scrollArea.scrollHeight > scrollArea.clientHeight)) {
    console.warn("[DEBUG - Scroll Save] Saved position is (0,0) but area should be scrollable. Check content or CSS.");
  }
}

// Restores scroll position using saved FRACTION and current content size
function restoreScrollPosition() {
  const saved = sessionStorage.getItem(scrollStorageKey);
  if (saved) {
    const savedPos = JSON.parse(saved);
    console.log(`[DEBUG - Scroll Restore] Page: ${pageKey}, Attempting to restore to (relative):`, savedPos);

    // Use two requestAnimationFrame calls to ensure the DOM layout is fully updated
    // after image scaling before attempting to restore scroll position.
    requestAnimationFrame(() => { // First rAF to ensure general layout update
        requestAnimationFrame(() => { // Second rAF for extra stability, after image redrawing
            if (scrollArea) {
                const maxScrollLeft = Math.max(0, scrollArea.scrollWidth - scrollArea.clientWidth);
                const maxScrollTop  = Math.max(0, scrollArea.scrollHeight - scrollArea.clientHeight);
                const absoluteLeft  = savedPos.relativeLeft * maxScrollLeft;
                const absoluteTop   = savedPos.relativeTop  * maxScrollTop;

                scrollArea.scrollLeft = absoluteLeft;
                scrollArea.scrollTop  = absoluteTop;

                console.log(`[DEBUG - Scroll Restore] Successfully applied position to (absolute):`, { left: scrollArea.scrollLeft, top: scrollArea.scrollTop });

                // Fallback in case layout isn't fully ready (rare after two rAFs, but kept for robustness)
                if (scrollArea.scrollLeft !== absoluteLeft || scrollArea.scrollTop !== absoluteTop) {
                    console.warn("[DEBUG - Scroll Restore] Applied position differs from calculated. Attempting fallback with setTimeout.");
                    setTimeout(() => {
                        const maxScrollLeftDelayed = Math.max(0, scrollArea.scrollWidth - scrollArea.clientWidth);
                        const maxScrollTopDelayed  = Math.max(0, scrollArea.scrollHeight - scrollArea.clientHeight);

                        const absoluteLeftDelayed = savedPos.relativeLeft * maxScrollLeftDelayed;
                        const absoluteTopDelayed  = savedPos.relativeTop  * maxScrollTopDelayed;

                        scrollArea.scrollLeft = absoluteLeftDelayed;
                        scrollArea.scrollTop  = absoluteTopDelayed;
                        console.log(`[DEBUG - Scroll Restore] Applied position after setTimeout (absolute):`, { left: scrollArea.scrollLeft, top: scrollArea.scrollTop });
                    }, 50);
                }
            } else {
                console.error("[DEBUG - Scroll Restore] scrollArea not found when attempting to restore position.");
            }
        });
    });
  } else {
    console.log(`[DEBUG - Scroll Restore] No saved scroll position found for ${pageKey}.`);
  }
}

// === Utility functions ==============================================
function updateSliderGradient(value) {
  // Usar parseFloat para min/max/value para garantir compatibilidade com CSS var numerics
  const min     = parseFloat(zoomSlider.min);
  const max     = parseFloat(zoomSlider.max);
  const percent = ((value - min) / (max - min)) * 100;
  const trackFilledColor = getCssVariable(document.documentElement, "--slider-color-filled")  || 'LightSlateGrey';
  const trackEmptyColor  = getCssVariable(document.documentElement, "--slider-color-unfilled")|| 'LightGrey';
  zoomSlider.style.background = `linear-gradient(to right, ${trackFilledColor} ${percent}%, ${trackEmptyColor} ${percent}%)`;
}

function decodeHTML(html) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
}

// === Map regions and highlights =====================================
const regions = Array.from(document.querySelectorAll("area[data-id]")).map(area => {
  const id     = area.dataset.id;
  const label  = area.dataset.label;
  const coords = area.coords.split(",").map(Number);
  return {
    id,
    label,
    areaElement: area,
    rectElement: document.querySelector(`.highlight-rect[data-id="${id}"]`),
    originalCoords: { x1: coords[0], y1: coords[1], x2: coords[2], y2: coords[3] }
  };
});

// === Zoom and animation functions ===================================
function initializeImage(callback) {
  const applyZoomAndCallback = () => {
    originalWidth = image.naturalWidth;
    updateZoom(true);
    requestAnimationFrame(() => {
        if (callback) callback();
    });
  };

  if (image.complete && image.naturalWidth > 0) {
    applyZoomAndCallback();
  } else {
    image.onload  = applyZoomAndCallback;
    image.onerror = () => console.error("Failed to load image.");
  }
}

// The updateZoom function now accepts an optional parameter to indicate initial load
function updateZoom(isInitialLoad = false) {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  const newScale = parseInt(zoomSlider.value, 10) / 100;
  zoomLabel.textContent = `${Math.round(newScale * 100)}%`;

  if (isInitialLoad) {
    currentScale = newScale;
    image.style.width = `${originalWidth * currentScale}px`;
    updateRegions();
  } else {
    animateZoom(currentScale, newScale);
    const prevWidth  = image.clientWidth;
    const prevHeight = image.clientHeight;
    const centerX    = scrollArea.scrollLeft + scrollArea.clientWidth / 2;
    const centerY    = scrollArea.scrollTop  + scrollArea.clientHeight / 2;
    const relativeX  = prevWidth  > 0 ? centerX / prevWidth  : 0.5;
    const relativeY  = prevHeight > 0 ? centerY / prevHeight : 0.5;
    const targetWidth  = originalWidth * newScale;
    const targetHeight = (image.naturalHeight / image.naturalWidth) * targetWidth;
    scrollArea.scrollLeft = (relativeX * targetWidth)  - (scrollArea.clientWidth  / 2);
    scrollArea.scrollTop  = (relativeY * targetHeight) - (scrollArea.clientHeight / 2);
  }
}

// The animateZoom function remains unchanged; it is only called for interactive zooms
function animateZoom(fromScale, toScale) {
  const duration  = 200;
  const startTime = performance.now();
  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    currentScale = fromScale + (toScale - fromScale) * progress;
    zoomLabel.textContent = `${Math.round(currentScale * 100)}%`;
    image.style.width = `${originalWidth * currentScale}px`;
    updateRegions();
    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      animationFrameId = null;
    }
  }
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
  animationFrameId = requestAnimationFrame(animate);
}

function updateRegions() {
  regions.forEach(region => {
    const { x1, y1, x2, y2 } = region.originalCoords;
    const sx1 = x1 * currentScale;
    const sy1 = y1 * currentScale;
    const sx2 = x2 * currentScale;
    const sy2 = y2 * currentScale;
    region.areaElement.coords = `${Math.round(sx1)},${Math.round(sy1)},${Math.round(sx2)},${Math.round(sy2)}`;
    if (region.rectElement) {
      Object.assign(region.rectElement.style, {
        left:   `${sx1}px`,
        top:    `${sy1}px`,
        width:  `${sx2 - sx1}px`,
        height: `${sy2 - sy1}px`
      });
    }
  });
}

// === Tooltip handling ===============================================
regions.forEach(region => {
  const area = region.areaElement;

  area.addEventListener("mousemove", e => {
    const decodedLabel = decodeHTML(region.label || "");
    if (!decodedLabel.trim()) {
      tooltip.style.display = "none";
      return;
    }
    tooltip.innerHTML = decodedLabel;
    tooltip.style.left = `${e.clientX + 5}px`;
    tooltip.style.top  = `${e.clientY + 5}px`;
    tooltip.style.display = "block";
  });

  area.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  area.addEventListener("click", e => {
    e.preventDefault();
    const href   = area.getAttribute("href");
    const target = area.getAttribute("target");
    if (href && href.trim() !== "") {
      if (target === "_blank") window.open(href, "_blank");
      else window.location.href = href;
    }
  });
});

// === Printing model with title, using one page as default ===========
function printPage(event) {
  let printTitle = 'ARPO Business Modeler'; // Default fallback print title

  // Determine print title from button's data-print-title or title attribute
  if (event instanceof Event) {
    const clickedElement = event.currentTarget;
    if (clickedElement) {
      const dataPrintTitle = clickedElement.dataset.printTitle;
      if (typeof dataPrintTitle === 'string' && dataPrintTitle.trim() !== '') {
        printTitle = dataPrintTitle;
      } else if (typeof clickedElement.title === 'string' && clickedElement.title.trim() !== '') {
        printTitle = clickedElement.title;
      }
    }
  }

  // Validate required global variables and image state
  if (!(image instanceof HTMLImageElement) || !image.src) {
    alert("Could not prepare printing. Invalid or unloaded image.");
    return;
  }
  if (!image.naturalWidth || !image.naturalHeight) {
    alert("The image is not ready for printing. Please wait for the image to load completely.");
    return;
  }
  if (typeof currentScale !== 'number' || currentScale <= 0) {
    alert("Invalid zoom scale detected. Cannot proceed with printing.");
    return;
  }
  if (typeof originalWidth !== 'number' || originalWidth <= 0) {
      alert("Invalid original width detected. Cannot proceed with printing.");
      return;
  }

  // Calculate scaled dimensions and determine page orientation
  const zoomScale = currentScale;
  const scaledWidth = originalWidth * zoomScale;
  const scaledHeight = (image.naturalHeight / image.naturalWidth) * scaledWidth;

  let pageOrientation = 'portrait';
  if (scaledWidth > scaledHeight) {
    pageOrientation = 'landscape';
  }

  // Construct the HTML content for the iframe
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${printTitle}</title>
        <style>
          @page {
            size: A4 ${pageOrientation};
            margin: 10mm;
          }
          body {
            margin: 0; padding: 0;
            display: flex; justify-content: center; align-items: center;
            min-height: 100vh; overflow: hidden;
          }
          img {
            max-width: 100%; max-height: 100%;
            width: auto; height: auto; object-fit: contain;
            display: block; margin: auto;
            page-break-after: avoid; page-break-before: avoid; page-break-inside: avoid;
          }
          @media print {
            body { width: 100%; height: 100%; margin: 0; padding: 0; }
          }
        </style>
      </head>
      <body>
        <img src="${image.src}" alt="Content for Printing">
      </body>
    </html>`;

  // Create and append an invisible iframe to the document body
  const printFrame = document.createElement('iframe');
  printFrame.style.display = 'none';
  document.body.appendChild(printFrame);

  // Write the HTML content directly into the iframe's document
  const iframeDoc = printFrame.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(htmlContent);
  iframeDoc.close();

  // Trigger print dialog after a short delay
  setTimeout(() => {
      try {
        printFrame.contentWindow.focus();
        printFrame.contentWindow.print();
      } catch (e) {
        alert("Could not open print dialog. Please try again.");
      } finally {
        // Remove the iframe from the DOM after print attempt
        document.body.removeChild(printFrame);
      }
  }, 500);
}

// === Event listeners ================================================
zoomSlider.addEventListener("input", () => {
  updateSliderGradient(zoomSlider.value);
  updateZoom();
  saveZoomLevel(zoomSlider.value); // Re-adicionado: Salvar zoom na interação
  saveScrollPosition(); // Re-adicionado: Salvar posição de rolagem na interação
});

resetButton.addEventListener("click", () => {
  const resetValue = parseFloat(getCssVariable(document.documentElement, "--zoom-value-default")) || 100;
  zoomSlider.value = resetValue;
  updateSliderGradient(resetValue);
  updateZoom();
  saveZoomLevel(resetValue); // Re-adicionado
  saveScrollPosition(); // Re-adicionado
});

document.querySelectorAll(".zoom-btn").forEach(button => {
  button.addEventListener("click", () => {
    const zoom    = parseInt(button.dataset.zoom, 10);
    const minZoom = parseFloat(getCssVariable(document.documentElement, "--zoom-value-min"))  || 10;
    const maxZoom = parseFloat(getCssVariable(document.documentElement, "--zoom-value-max"))  || 160;
    const stepZoom = parseFloat(getCssVariable(document.documentElement,"--zoom-value-step")) || 10;
    let newValue = Math.round(zoom / stepZoom) * stepZoom;
    newValue = Math.max(minZoom, Math.min(maxZoom, newValue));

    zoomSlider.value = newValue;
    updateSliderGradient(newValue);
    updateZoom();
    saveZoomLevel(newValue); // Re-adicionado
    saveScrollPosition(); // Re-adicionado
  });
});

scrollArea.addEventListener("scroll", saveScrollPosition); // Mantido

scrollArea.addEventListener("wheel", e => {
  if (e.ctrlKey) {
    e.preventDefault();
    const delta    = Math.sign(e.deltaY);
    const current  = parseInt(zoomSlider.value, 10);
    const stepZoom = parseFloat(getCssVariable(document.documentElement, "--zoom-value-step")) || 10;
    const minZoom  = parseFloat(getCssVariable(document.documentElement, "--zoom-value-min"))  || 10;
    const maxZoom  = parseFloat(getCssVariable(document.documentElement, "--zoom-value-max"))  || 160;

    let newValue = current - delta * stepZoom;
    newValue = Math.min(maxZoom, Math.max(minZoom, Math.round(newValue / stepZoom) * stepZoom));

    if (newValue !== current) {
      zoomSlider.value = newValue;
      updateSliderGradient(newValue);
      updateZoom();
      saveZoomLevel(newValue); // Re-adicionado
      saveScrollPosition(); // Re-adicionado
    }
  }
}, { passive: false });

document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT") return;
  const current  = parseInt(zoomSlider.value, 10);
  const stepZoom = parseFloat(getCssVariable(document.documentElement, "--zoom-value-step"))|| 10;
  const minZoom  = parseFloat(getCssVariable(document.documentElement, "--zoom-value-min")) || 10;
  const maxZoom  = parseFloat(getCssVariable(document.documentElement, "--zoom-value-max")) || 160;

  if (e.key === "+" || e.key === "=") {
    const newValue = Math.min(maxZoom, current + stepZoom);
    zoomSlider.value = newValue;
    updateSliderGradient(newValue);
    updateZoom();
    saveZoomLevel(newValue); 
    saveScrollPosition(); 
  } else if (e.key === "-" || e.key === "_") {
    const newValue = Math.max(minZoom, current - stepZoom);
    zoomSlider.value = newValue;
    updateSliderGradient(newValue);
    updateZoom();
    saveZoomLevel(newValue); 
    saveScrollPosition(); 
  }
});

if (printButton) {
  printButton.addEventListener("click", printPage);
}

document.addEventListener("beforeunload", saveScrollPosition); // Mantido: Salva antes de sair da página

// Page state initialization and restoration
(function() {
  const savedZoomOnInit = sessionStorage.getItem(zoomStorageKey);
  if (savedZoomOnInit) {
    zoomSlider.value = savedZoomOnInit;
  } else {
    const cssInitial = parseFloat(getCssVariable(document.documentElement, "--zoom-value-default")) || 100;
    zoomSlider.value = cssInitial;
  }
  updateSliderGradient(zoomSlider.value);
  initializeImage(() => {
    restoreScrollPosition(); // Chamado após o layout da imagem estar pronto
  });
})();

window.addEventListener("pageshow", () => {
  const savedZoom = sessionStorage.getItem(zoomStorageKey);
  if (savedZoom) {
    zoomSlider.value = savedZoom;
  } else {
    const cssInitial = parseFloat(getCssVariable(document.documentElement, "--zoom-value-default")) || 100;
    zoomSlider.value = cssInitial;
  }
  updateSliderGradient(zoomSlider.value);
  initializeImage(() => {
    restoreScrollPosition(); // Chamado após o layout da imagem estar pronto
  });
});

