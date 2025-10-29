class Producto{
     productoID: Number;
     productoUUID: String;
     nombre:String;
     precio: Number;

       /** Obtiene el ID del producto. */
    getProductoID(): Number {
        return this.productoID;
    }

    /** Establece el ID del producto. */
    setProductoID(value: Number): void {
        this.productoID = value;
    }

    /** Obtiene el UUID del producto. */
    getProductoUUID(): String {
        return this.productoUUID;
    }

    /** Establece el UUID del producto. */
    setProductoUUID(value: String): void {
        this.productoUUID = value;
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