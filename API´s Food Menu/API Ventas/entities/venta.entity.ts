 class Venta{
     ventaID: Number;
     ventaUUID: String;
     fecha: Date;
     total: Number;
     hora: String;
    
    /** Obtiene el ID de la venta. */
    getVentaID(): number {
        return this.ventaID;
    }

    /** Establece el ID de la venta. */
    setVentaID(value: number): void {
        this.ventaID = value;
    }

    /** Obtiene el UUID de la venta. */
    getVentaUUID(): string {
        return this.ventaUUID;
    }

    /** Establece el UUID de la venta. */
    setVentaUUID(value: string): void {
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
    getTotal(): number {
        return this.total;
    }

    /** Establece el total de la venta. */
    setTotal(value: number): void {
        this.total = value;
    }

    /** Obtiene la hora en que se realizó la venta. */
    getHora(): string {
        return this.hora;
    }

    /** Establece la hora en que se realizó la venta. */
    setHora(value: string): void {
        this.hora = value;
    }
}

export {Venta}