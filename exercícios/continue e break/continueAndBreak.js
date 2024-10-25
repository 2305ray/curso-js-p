const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numeros) {
    if (number === 5 || number === 2) {
        console.log('pulei o dois e o cinco') 
        continue;
    }
    console.log(number); 


    if (number === 7) {
        console.log('Sete encontrado, saindo...')
        break;
    }

   
}