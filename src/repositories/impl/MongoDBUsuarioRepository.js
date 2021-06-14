const UsuarioRepository = require('../UsuarioRepository');
const Usuario = require('../../models/Usuario');

class MongoDBUsuarioRepository {
    static cadastrar(dadosUsuario) {
        return Usuario.create(dadosUsuario);
    }
}

module.exports = UsuarioRepository(MongoDBUsuarioRepository);