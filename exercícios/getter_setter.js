//função construtora

function Produto(nome, preco, estoque) {
    //variáveis públicas
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor){
            console.log(valor)
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'o valor que eu quero'; //atribuição (foi passado um valor)
console.log(p1.estoque);


//factory function
//se faz direto no objeto

function criaProduto(nome) {
    let _nome = nome; // variável privada para armazenar o valor
    
    return {
        get nome() {
            return _nome;
        },
        set nome(valor) {
            _nome = valor.replace('coisa', ''); // Substitui "coisa" por uma string vazia
            
        }
    };
}

const p2 = criaProduto('camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome); // 'qualquer '

