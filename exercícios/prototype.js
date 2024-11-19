function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto= () => this.nome + ' ' + thid.sobrenome;
}

Pessoa.prototype.estouAqui= 'hahahahah';

const pessoa1 = new Pessoa('Luiz', 'otavio'); // pessoa = função construtora
const pessoa2 = new Pessoa('Carol', 'garcia'); // pessoa = função construtora

console.dir(pessoa1);
console.dir(pessoa2);