const { perfis } = require('../../../data/db')
const { indexPerfil } = require("./indexPerfil")

module.exports = {
    excluirPerfil( _, { filtro } ) {
        
        const i = indexPerfil(filtro)

        if( i < 0 ) return null

        const deleted = perfis.splice( i, 1 )

        return deleted ? deleted[0] : null

    }
}