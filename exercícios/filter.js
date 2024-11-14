const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter (valor) {
         return valor > 10;
}
  /* if(valor > 10) {
            return true;
        } else {
            return false;
            }
    }
 */


    const numeroFiltrados =  numeros.filter(callbackFilter);

    console.log(numeroFiltrados);


    //função anônima

    const num = [5, 10, 20, 1, 2, 3, 5, 8, 7, 30, 35, 42, 47, 34];
    const filter =  num.filter(function (valor) {
        return valor > 10;
});

console.log(filter);

//Arrow function

//como só tem um argumento, pode eliminar os parenteses em volta dele (valor)
//como só tem uma linha, pode eliminar as chaves tbm
//pode eliminar a palavra return tbm

/* const number = [5, 10, 20, 1, 2, 3, 5, 8, 7, 30, 35, 42, 47, 50];
    const filtrados =  number.filter((valor) => {
    return valor > 10;
}
); */

const number = [5, 10, 20, 1, 2, 3, 5, 8, 7, 30, 35, 42, 47, 50];
    const filtrados =  number.filter(valor => valor > 10);
console.log(filtrados);

