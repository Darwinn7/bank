class CuentaAhorros extends Cuenta {
    constructor(numero, saldo, tasaInteres) {
        super(numero, saldo);
        this.tasaInteres = tasaInteres;
    }

    getTasaInteres() {
        return this.tasaInteres;
    }

    calcularInteres() {
        let interes = this.saldo * this.tasaInteres / 100;
        this.saldo += interes;
    }
}

// Ejemplo de uso
let cuentaAhorros = new CuentaAhorros("123456789", 1000, 5);
console.log(cuentaAhorros.getNumero()); // 123456789
console.log(cuentaAhorros.getSaldo()); // 1000
console.log(cuentaAhorros.getTasaInteres()); // 5
cuentaAhorros.calcularInteres();
console.log(cuentaAhorros.getSaldo()); // 1050