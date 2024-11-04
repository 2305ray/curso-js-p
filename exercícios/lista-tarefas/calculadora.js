//#####REGRAS
//tudo o que for método, vai para baixo da calculadora
//atributos(variáveis) vão pra cima

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('btn-clear'),





        inicia() {
           this.cliqueBotoes()
          
        },

        cliqueBotoes(){
            // this -> calculadora
            document.addEventListener('click', e =>{
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
            } .bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();