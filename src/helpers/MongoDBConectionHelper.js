const mongoose = require('mongoose')

class MongoDBConectionHelper {
// define um metodo estatico que faz a conexão com o mongoDB
// como o metodo é estatico eu não preciso istanciar o objeto para usar
    static conectar() {
        // faz efetivamente a conexão com o mongoDB
        const conexao = mongoose.connect(process.env.MONGO_DB_STRING_CONEXAO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // quando a conexão for realizada com sucesso ele vai mostrar a mensagem de sucesso
        mongoose.connection.on('connected', () => console.warn('conectado ao mongoDB'));
    
        // se der algum erro na conexão, ele vai mostrar a mensagem de erro
        mongoose.connection.on('error', e => console.error('Erro ao conectar ao mongoDB', e.message))

        return conexao;
    }
}

module.exports = MongoDBConectionHelper;