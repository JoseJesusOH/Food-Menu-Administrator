import { Sucursal } from "@entity/sucursal.entity"

export class Compra {
     compraId: Number;
     compraUuid: String;
     fecha: Date;
     hora: Date;
     total: Number;
     sucursal: Sucursal

    constructor(compraId: Number) {
        this.compraId = compraId;
    }

    getCompraId(): Number {
        return this.compraId;
    }

    getCompraUuid(): String {
        return this.compraUuid;
    }

    getFecha(): Date {
        return this.fecha;
    }

    getHora(): Date {
        return this.hora;
    }

    getTotal(): Number {
        return this.total;
    }

    getSucursal(): Sucursal {
        return this.sucursal;
    }

    setCompraId(compraId: Number): void {
        this.compraId = compraId;
    }

    setCompraUuid(compraUuid: String): void {
        this.compraUuid = compraUuid;
    }

    setFecha(fecha: Date): void {
        this.fecha = fecha;
    }

    setHora(hora: Date): void {
        this.hora = hora;
    }

    setTotal(total: Number): void {
        this.total = total;
    }

    setSucursal(sucursal: Sucursal): void {
        this.sucursal = sucursal;
    }
}
