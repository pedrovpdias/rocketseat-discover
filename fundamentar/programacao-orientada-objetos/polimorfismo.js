//Polimorfismo

class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso;
    }

    definirCategoria() {
        if(this.peso <= 50) {
            this.categoria = 'infantil';       
        } else if (this.peso <= 65) {
            this.categoria = 'juvenil';
        } else {
            this.categoria = 'adulto';
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    //Reescrevendo o método definirCategoria
    definirCategoria() {
        if(this.peso <= 60) {
            this.categoria = 'pena';
        } else if(this.peso <= 75) {
            this.categoria = 'leve';
        } else if(this.categoria <= 90) {
            this.categoria = 'meio-pesado';
        } else {
            this.categoria = 'pesado';
        }
    }
}