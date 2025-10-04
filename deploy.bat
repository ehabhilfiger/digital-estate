@echo off
REM Quick Deploy Script for Digital Estate (Windows)

echo.
echo ========================================
echo   Digital Estate Architect - Deploy
echo ========================================
echo.
echo Project: Ehab Allababidi
echo Email: defcon5ready@gmail.com
echo Phone: (773) 920-0030
echo.

REM Check if in project directory
if not exist "package.json" (
    echo ERROR: Not in project directory
    echo Run this from: C:\Users\defco\digital-estate
    pause
    exit /b 1
)

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

REM Build the project
echo.
echo Building project...
call npm run build

if errorlevel 1 (
    echo.
    echo BUILD FAILED - Please fix errors and try again
    pause
    exit /b 1
)

echo.
echo ========================================
echo   BUILD SUCCESSFUL!
echo ========================================
echo.
echo Ready to deploy. Choose an option:
echo.
echo 1. Deploy to Vercel Production
echo 2. Test locally first
echo 3. Deploy preview to Vercel
echo 4. Exit
echo.

set /p choice="Enter choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Deploying to Vercel production...
    call vercel --prod
    pause
) else if "%choice%"=="2" (
    echo.
    echo Starting local server...
    echo Visit: http://localhost:3000
    call npm start
) else if "%choice%"=="3" (
    echo.
    echo Deploying preview to Vercel...
    call vercel
    pause
) else (
    echo Goodbye!
)
