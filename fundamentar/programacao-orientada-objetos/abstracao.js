//Abstração

//Classe abstrata
class Parafuso {
    constructor() {
        //Não é possível instanciar uma classe abstrata
        //const parafuso = new Parafuso() // retorna erro
        if(this.constructor === Parafuso) {
            throw new Error('Uma classe abstrata não pode ser instanciada');
        }
    }

    get tipo() {
        throw new Error('O método "get tipo()" precisa ser implementado');
    }
}

class Fenda extends Parafuso {
    constructor() {
        super();
    }

    get tipo() {
        return 'fenda';
    }
}

class Philips extends Parafuso {
    constructor() {
        super();
    }

    get tipo() {
        return 'philips';
    }
}

class Allen extends Parafuso {}

//Criar e usar
//new Parafuso();     //Erro: Uma classe abstrata não pode ser instanciada
let fenda = new Fenda();
let philips = new Philips();
let allen = new Allen();

console.log(fenda.tipo, philips.tipo);
//console.log(allen.tipo); //Erro: O método "get tipo()" precisa ser implementado