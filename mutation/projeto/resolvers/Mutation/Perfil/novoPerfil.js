const { perfis } = require('../../../data/db')

module.exports = {
    novoPerfil( _, { dados } ) {
    
        const existingNome = perfis.some( u => u.existingNome === dados.nome )
    
        if( existingNome ) throw new Error('Perfil já cadastrado')
        
        const newPerfil = {
            id: nextID(),
            ...dados
        }
    
        perfis.push(newPerfil)
        return newPerfil
    }
}