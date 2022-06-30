class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia; // this sempre se refere ao objeto dentro da classe
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // para propriedade getter ou setter sempre colocar um underscore no inicio do subojeto
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valro) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return 'Saldo insuficiente!';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero); // Classe filha vai mandar tudo para classe pai por conta desta propriedade
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria { // classe filha da classe contaCorrente
    constructor(agencia, numero) {
        super(agencia, numero); 
        this.tipo = 'Poupança';
    }
}

class contaUniversitaria extends contaBancaria { // classe filha da classe contaCorrente
    constructor(agencia, numero) {
        super(agencia, numero); 
        this.tipo = 'Universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação Negada!'
        }

        this._saldo = this._saldo - valor;
    }
}
