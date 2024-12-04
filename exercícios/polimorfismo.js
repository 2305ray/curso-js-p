function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Método para sacar
Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente!: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

// Método para depositar
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo(); // Correção aqui
};

// Método para verificar saldo
Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}` 
    );
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this,agencia, conta, saldo);
    this.limite = limite;

    //é necessário sobrescrever o método sacar pq agr tem o limite
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente!: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this,agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca


const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log(); // só para quebrar a linha

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

/* Teste da classe
const conta1 = new Conta(11, 22, 10);
conta1.depositar(11); // Adiciona 11 ao saldo
conta1.depositar(10); // Adiciona 10 ao saldo
conta1.sacar(31);
conta1.sacar(0.01);
*/
