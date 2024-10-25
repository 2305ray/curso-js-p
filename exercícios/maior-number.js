//escrever uma função que receba dois números e que retornea o maior deles.

/*function maiorNumber () {
    const menor = 2
    const maior = 6

    if (maior > menor) {
        return maior;
    } else {
     return y;
    }
}
    const max = maiorNumber(1, 2)
    console.log(max)
    */

/*function maiorNumber (x, y) {
    if (x > y) return x;
    return y;

}
*/

function maiorNumber (x, y) {
    return x > y ? x : y;
}
console.log(maiorNumber(8, 5));


const max2 = (x, y) => x > y ? x : y;
console.log(max2(20, 70))