const { usuarios, perfis } = require('../../data/db')

module.exports = {
    usuarios() {
        return usuarios
    },
    usuario( _, args ) {
        const filtered = usuarios.filter( u => u.id == args.id )
        return filtered ? filtered[0] : null
    },
    perfis() {
        return perfis
    },
    perfil( _, { id } ) {
        const filtered = perfis.filter( u => u.id == id )
        return filtered ? filtered[0] : null
    }
}