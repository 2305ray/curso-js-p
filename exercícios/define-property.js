function Produto(nome, preco, estoque) {
    //variáveis públicas
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: true, //pode alterar
        configurable: true //configurável
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(object.keys(p1));

//ouuuu

for(let chave in p1) {
    console.log(chave);
}


