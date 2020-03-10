if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

cd "F:\kevikim\Study\nodejs\chatbot"

start /min cmd /C "nodemon app.js"
goto :EOF
:minimized