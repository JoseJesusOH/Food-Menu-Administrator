/**
 * @file producto-stock.entity.ts
 * @description Define la entidad `ProductoStock`, que representa el control de inventario de un producto.
 */

import { Producto } from "@entity/producto.entity";

/**
 * Representa la información de stock o inventario asociada a un producto.
 * 
 * Esta clase define los valores mínimos, máximos y actuales de existencias 
 * para un producto en particular, permitiendo gestionar su disponibilidad.
 */
export class ProductoStock {
    /**
     * Identificador numérico del registro de stock del producto.
     */
    productoStockId: Number;

    /**
     * Identificador único universal (UUID) del registro de stock.
     */
    productoStockUuid: String;

    /**
     * Cantidad mínima permitida antes de requerir reposición.
     */
    cantidadMinima: Number;

    /**
     * Cantidad máxima que puede almacenarse del producto.
     */
    cantidadMaxima: Number;

    /**
     * Cantidad actual disponible en el inventario.
     */
    stockActual: Number;

    /**
     * Producto asociado al registro de stock.
     */
    producto: Producto;

    /**
     * Crea una nueva instancia de la clase ProductoStock.
     * 
     * @param productoStockId - Identificador único del registro de stock.
     */
    constructor(productoStockId: Number) {
        this.productoStockId = productoStockId;
    }

    /** @returns El identificador numérico del registro de stock. */
    getProductoStockId(): Number {
        return this.productoStockId;
    }

    /** @returns El UUID del registro de stock. */
    getProductoStockUuid(): String {
        return this.productoStockUuid;
    }

    /** @returns La cantidad mínima configurada para el producto. */
    getCantidadMinima(): Number {
        return this.cantidadMinima;
    }

    /** @returns La cantidad máxima permitida en inventario. */
    getCantidadMaxima(): Number {
        return this.cantidadMaxima;
    }

    /** @returns La cantidad actual disponible en el inventario. */
    getStockActual(): Number {
        return this.stockActual;
    }

    /** @returns El producto asociado a este registro de stock. */
    getProducto(): Producto {
        return this.producto;
    }

    /**
     * Establece el identificador numérico del registro de stock.
     * @param productoStockId - Identificador numérico.
     */
    setProductoStockId(productoStockId: Number): void {
        this.productoStockId = productoStockId;
    }

    /**
     * Establece el UUID del registro de stock.
     * @param productoStockUuid - Identificador único universal.
     */
    setProductoStockUuid(productoStockUuid: String): void {
        this.productoStockUuid = productoStockUuid;
    }

    /**
     * Establece la cantidad mínima permitida del producto.
     * @param cantidadMinima - Valor numérico mínimo.
     */
    setCantidadMinima(cantidadMinima: Number): void {
        this.cantidadMinima = cantidadMinima;
    }

    /**
     * Establece la cantidad máxima permitida del producto.
     * @param cantidadMaxima - Valor numérico máximo.
     */
    setCantidadMaxima(cantidadMaxima: Number): void {
        this.cantidadMaxima = cantidadMaxima;
    }

    /**
     * Establece la cantidad actual disponible del producto.
     * @param stockActual - Valor numérico actual.
     */
    setStockActual(stockActual: Number): void {
        this.stockActual = stockActual;
    }

    /**
     * Asocia el registro de stock con un producto.
     * @param producto - Objeto de tipo Producto.
     */
    setProducto(producto: Producto): void {
        this.producto = producto;
    }
}
