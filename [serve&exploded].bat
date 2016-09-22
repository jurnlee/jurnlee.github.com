@echo off

:browser
echo.
cd /D D:\program\Google\Chrome\Application
::cd /d C:\Program Files (x86)\Google\Chrome\Application\
::echo   chrome  http://localhost:4000  -incognito
chrome  http://localhost:4000  -incognito
echo start browser...
goto serve

:serve
echo start server on http://localhost:4000... 
bundle exec jekyll server
goto end


:end
pause