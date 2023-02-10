//Encapsulamento

//Classe Polígono
class Poligono {
    //construtor
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.#calcularArea()
    }

    //# faz com que o método seja acessível apenas dentro da classe
    #calcularArea() {
        return this.altura * this.largura;
    }
}

let poligono = new Poligono(50, 60);
console.log(poligono);