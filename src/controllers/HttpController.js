const AppConstants = require('../enum/AppConstants')

class HttpController {
    constructor(instanciaExpress) {
        if(!instanciaExpress){
            throw new Error('A instanciado express é obrigatória')
        }
        //persiste na propriedade express do controller a instância do express criada no app.js
        this.express = instanciaExpress
        this.configurarRotas(AppConstants.BASE_API_URL)
    }

    configurarRotas(baseUrl) {
        throw new Error('Metodo configurarRotas precisa ser implementado')
    }
}

module.exports = HttpController;