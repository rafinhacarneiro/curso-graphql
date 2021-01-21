const { perfis } = require('../../data/db')

module.exports = {
    salario( usuario ) {
        return usuario.salario_real
    },
    perfil( usuario ) {
        const filtered = perfis.filter( u => u.id == usuario.perfil_id )
        return filtered ? filtered[0] : null
    }
}