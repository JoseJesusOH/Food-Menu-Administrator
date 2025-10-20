/**
 * @file producto.entity.ts
 * @description Define la entidad `Producto`, que representa un artículo o producto disponible para venta o inventario.
 */

/**
 * Representa un producto dentro del sistema.
 * 
 * Esta clase contiene los datos básicos del producto, incluyendo 
 * su identificador, código único y nombre descriptivo.
 */
export class Producto {
    /**
     * Identificador numérico del producto.
     */
    productoId: Number;

    /**
     * Identificador único universal (UUID) del producto.
     */
    productoUuid: String;

    /**
     * Nombre o descripción del producto.
     */
    nombre: String;

    /**
     * Crea una nueva instancia de la clase Producto.
     * 
     * @param productoId - Identificador único del producto.
     */
    constructor(productoId: Number) {
        this.productoId = productoId;
    }

    /** @returns El identificador numérico del producto. */
    getProductoId(): Number {
        return this.productoId;
    }

    /** @returns El UUID del producto. */
    getProductoUuid(): String {
        return this.productoUuid;
    }

    /** @returns El nombre del producto. */
    getNombre(): String {
        return this.nombre;
    }

    /**
     * Establece el identificador numérico del producto.
     * @param productoId - Identificador numérico.
     */
    setProductoId(productoId: Number): void {
        this.productoId = productoId;
    }

    /**
     * Establece el UUID del producto.
     * @param productoUuid - Identificador único universal.
     */
    setProductoUuid(productoUuid: String): void {
        this.productoUuid = productoUuid;
    }

    /**
     * Establece el nombre del producto.
     * @param nombre - Nombre o descripción del producto.
     */
    setNombre(nombre: String): void {
        this.nombre = nombre;
    }
}
