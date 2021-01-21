const usuarioMutations = require("./Usuario")
const perfilMutations = require("./Perfil")

module.exports = {
    ...usuarioMutations,
    ...perfilMutations
}