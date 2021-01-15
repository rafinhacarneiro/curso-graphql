module.exports = {
    precoComDesconto( produto ) {
        var preco = produto.preco
        
        if( produto.desconto ) {
            preco *= ( 1 - produto.desconto )
        }

        return preco
    }
}