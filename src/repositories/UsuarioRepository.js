
// faz a definição da interface do repositório de usuários
// então qualquer implementação de repositório de usuário vai precisar ter os métodos definidos aqui
module.exports = (Implementacao) => {
    if(!Implementacao.cadastrar) {
        throw new Error(`A classe ${Implementacao} não implementou o método cadastrar!`)
    }
    
    return Implementacao
}