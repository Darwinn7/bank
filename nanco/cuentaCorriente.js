class CuentaCorriente extends Cuenta {
    constructor(numero, saldo, descubierto) {
        super(numero, saldo);
        this.descubierto = descubierto;
    }

    getDescubierto() {
        return this.descubierto;
    }

    retirar(monto) {
        if (this.saldo + this.descubierto >= monto) {
            this.saldo -= monto;
        } else {
            console.log("No hay suficiente saldo");
        }
    }
}

// Ejemplo de uso
let cuentaCorriente = new CuentaCorriente("123456789", 1000, 500);
console.log(cuentaCorriente.getNumero()); // 123456789
console.log(cuentaCorriente.getSaldo()); // 1000
console.log(cuentaCorriente.getDescubierto()); // 500
cuentaCorriente.retirar(1200);
console.log(cuentaCorriente.getSaldo()); // -200