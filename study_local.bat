@echo off
rem Opens Daily Study from this computer, including the local-only figures
rem (daily_study/*/local/, which are never pushed). Close this window to stop.
cd /d "%~dp0"
set PORT=8777
rem Prefer a real Python over the Microsoft Store placeholder in WindowsApps.
set "PY=%USERPROFILE%\anaconda3\python.exe"
if not exist "%PY%" set "PY=py"
start "" "http://localhost:%PORT%/daily_study.html"
"%PY%" -m http.server %PORT%
if errorlevel 1 (
  echo.
  echo Could not start the local server on port %PORT%. Is it already running in another window?
  pause
)
