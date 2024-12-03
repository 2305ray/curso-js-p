function ValidaCPF(cpfEnviado) {
 Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
        return cpfEnviado.replace(/\D+/g, ''); //substitui tudo q n for número para nada
    }
 });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    //criar um novo cpf e comparar com oq foi enviado
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};



//criar um método que recebe o numero do cpf e que faz o cáculo dos dígitos

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray =  Array.from(cpfParcial);
    
    // precisa de um acumulador (que vai dar o total)  e um contador regressivo
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
         // qualquer coisa que for fazer tem que ser antes do regressivo, pq aí começa apartir do 10 e para no 2
        ac += (regressivo * Number(val)); // o val tem q ser um number
        regressivo--; //contar de trás para frente
        return ac;
    }, 0);
    const digito =  11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.lenght);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }
