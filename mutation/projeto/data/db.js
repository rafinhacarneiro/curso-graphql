let id = 1

function nextID() {
    return id++
}

const usuarios = [
    {
        id: nextID(),
        nome: "Teste",
        email: "teste@teste.com.br",
        idade: 26,
        salario_real: 123.45,
        vip: true,
        perfil_id: 2,
        status: "ATIVO"
    },
    {
        id: nextID(),
        nome: "Teste 2",
        email: "teste2@teste.com.br",
        idade: 26,
        salario_real: 123.45,
        vip: true,
        perfil_id: 1,
        status: "INATIVO"
    },
    {
        id: nextID(),
        nome: "Teste 3",
        email: "teste3@teste.com.br",
        idade: 26,
        salario_real: 123.45,
        vip: true,
        perfil_id: 1,
        status: "BLOQUEADO"
    }
]

const perfis = [
    {
        id: 1,
        nome: "Comum"
    },
    {
        id: 2,
        nome: "Administrador"
    }
]

module.exports = { usuarios, perfis, nextID }