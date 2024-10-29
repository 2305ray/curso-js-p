function relogio(){
    //receber os segudnos, criar data e devolve-la
    function criaHoraSec(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString ('pt-BR', {
            hour12:false,
            timeZone: 'GMT'
        });
    }
    console.log(criaHoraSec(10));

    //precisa de uma variavel que mantenha os segundos
    const relogio = document.querySelector('.relogio');
    //const iniciar = document.querySelector('.iniciar');
    //const pausar = document.querySelector('.pausar');
    //const zerar = document.querySelector('.zerar');
    let segundos = 0; // ta mantendo um estado
    let timer;

    //precisa ter alguma coisa que inicie o relogio
    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraSec(segundos)
        }, 1000);
    }


    //pra quando tiver mts botões 

    document.addEventListener('click', function (e){
        const el = e.target;
        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado')
        };

        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            
            relogio.classList.add('pausado');
        };

        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        };
    });
        
    /*
    iniciar.addEventListener('click', function(event) {
        
    });  

    pausar.addEventListener('click', function(event) {
        
    });

    zerar.addEventListener('click', function(event) {
    
    });
    */
}
relogio();