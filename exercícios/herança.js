
// primeiro abstrair numa coisa só, e dps especializa para reutilizar o código
// dentro do e-commerce eles reprsentam o produto
// fazer uma função que cria um produto

//produto -> possibilidade de aumento e desconto
// Camiseta = cor, Caneca = material, Lápis
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
// método feito no prototype
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

//para n precisar reescrever

function Camiseta(nome, preco, cor) {
    //dentro, precis afazer com que o código do produto seja executado
    // a função new cria um objeto vzio e aponta o this para ele e retorna ele
    Produto.call(this, nome, preco); //as duas funções foram linkadas
    this.cor = cor;
}

// é preciso linkar o prototype de camiseta e produto, de forma que consiga modificar o de camiseta mas não o do produto
// desse jeito não funciona (Camiseta.prototype = Produto.prototype); 
// criar um obejto e setar o proto do objeto vazio para o proto do produto

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
};


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); //vai herdar
    this.material = material;
    
    //criar getters e setters
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function( valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
 Caneca.prototype = Object.create(Produto.prototype); //linkar os prototypes
 Caneca.prototype.constructor = Caneca;
 

const camiseta = new Camiseta('regata', 7.5, 'preta');
camiseta.aumento(10);


const canenca = new Caneca('Batman', 10, 'Porcelana', 60)

console.log(camiseta);
console.log(canenca);


