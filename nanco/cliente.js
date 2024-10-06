class Cliente {
    constructor(nombre, apellido, cedula, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.direccion = direccion;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getCedula() {
        return this.cedula;
    }

    getDireccion() {
        return this.direccion;
    }
}

// Ejemplo de uso
let cliente = new Cliente("Juan", "Pérez", "123456789", "Calle 123");
console.log(cliente.getNombre()); // Juan
console.log(cliente.getApellido()); // Pérez
console.log(cliente.getCedula()); // 123456789
console.log(cliente.getDireccion()); // Calle 123