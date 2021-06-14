const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const md5 = require('md5');

const mensagemErroObrigatiro = '*Campo obrigatório!';
const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: [true, mensagemErroObrigatiro]
    },
    email: {
        type: String,
        required: [true, mensagemErroObrigatiro]
    },
    senha: {
        type: String,
        required: [true, mensagemErroObrigatiro]
    }
});

// define um evento que é executado antes do usuário ser salvo no banco
UsuarioSchema.pre('save', function (next) {
// criptografa a senha do usuário para não ficar exposta no banco    
    this.senha = md5(this.senha);
    next();
});

// faz o link do schema com a colection(leia tabela) 'usuarios'
const Usuario = mongoose.model('usuarios', UsuarioSchema);
module.exports = Usuario;