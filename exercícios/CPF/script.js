// 705.484.450-52 070.987.720-03
/*
vai pegar cada numero do cpf e multiplicar de forma regressiva
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237 depois vai somar tudo

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2 / começa a contar deo 11
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

esses números 705.484.450 gera esses -52
dessa primeira conta saí o primeiro dígito na segunda conta inclui o digito que saiu

*/
let cpf = "705.484.450-52";
// pode ultilizar uma expressão regular para remover os pontos
let cpfLimpo =cpf.replace(/\D+/g, ""); // é uma representação númerica que representa tudo que não é número
// é preciso converter a string num array
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.map(el => el));