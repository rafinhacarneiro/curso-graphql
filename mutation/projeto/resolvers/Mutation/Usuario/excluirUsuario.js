const { usuarios } = require('../../../data/db')
const { indexUsuario } = require("./indexUsuario")

module.exports = {
    excluirUsuario( _, { filtro } ) {
        
        const i = indexUsuario(filtro)

        if( i < 0 ) return null

        const deleted = usuarios.splice( i, 1 )

        return deleted ? deleted[0] : null

    }
}