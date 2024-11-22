function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto= () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.estouAqui= 'hahahahah';
//pessoa.prototype === pesoa1._proto_

pessoa1.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'otavio'); // pessoa = função construtora
const pessoa2 = new Pessoa('Carol', 'garcia'); // pessoa = função construtora

console.dir(pessoa1);
console.dir(pessoa2);



// ###################
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
produto.prototype.desconto = function(quantia) {
    this.preco += quantia;
};

function Camiseta(nome, preco, cor) {
    
}