const produto = {nome: 'produto', preco: 18};
for(let entry of Object.entries(produto)) {
    console.log(entry);
}; //pega a chave e o valor, ainda faz uma chave pra cada 

//pode fazer o destructuring direto no for
const produt = {nome: 'produto', preco: 18};
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}