const produto = { nome: 'produto', preco: 1.8};
const caneca = {
    ...produto,
    material: 'porcelana'
}; // o valor dessa variável está atrelado a de cima.

caneca.nome = "Luiz otávio"; //O valor da variável produto foi alterado
caneca.preco = 2.5; // não está totalmente igual, o preço foi mudado, entretanto os dois estão ligados entt os dois vão ser alterados tbm

console.log(caneca);//consequentemente o valor da variável outraCoisa foi tbm
console.log(produto);

// para os dois não apontarem para o msm local na memória é só abrir um objeto e usar o spread operator 
//pois, está apenas fazendo uma cópia do original e sobrescrevendo dps

// é possível criar chaves, dentro desse obejto com o spread