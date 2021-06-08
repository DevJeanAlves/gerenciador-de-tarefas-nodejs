const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger.json');
const Logincontroller = require('./controllers/LoginController');
const UsuarioController = require('./controllers/UsuarioController');
const AppConstants = require('./enum/AppConstants');

const logger = require('./middlewares/logger');
const jwt = require('./middlewares/jwt');

class App {
    #controllers;
    iniciar() {
        // configurar o express
        this.#configurarExpress();
        // carregar controllers
        this.#carregarControllers();
        // iniciar servidor
        this.#iniciarServidor();
    }

    #configurarExpress = () => {
        //cria a instância do express para gernciar o servidor
        this.express = express();

        // registra o middleware para fazer log das requisições
        this.express.use(logger);

        // regista os middleware para fazer a converção das requisições da API
        this.express.use(express.urlencoded({extended: true}));
        this.express.use(express.json());

        // registra o middleware do jwt para fazer validação do acesso as rotas atrvés das requisições recebidas
        this.express.use(jwt);

        // configura o swagger da aplicação para servir a documentação
        this.express.use(
            `${AppConstants.BASE_API_URL}/docs`,
            swaggerUi.serve,
            swaggerUi.setup(swaggerFile)
        );

        
    };

    #carregarControllers = () => {
        // atribui para propriedade #controllers a lista de controllers disponiveis da aplicação
        this.#controllers = [
            new Logincontroller(this.express),
            new UsuarioController(this.express)
        ]
    }

    #iniciarServidor = () => {
        // tenta pegar a porta a partir da ariavel de ambiente EXPRESS_PORT
        // se não tiver definida, vai usar a porta padrão 3001
        const port = process.env.EXPRESS_PORT || 3001
        this.express.listen(port, () => {
            console.log(`Aplicação executando na porta ${port}`)
        })
    }
}
module.exports = App
