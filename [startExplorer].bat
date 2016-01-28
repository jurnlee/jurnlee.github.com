@echo off
rem bundle exec jekyll server
rem set path=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe;%path% 
rem set path

echo.
@echo     cd /d chrome_home
cd /d C:\Program Files (x86)\Google\Chrome\Application\
@echo     chrome  http://localhost:4000  -incognito
chrome  http://localhost:4000  -incognito


pause