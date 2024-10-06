class Cuenta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    getNumero() {
        return this.numero;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    retirar(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
        } else {
            console.log("No hay suficiente saldo");
        }
    }
}

// Ejemplo de uso
let cuenta = new Cuenta("123456789", 1000);
console.log(cuenta.getNumero()); // 123456789
console.log(cuenta.getSaldo()); // 1000
cuenta.depositar(500);
console.log(cuenta.getSaldo()); // 1500
cuenta.retirar(200);
console.log(cuenta.getSaldo()); // 1300