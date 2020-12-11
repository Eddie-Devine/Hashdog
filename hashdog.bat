@echo off
title Hashdog
set /p hash="HASH: "
set /p hashMethod="HASH METHOD: "
set /p length="LENGTH: "
set /p keyWords="ADD CHARACTERS: "
set /p memory="MEMORY: "
set /p print="PRINT: "
echo %hashMethod%:%hash%:%length%:%print% > hashData.txt
echo %keyWords% > keyWords.txt
cls
node --max-old-space-size=%memory% index.js
pause