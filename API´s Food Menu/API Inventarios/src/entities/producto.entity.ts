
export class Producto {
     productoId: Number;
     productoUuid: String;
     nombre: String;

    constructor(productoId: Number) {
        this.productoId = productoId;
    }

    getProductoId(): Number {
        return this.productoId;
    }

    getProductoUuid(): String {
        return this.productoUuid;
    }

    getNombre(): String {
        return this.nombre;
    }

    setProductoId(productoId: Number): void {
        this.productoId = productoId;
    }

    setProductoUuid(productoUuid: String): void {
        this.productoUuid = productoUuid;
    }

    setNombre(nombre: String): void {
        this.nombre = nombre;
    }
}
