//Escrever uma função que recebe um número que retorne:
//checar se não for um número = retornar o proprio valor enviado
//usar um loop entre 0 a 100
// divisível por 3 = fizz
//divisível por 5 = buzz
// divisível pelos dois = fizzbuzz
// por nenhum deles =  retornar ele msm.

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if(numero % 3 === 0 || numero % 5 === 0 ) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero
}

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
console.log(i, fizzBuzz(i));
}