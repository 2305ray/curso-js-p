 function rand(min = 0, max = 3) {
  min *= 1000;
   max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
 }

  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if(typeof msg !== 'string') {
                reject('cai no erro');
           }

            resolve(msg.toUpperCase() + ' - Passei na promise'); // Resolve a Promise com a mensagem
            return
        }, tempo); // Espera o tempo especificado antes de resolver
    });
 }



// esperaAi('FASE 1', rand())
// .then(valor => {
//    console.log(valor);
//    return esperaAi('FASE 2', rand())
// })
// .then(fase => {
//    console.log(fase);
//    return esperaAi ('FASE', rand());
//})
// .then(fase => {
//    console.log(fase);
// })
// .catch(e => console.log(e));

async function executa() {
    try {
      const fase1 = await esperaAi('FASE 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi(2, rand());
    console.log(fase2);

    const fase3 = await esperaAi('FASE 3', rand());
    console.log(fase3);

    console.log('terminamos na fase:', fase3); 
    } catch(e) {
        console.log(e);
    }
}
executa();