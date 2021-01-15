const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return "Hello World"
    },
    agora() {
        return new Date
    },
    usuarioLogado(obj) {
        console.log(obj)
        return {
            id: 1,
            nome: "Teste",
            email: "teste@teste.com.br",
            idade: 26,
            salario_real: 123.45,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: "Produto 1",
            preco: 110.00,
            desconto: 0.25
        }
    },
    numerosMegaSena() {
        const cresc = ( a, b ) => a - b
        return Array(6).fill(0).map( () => parseInt( Math.random() * 60 + 1 ) ).sort(cresc)
    },
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