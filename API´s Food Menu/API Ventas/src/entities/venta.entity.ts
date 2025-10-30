 class Venta{
     ventaId: Number;
     ventaUuid: String;
     fecha: Date;
     total: Number;
     hora: String;
    
    /** Obtiene el ID de la venta. */
    getVentaId(): Number {
        return this.ventaId;
    }

    /** Establece el ID de la venta. */
    setVentaId(value: Number): void {
        this.ventaId = value;
    }

    /** Obtiene el UUID de la venta. */
    getVentaUuid(): String {
        return this.ventaUuid;
    }

    /** Establece el UUID de la venta. */
    setVentaUuid(value: String): void {
        this.ventaUuid = value;
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