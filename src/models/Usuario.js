const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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