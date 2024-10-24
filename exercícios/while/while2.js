//função que gera um número aleátorio de 0 a 50

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // retorna um número inteiro

}

/* let rand = random (1, 50);
console.log(rand); */

const min = 1;
const max = 50;
let rand = random(min, max);

// quando for gerar um número aleátorio quero pegar o número 10 toda vez
//enquanto o rand for difrente de 10 executa, caso for 10 ele para
//atualizar o laço

while(rand !== 10) {
     rand = random(1, 50);
     console.log(rand);
}