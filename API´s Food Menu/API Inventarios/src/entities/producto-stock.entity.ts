import { Producto } from "@entity/producto.entity";

export class ProductoStock {
     productoStockId: Number;
     productoStockUuid: String;
     cantidadMinima: Number;
     cantidadMaxima: Number;
     stockActual: Number;
     producto: Producto;

    constructor(productoStockId: Number) {
        this.productoStockId = productoStockId;
    }

    getProductoStockId(): Number {
        return this.productoStockId;
    }

    getProductoStockUuid(): String {
        return this.productoStockUuid;
    }

    getCantidadMinima(): Number {
        return this.cantidadMinima;
    }

    getCantidadMaxima(): Number {
        return this.cantidadMaxima;
    }

    getStockActual(): Number {
        return this.stockActual;
    }

    getProducto(): Producto {
        return this.producto;
    }

    setProductoStockId(productoStockId: Number): void {
        this.productoStockId = productoStockId;
    }

    setProductoStockUuid(productoStockUuid: String): void {
        this.productoStockUuid = productoStockUuid;
    }

    setCantidadMinima(cantidadMinima: Number): void {
        this.cantidadMinima = cantidadMinima;
    }

    setCantidadMaxima(cantidadMaxima: Number): void {
        this.cantidadMaxima = cantidadMaxima;
    }

    setStockActual(stockActual: Number): void {
        this.stockActual = stockActual;
    }

    setProducto(producto: Producto): void {
        this.producto = producto;
    }
}