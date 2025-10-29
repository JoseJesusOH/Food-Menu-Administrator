 class Venta{
     ventaID: Number;
     ventaUUID: String;
     fecha: Date;
     total: Number;
     hora: String;
    
    /** Obtiene el ID de la venta. */
    getVentaID(): Number {
        return this.ventaID;
    }

    /** Establece el ID de la venta. */
    setVentaID(value: Number): void {
        this.ventaID = value;
    }

    /** Obtiene el UUID de la venta. */
    getVentaUUID(): String {
        return this.ventaUUID;
    }

    /** Establece el UUID de la venta. */
    setVentaUUID(value: String): void {
        this.ventaUUID = value;
    }

    /** Obtiene la fecha de la venta. */
    getFecha(): Date {
        return this.fecha;
    }

    /** Establece la fecha de la venta. */
    setFecha(value: Date): void {
        this.fecha = value;
    }

    /** Obtiene el total de la venta. */
    getTotal(): Number {
        return this.total;
    }

    /** Establece el total de la venta. */
    setTotal(value: Number): void {
        this.total = value;
    }

    /** Obtiene la hora en que se realizó la venta. */
    getHora(): String {
        return this.hora;
    }

    /** Establece la hora en que se realizó la venta. */
    setHora(value: String): void {
        this.hora = value;
    }
}

export {Venta}