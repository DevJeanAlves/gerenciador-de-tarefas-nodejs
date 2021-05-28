// busca na raiz do projeto um arquivo chamado .env que contém as variáveis de ambiente
require('dotenv').config();

const App = require('./src/App');

const app = new App();
app.iniciar();

app.iniciar