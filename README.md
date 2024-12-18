# AgroLink Juazeiro

AgroLink Juazeiro é um marketplace digital especializado no polo de fruticultura do Vale do São Francisco, conectando produtores rurais e compradores na região de Juazeiro, Bahia.

## Características Regionais

- **Polo de Fruticultura**: Maior região produtora de frutas irrigadas do Brasil
- **Culturas Principais**: Uva, Manga, Goiaba, Maracujá, Coco Verde, Banana
- **Irrigação**: Sistema alimentado pelo Rio São Francisco
- **Perímetros Irrigados**: Mandacaru, Maniçoba, Tourão, Curaçá, Nilo Coelho
- **Certificações**: GlobalG.A.P., PIF, Orgânico Brasil, Fair Trade
- **Logística**: CEAGESP Juazeiro e Porto Seco para exportação

## Funcionalidades Principais

- Sistema de compra e venda de produtos agrícolas
- Chat em tempo real para negociações
- Sistema de avaliação de usuários
- Integração com mapas para localização de propriedades
- Sistema de pagamentos integrado
- Histórico de transações e avaliações

## Requisitos

### Backend
- Python 3.8+
- Flask
- SQLAlchemy
- Flask-SocketIO

### Frontend
- Node.js
- React
- Material-UI

## Configuração

1. Clone o repositório
2. Configure o ambiente virtual Python:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

3. Configure o frontend:
```bash
cd frontend
npm install
```

4. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com:
```
SECRET_KEY=sua_chave_secreta
GOOGLE_MAPS_API_KEY=sua_chave_google_maps
STRIPE_API_KEY=sua_chave_stripe
```

5. Inicie o servidor:
```bash
# Backend
python app.py

# Frontend (em outro terminal)
cd frontend
npm start
```

## Estrutura do Projeto

```
agrolink/
├── app.py              # Aplicação Flask principal
├── requirements.txt    # Dependências Python
├── frontend/          # Aplicação React
│   ├── src/
│   ├── package.json
│   └── public/
└── README.md
```

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.

## 🌐 Site

Acesse o AgroLink em: [https://joao2666.github.io/AgroLink/](https://joao2666.github.io/AgroLink/)

## 📝 Descrição

O AgroLink é uma plataforma que conecta produtores agrícolas do Vale do São Francisco com compradores de todo o Brasil. Nossa missão é facilitar o comércio de produtos agrícolas, promovendo o desenvolvimento econômico da região.

## 🚀 Tecnologias

- Frontend:
  - React.js
  - Material-UI
  - React Router

- Backend:
  - Python
  - Flask
  - SQLite

## 💻 Desenvolvimento

Para rodar o projeto localmente:

1. Clone o repositório:
```bash
git clone https://github.com/JOAO2666/AgroLink.git
```

2. Instale as dependências do frontend:
```bash
cd frontend
npm install
```

3. Instale as dependências do backend:
```bash
pip install -r requirements.txt
```

4. Execute o projeto:
```bash
# Terminal 1 - Backend
python app.py

# Terminal 2 - Frontend
cd frontend
npm start
```

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter um pull request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
