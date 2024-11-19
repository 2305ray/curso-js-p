const produto = {nome: 'produto', preco: 19};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //primeiro vem o onjeto, e depois a chave que quer ver
//apenas mostra se é writable, configurabel, etc.
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    thid.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + " " + this.sobrenome


    //instância
    const pessoas1 = new(  'luiz', '0.'); //funcão construtora.
    const pessoas2 = new pessoa('maria', '10');

    console.dir(pessoas1);
    console.dir(pessoas2);
}