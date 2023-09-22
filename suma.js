class Suma {
    constructor() {
        this.valor1 = 0;
        this.valor2 = 0;
    }

    cargarValor1(v) {

        this.valor1 = v;
    }

    cargarValor2(v) {

        this.valor2 = v;
    }

    retornarResultado() {

        return this.valor1 + this.valor2;
    }
}