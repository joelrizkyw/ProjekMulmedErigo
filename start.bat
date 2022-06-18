@echo off
where /q npm
if ErrorLevel 1 (
    echo Node.js v18.4.0 is required to run this project.
    echo Press any key to open download page...
    pause > nul
    start https://nodejs.org/en/download/
    exit /b 1
)

npm start