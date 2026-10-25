@echo off
rem Opens Daily Study from this computer, including the local-only figures
rem (daily_study/*/local/, which are never pushed). Close this window to stop.
cd /d "%~dp0"
start "" "http://localhost:8765/daily_study.html"
python -m http.server 8765
