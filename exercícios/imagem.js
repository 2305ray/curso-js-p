//Escrever uma função chamada ePaisagem
//Ela vai receber dois argumentos
//os argumentos são a largura e a altura em forma de number
//retornar true se estiver em paisagem, do contr´rio false.

function paisagem(largura, altura) { 
    return largura > altura
 }

console.log(paisagem(1080, 1090))



const ePaisagem = (largura, altura) => largura > altura 
console.log(ePaisagem(1089, 1080))