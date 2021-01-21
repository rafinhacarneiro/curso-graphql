const { perfis } = require('../../../data/db')
const { indexPerfil } = require("./indexPerfil")

module.exports = {
    alterarPerfil( _, { filtro, dados } ) {

        const i = indexPerfil( filtro )

        if( i < 0 ) return null

        const perfil = {
            ...perfis[i],
            ...dados
        }

        perfis.splice( i, 1, perfil )

        return perfil

    }
}