function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => { // Corrigido para `this.display.addEventListener`
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
           let conta =  this.display.value;

           try{
            conta = eval(conta);

                if(!conta) {
                    alert('conta inválida');
                    return;
                }

                this.display.value = String(conta);
           } catch(e) {
            alert('conta inválida');
            return;
           }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1) //tamanho da string - 1
        },

        cliqueBotoes() {
            //o this é a calculadora
            //ao usar o document, o this passou a ser o document que é oque ta chamando o click
            //fazer o this apontar para a calculadora
            document.addEventListener('click', e => {
               const el = e.target; 

               if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
                //fazer link do que ta no botão e que vai pro display
                //método que ta dentro de um método precisa do this
                this.display.focus();
               }

               if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
               }

               if(el.classList.contains('btn-del')) {
                this.apagaUm();
               }

               if(el.classList.contains('btn-eq')) {
                this.realizaConta();
               }
            }); //para fazer com que use o seu this não oque ele coloca já pra vc
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

//quem chama o método é o this
//método para baixo
const calculadora = criaCalculadora();
calculadora.inicia();