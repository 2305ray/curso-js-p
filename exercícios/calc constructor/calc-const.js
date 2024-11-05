function Calc () {

    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = function() {
        this.cliqueBotoes();
        this.pressionaEnter();
    };


    this.pressionaEnter = function() { // Adicionei `function` aqui
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) { // Tecla Enter
                this.realizaConta();
            }
        });
    };

    this.realizaConta = function() {
        let conta =  this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('conta inválida');
            return;
        }
    };

    this.clear = function() {
        this.display.value = '';
    };

    this.apagaUm = function() {
        this.display.value = this.display.value.slice(0, -1); // tamanho da string - 1
    };

    this.cliqueBotoes = function() {
        document.addEventListener('click', e => {
            const el = e.target; 

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
                this.display.focus();
            }

            if (el.classList.contains('btn-clear')) {
                this.clear(); // Alterado para this.clear()
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    }
}

const calculadora = new Calc();
calculadora.inicia();
  