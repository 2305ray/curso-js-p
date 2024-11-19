const produto = { nome: 'produto', preco: 1.8};
const caneca = Object.assign({}, produto, {material: "porcelana"}); // Ele faz a msm coisa q o spread
//também é possível criar uma chave dentro do assign, apenas colocando um obj dentro

caneca.nome = "Luiz otávio"; 
caneca.preco = 2.5;  

console.log(caneca);
console.log(produto)