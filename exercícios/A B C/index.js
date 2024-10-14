//salvar um valor de uma das variáveis com uma nova variável (isso é do modo antigo)

/*
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varATemp = varA
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC); 
*/

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)
