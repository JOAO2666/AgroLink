@echo off
echo Iniciando o servidor AgroLink...

REM Ativando o ambiente virtual
call venv\Scripts\activate.bat

REM Iniciando o servidor Flask
python app.py
