const { usuarios, nextID } = require('../../../data/db')

module.exports = {
    novoUsuario( _, { dados } ) {
    
        const existingEmail = usuarios.some( u => u.email === dados.email )
    
        if( existingEmail ) throw new Error('Email já cadastrado')
        
        const newUser = {
            id: nextID(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }
    
        usuarios.push(newUser)
        return newUser
    }
}