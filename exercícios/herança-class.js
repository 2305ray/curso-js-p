class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

     ligar() {
        if(this.ligado) { 
            console.log(this.nome + 'ja ligado');
            return;
            }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) { 
            console.log(this.nome + 'ja desligado');
            return;
            }
            this.ligado = false;
    }
}


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //ele chama o parametro nome do pai dele
        this.cor = cor;
        this.modelo = modelo;
        super.ligar(); // chama o método do pai
    }
}

const s1 = new Smartphone('Samsung', 'preto', 'Galaxy S10');
//s1.ligar(); //chama o método criado dentro da classe ou subescrito

console.log(s1);
