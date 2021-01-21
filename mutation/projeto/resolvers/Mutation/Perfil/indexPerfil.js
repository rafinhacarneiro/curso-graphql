const { perfis } = require("../../../data/db")

module.exports = {
    indexPerfil( filtro ) {
        if( !filtro ) return -1

        const { id, nome } = filtro

        if( id ) {
            return perfis.findIndex( u => u.id === id )
        } else if( nome ) {
            return perfis.findIndex( u => u.nome === nome )
        }

        return -1
        
    }
}