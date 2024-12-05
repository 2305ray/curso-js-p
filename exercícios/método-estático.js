class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // MÉTODOS DE INSTÂNCIA
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // MÉTODO ESTÁTICO
    static trocaPilha() {
         
    }
}

const controle1= new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
ControleRemoto.trocaPilha();
console.log(controle1);