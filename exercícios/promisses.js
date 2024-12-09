// CALLBACK
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaA(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if (cb) cb();
    }, tempo);
}

esperaA('fRASE 1', rand(1, 3), function() { // são vão ser chamados dps q o outro for executado
  esperaA('fRASE 2', rand(1, 3),  function() {
    esperaA('fRASE 3', rand(1, 3));
    });  
});


// PROMISSES
// Função para gerar um número aleatório em milissegundos
function rand(min, max) {
    min *= 1000; // Multiplica por 1000 para converter para milissegundos
    max *= 1000; // Multiplica por 1000 para converter para milissegundos
    return Math.floor(Math.random() * (max - min) + min); // Retorna o valor aleatório
}

// Função que retorna uma Promise
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            console.log(msg); // Exibe a mensagem no console
            resolve(msg); // Resolve a Promise com a mensagem
        }, tempo); // Espera o tempo especificado antes de resolver
    });
}

// Usando a função esperaAi com encadeamento de Promises
esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta); // Exibe a resposta da Promise resolvida
        return esperaAi('Buscando os dados da BASE', rand(1, 3)); // Chama a próxima Promise
    })
    .then(resposta => {
        console.log(resposta); // Exibe a resposta da segunda Promise resolvida
        return esperaAi( 22222, rand(1, 3)); // Chama a última Promise
    })
    .then(resposta => {
        console.log('Exibe os dados na TELA'); // Exibe a resposta da última Promise
    })
    .catch(e => {
        console.log('ERRO:', e); // Captura e exibe erros caso aconteçam
    });


    // MÉTODOS ÚTEIS
    function espera(msg, tempo) {
        return new Promise((resolve, reject) => {
            if(typeof msg !== 'string') reject(false);
    
            setTimeout(() => {
                resolve(msg.toUpperCase() + ' - Passei na promise'); // Resolve a Promise com a mensagem
            }, tempo); // Espera o tempo especificado antes de resolver
        });
    }
    
    // promise.all  
    const promises = [
        'Primeiro valor',
        espera('Promise 1', 3000), //segundos
        espera('Promise 2', 200), //milissegundos
        espera('Promise 3', 1000),
    ]

    Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })



     // MÉTODOS ÚTEIS
     function espera(msg, tempo) {
        return new Promise((resolve, reject) => {
            if(typeof msg !== 'string') reject(false);
    
            setTimeout(() => {
                resolve(msg.toUpperCase() + ' - Passei na promise'); // Resolve a Promise com a mensagem
            }, tempo); // Espera o tempo especificado antes de resolver
        });
    }
    
    // Promise.race 
    const promise = [
        'Primeiro valor',
        espera('Promise 1', 3000), //segundos
        espera('Promise 2', 200), //milissegundos
        espera('Promise 3', 1000),
    ]

    Promise.race(promise)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

// promise.resolve
    function baixaPagina() {
        const emCache = true;

        if(emCache) {
            return Promise.resolve('Página em cache');
        } else {
            return esperaA ('baixei a página', 3000);
        }
    }

    baixaPagina() 
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));
    
    // promise.reject
    function baixaPagina() {
        const emCache = true;

        if(emCache) {
            return Promise.reject('Página em cache');
        } else {
            return esperaA ('baixei a página', 3000);
        }
    }

    baixaPagina() 
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));


    // o then é a forma de usar esses dados em uma função.