class Producto{
     productoId: Number;
     productoUuid: String;
     nombre:String;
     precio: Number;

       /** Obtiene el ID del producto. */
    getProductoId(): Number {
        return this.productoId;
    }

    /** Establece el ID del producto. */
    setProductoId(value: Number): void {
        this.productoId = value;
    }

    /** Obtiene el UUID del producto. */
    getProductoUuuid(): String {
        return this.productoUuid;
    }

    /** Establece el UUID del producto. */
    setProductoUuid(value: String): void {
        this.productoUuid = value;
    }

    /** Obtiene el nombre del producto. */
    getNombre(): String {
        return this.nombre;
    }

    /** Establece el nombre del producto. */
    setNombre(value: String): void {
        this.nombre = value;
    }

    /** Obtiene el precio del producto. */
    getPrecio(): Number {
        return this.precio;
    }

    /** Establece el precio del producto. */
    setPrecio(value: Number): void {
        this.precio = value;
    }
}

export {Producto}