
 export class Sucursal {
     sucursalId: Number;
     sucursalUuid: String;
     nombre: String;
     direccion: String;
     telefono: String;

    constructor(sucursalId: Number) {
        this.sucursalId = sucursalId;
    }

    getSucursalId(): Number {
        return this.sucursalId;
    }

    getSucursalUuid(): String {
        return this.sucursalUuid;
    }

    getNombre(): String {
        return this.nombre;
    }

    getDireccion(): String {
        return this.direccion;
    }

    getTelefono(): String {
        return this.telefono;
    }

    setSucursalId(sucursalId: Number): void {
        this.sucursalId = sucursalId;
    }

    setSucursalUuid(sucursalUuid: String): void {
        this.sucursalUuid = sucursalUuid;
    }

    setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    setDireccion(direccion: String): void {
        this.direccion = direccion;
    }

    setTelefono(telefono: String): void {
        this.telefono = telefono;
    }
}

