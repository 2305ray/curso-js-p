//função construtora -> objetos
// função fábrica -> objetos
//construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ': Sou eu');
    };
}

const p1= new Pessoa('Luiz', 'Otavio');
const p2= new Pessoa('Maria', 'Luiza');

p2.metodo();



