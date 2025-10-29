
 class VentaProducto{
     ventaProductoID: Number;
     ventaProductoUUID: String;
    cantidad: Number;
    subtotal:Number;
    iva: Number;
    total: Number;    
      /** Obtiene el ID del detalle de venta. */
    getVentaProductoID(): number {
        return this.ventaProductoID;
    }

    /** Establece el ID del detalle de venta. */
    setVentaProductoID(value: number): void {
        this.ventaProductoID = value;
    }

    /** Obtiene el UUID del detalle de venta. */
    getVentaProductoUUID(): string {
        return this.ventaProductoUUID;
    }

    /** Establece el UUID del detalle de venta. */
    setVentaProductoUUID(value: string): void {
        this.ventaProductoUUID = value;
    }

    /** Obtiene la cantidad vendida del producto. */
    getCantidad(): number {
        return this.cantidad;
    }

    /** Establece la cantidad vendida del producto. */
    setCantidad(value: number): void {
        this.cantidad = value;
    }

    /** Obtiene el subtotal de la venta del producto. */
    getSubtotal(): number {
        return this.subtotal;
    }

    /** Establece el subtotal de la venta del producto. */
    setSubtotal(value: number): void {
        this.subtotal = value;
    }

    /** Obtiene el IVA aplicado al producto. */
    getIva(): number {
        return this.iva;
    }

    /** Establece el IVA aplicado al producto. */
    setIva(value: number): void {
        this.iva = value;
    }

    /** Obtiene el total correspondiente al producto vendido. */
    getTotal(): number {
        return this.total;
    }

    /** Establece el total correspondiente al producto vendido. */
    setTotal(value: number): void {
        this.total = value;
    }
}

export {VentaProducto}