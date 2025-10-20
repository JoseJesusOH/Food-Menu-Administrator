/**
 * @file producto-compra.entity.ts
 * @description Define la entidad `ProductoCompra`, que representa la relación entre un producto y una compra.
 */

import { Compra } from "@entity/compra.entity";
import { Producto } from "@entity/producto.entity";

/**
 * Representa el detalle de un producto dentro de una compra.
 * 
 * Esta clase vincula un producto con una compra específica, 
 * almacenando la cantidad comprada, el precio base y el total.
 */
export class ProductoCompra {
    /**
     * Identificador numérico del registro de producto-compra.
     */
    productoCompraId: Number;

    /**
     * Identificador único universal (UUID) del registro de producto-compra.
     */
    productoCompraUuid: String;

    /**
     * Cantidad de unidades del producto compradas.
     */
    cantidad: Number;

    /**
     * Monto total correspondiente al producto en la compra.
     */
    total: Number;

    /**
     * Precio base (unitario) del producto al momento de la compra.
     */
    precioBase: Number;

    /**
     * Compra a la que pertenece este registro.
     */
    compra: Compra;

    /**
     * Producto asociado a esta compra.
     */
    producto: Producto;

    /**
     * Crea una nueva instancia de la clase ProductoCompra.
     * 
     * @param productoCompraId - Identificador único del registro producto-compra.
     */
    constructor(productoCompraId: Number) {
        this.productoCompraId = productoCompraId;
    }

    /** @returns El identificador numérico del registro producto-compra. */
    getProductoCompraId(): Number {
        return this.productoCompraId;
    }

    /** @returns El UUID del registro producto-compra. */
    getProductoCompraUuid(): String {
        return this.productoCompraUuid;
    }

    /** @returns La cantidad de unidades compradas del producto. */
    getCantidad(): Number {
        return this.cantidad;
    }

    /** @returns El monto total del producto en la compra. */
    getTotal(): Number {
        return this.total;
    }

    /** @returns El precio base (unitario) del producto. */
    getPrecioBase(): Number {
        return this.precioBase;
    }

    /** @returns La compra asociada a este registro. */
    getCompra(): Compra {
        return this.compra;
    }

    /** @returns El producto vinculado a esta compra. */
    getProducto(): Producto {
        return this.producto;
    }

    /**
     * Establece el identificador numérico del registro producto-compra.
     * @param productoCompraId - Identificador numérico.
     */
    setProductoCompraId(productoCompraId: Number): void {
        this.productoCompraId = productoCompraId;
    }

    /**
     * Establece el UUID del registro producto-compra.
     * @param productoCompraUuid - Identificador único universal.
     */
    setProductoCompraUuid(productoCompraUuid: String): void {
        this.productoCompraUuid = productoCompraUuid;
    }

    /**
     * Establece la cantidad de unidades compradas.
     * @param cantidad - Número de unidades.
     */
    setCantidad(cantidad: Number): void {
        this.cantidad = cantidad;
    }

    /**
     * Establece el monto total del producto en la compra.
     * @param total - Valor numérico total.
     */
    setTotal(total: Number): void {
        this.total = total;
    }

    /**
     * Establece el precio base (unitario) del producto.
     * @param precioBase - Valor numérico del precio unitario.
     */
    setPrecioBase(precioBase: Number): void {
        this.precioBase = precioBase;
    }

    /**
     * Asocia el registro con una compra.
     * @param compra - Objeto de tipo Compra.
     */
    setCompra(compra: Compra): void {
        this.compra = compra;
    }

    /**
     * Asocia el registro con un producto.
     * @param producto - Objeto de tipo Producto.
     */
    setProducto(producto: Producto): void {
        this.producto = producto;
    }
}
