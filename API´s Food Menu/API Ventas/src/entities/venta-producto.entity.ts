
 class VentaProducto{
     ventaProductoId: Number;
     ventaProductoUuid: String;
    cantidad: Number;
    subtotal:Number;
    iva: Number;
    total: Number;    
      /** Obtiene el ID del detalle de venta. */
    getVentaProductoId(): Number {
        return this.ventaProductoId;
    }

    /** Establece el ID del detalle de venta. */
    setVentaProductoId(value: Number): void {
        this.ventaProductoId = value;
    }

    /** Obtiene el UUID del detalle de venta. */
    getVentaProductoUuid(): String {
        return this.ventaProductoUuid;
    }

    /** Establece el UUID del detalle de venta. */
    setVentaProductoUuid(value: String): void {
        this.ventaProductoUuid = value;
    }

    /** Obtiene la cantidad vendida del producto. */
    getCantidad(): Number {
        return this.cantidad;
    }

    /** Establece la cantidad vendida del producto. */
    setCantidad(value: Number): void {
        this.cantidad = value;
    }

    /** Obtiene el subtotal de la venta del producto. */
    getSubtotal(): Number {
        return this.subtotal;
    }

    /** Establece el subtotal de la venta del producto. */
    setSubtotal(value: Number): void {
        this.subtotal = value;
    }

    /** Obtiene el IVA aplicado al producto. */
    getIva(): Number {
        return this.iva;
    }

    /** Establece el IVA aplicado al producto. */
    setIva(value: Number): void {
        this.iva = value;
    }

    /** Obtiene el total correspondiente al producto vendido. */
    getTotal(): Number {
        return this.total;
    }

    /** Establece el total correspondiente al producto vendido. */
    setTotal(value: Number): void {
        this.total = value;
    }
}

export {VentaProducto}