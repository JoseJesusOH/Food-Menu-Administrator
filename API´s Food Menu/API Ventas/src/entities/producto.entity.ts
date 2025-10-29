class Producto{
     productoID: Number;
     productoUUID: String;
     nombre:String;
     precio: Number;

       /** Obtiene el ID del producto. */
    getProductoID(): number {
        return this.productoID;
    }

    /** Establece el ID del producto. */
    setProductoID(value: number): void {
        this.productoID = value;
    }

    /** Obtiene el UUID del producto. */
    getProductoUUID(): string {
        return this.productoUUID;
    }

    /** Establece el UUID del producto. */
    setProductoUUID(value: string): void {
        this.productoUUID = value;
    }

    /** Obtiene el nombre del producto. */
    getNombre(): string {
        return this.nombre;
    }

    /** Establece el nombre del producto. */
    setNombre(value: string): void {
        this.nombre = value;
    }

    /** Obtiene el precio del producto. */
    getPrecio(): number {
        return this.precio;
    }

    /** Establece el precio del producto. */
    setPrecio(value: number): void {
        this.precio = value;
    }
}

export {Producto}