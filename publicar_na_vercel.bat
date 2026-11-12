@echo off
chcp 65001 > nul
echo ===================================================
echo   PUBLICAR PLATAFORMA DELEGADO AA NA VERCEL
echo ===================================================
echo.
echo 1. Se for a primeira vez, o navegador abrirá para você autorizar o login.
echo 2. Pressione Enter para confirmar o projeto e as opções padrão.
echo.
pause
npx vercel
echo.
echo Publicação finalizada!
pause
