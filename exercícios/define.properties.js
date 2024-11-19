function Produto(nome, preco, estoque) {
    //variáveis públicas
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: estoque, //valor
            writable: true, //pode alterar
            configurable: true //configurável
        },
        preco: {
            enumerable: true, //mostra a chave
            value: estoque, //valor
            writable: true, //pode alterar
            configurable: true //configurável
        }
    });
}