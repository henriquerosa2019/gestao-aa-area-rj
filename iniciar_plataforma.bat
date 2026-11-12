@echo off
title Plataforma de Gestao Documental - Delegado AA
echo ========================================================
echo   Iniciando Plataforma de Gestao - Delegado AA
echo ========================================================

set "TARGET_FILE=%~dp0PLATAFORMA_GESTAO_DELEGADO_AA.html"

:: Tentar abrir no Google Chrome
if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    echo Abrindo no Google Chrome...
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "%TARGET_FILE%"
    exit
)
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    echo Abrindo no Google Chrome...
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "%TARGET_FILE%"
    exit
)

:: Tentar abrir no Microsoft Edge
if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    echo Abrindo no Microsoft Edge...
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" "%TARGET_FILE%"
    exit
)
if exist "C:\Program Files\Microsoft\Edge\Application\msedge.exe" (
    echo Abrindo no Microsoft Edge...
    start "" "C:\Program Files\Microsoft\Edge\Application\msedge.exe" "%TARGET_FILE%"
    exit
)

:: Fallback padrao
start "" "%TARGET_FILE%"
exit
