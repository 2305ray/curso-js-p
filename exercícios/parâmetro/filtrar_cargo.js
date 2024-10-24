export function filtroCargo(data) {
    let filtrado = [];
    for(let i of data) {
        if (i.cargo === 'advogado') {
            filtrado.push(i) 
       
        }
    
    }
console.log(filtrado)
}