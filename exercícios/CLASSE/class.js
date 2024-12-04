class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando.`)
    }
}


// FUNÇÃO CONSTRUTORA
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}



const pessoa = new Pessoa('luiz', 'miranda'); // não esquecer da palavra new
const pessoa2 = new Pessoa2('carmen', 'miranda');