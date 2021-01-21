const { usuarios } = require('../../../data/db')
const { indexUsuario } = require("./indexUsuario")

module.exports = {
    alterarUsuario( _, { filtro, dados } ) {

        const i = indexUsuario( filtro )

        if( i < 0 ) return null

        const usuario = {
            ...usuarios[i],
            ...dados
        }

        usuarios.splice( i, 1, usuario )

        return usuario

    }
}