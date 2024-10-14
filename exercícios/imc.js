/*
Rayssa Garcia tem 19 anos, pesa 55 kg e tem 1.55 de altura
e seu IMC é de:
*/

const nome = 'Rayssa';
const sobrenome = 'Garcia';
const idade = 19;
const peso = 55;
const alturaEmM = 1.55;
let anoNascimento;
let indiceMassaCorporal; // peso / (altura * altura)

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
console.log(indiceMassaCorporal)

anoNascimento = 2024 - 19
console.log(anoNascimento)

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} e tem ${alturaEmM} de altura`)
console.log(`nasceu em: ${anoNascimento}. E o seu IMC é: ${indiceMassaCorporal}`)