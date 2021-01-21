const { usuarios } = require('../../../data/db')

module.exports = {
    indexUsuario( filtro ) {
        if( !filtro ) return -1

        const { id, email } = filtro

        if( id ) {
            return usuarios.findIndex( u => u.id === id )
        } else if( email ) {
            return usuarios.findIndex( u => u.email === email )
        }
        
        return -1

    }
}