@echo off
echo Configurando o ambiente AgroLink...

REM Removendo ambiente virtual antigo se existir
if exist venv (
    rmdir /s /q venv
)

REM Criando novo ambiente virtual
python3 -m venv venv

REM Ativando o ambiente virtual
call venv\Scripts\activate.bat

REM Instalando dependências
pip install -r requirements.txt

echo Ambiente configurado com sucesso!
pause
