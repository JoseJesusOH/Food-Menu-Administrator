/**
 * @file compra.entity.ts
 * @description Define la entidad `Compra`, que representa una transacción realizada en una sucursal.
 */

import { Sucursal } from "@entity/sucursal.entity";

/**
 * Representa una compra realizada en una sucursal.
 * 
 * Esta clase contiene los datos principales de una transacción de compra, 
 * incluyendo su identificador, fecha, hora, monto total y la sucursal 
 * donde fue efectuada.
 */
export class Compra {
    /**
     * Identificador numérico de la compra.
     */
    compraId: Number;

    /**
     * Identificador único universal (UUID) de la compra.
     */
    compraUuid: String;

    /**
     * Fecha en que se realizó la compra.
     */
    fecha: Date;

    /**
     * Hora exacta en que se realizó la compra.
     */
    hora: Date;

    /**
     * Monto total de la compra.
     */
    total: Number;

    /**
     * Sucursal donde se realizó la compra.
     */
    sucursal: Sucursal;

    /**
     * Crea una nueva instancia de la clase Compra.
     * 
     * @param compraId - Identificador único de la compra.
     */
    constructor(compraId: Number) {
        this.compraId = compraId;
    }

    /** @returns El identificador numérico de la compra. */
    getCompraId(): Number {
        return this.compraId;
    }

    /** @returns El UUID de la compra. */
    getCompraUuid(): String {
        return this.compraUuid;
    }

    /** @returns La fecha en que se realizó la compra. */
    getFecha(): Date {
        return this.fecha;
    }

    /** @returns La hora en que se realizó la compra. */
    getHora(): Date {
        return this.hora;
    }

    /** @returns El monto total de la compra. */
    getTotal(): Number {
        return this.total;
    }

    /** @returns La sucursal donde se realizó la compra. */
    getSucursal(): Sucursal {
        return this.sucursal;
    }

    /**
     * Establece el identificador de la compra.
     * @param compraId - Identificador numérico.
     */
    setCompraId(compraId: Number): void {
        this.compraId = compraId;
    }

    /**
     * Establece el UUID de la compra.
     * @param compraUuid - Identificador único universal.
     */
    setCompraUuid(compraUuid: String): void {
        this.compraUuid = compraUuid;
    }

    /**
     * Establece la fecha de la compra.
     * @param fecha - Fecha en formato Date.
     */
    setFecha(fecha: Date): void {
        this.fecha = fecha;
    }

    /**
     * Establece la hora de la compra.
     * @param hora - Hora en formato Date.
     */
    setHora(hora: Date): void {
        this.hora = hora;
    }

    /**
     * Establece el monto total de la compra.
     * @param total - Valor numérico total.
     */
    setTotal(total: Number): void {
        this.total = total;
    }

    /**
     * Asocia la compra con una sucursal.
     * @param sucursal - Objeto de tipo Sucursal.
     */
    setSucursal(sucursal: Sucursal): void {
        this.sucursal = sucursal;
    }
}
