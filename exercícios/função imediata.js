(function (idade, peso, altura) {
const sobrenome = 'mendez';
function criaNome(nome) {
    return nome + ' ' + sobrenome;
}
function falaNome() {
    console.log(criaNome('luiz'));
}
 falaNome();
 console.log(idade, peso, altura)
}) (30, 80, 1.80)