import { Compra } from "@entity/compra.entity";
import { Producto } from "@entity/producto.entity";

export class ProductoCompra {
    productoCompraId: Number;
    productoCompraUuid: String;
    cantidad: Number;
    total: Number;
    precioBase: Number;
    compra: Compra
    producto: Producto;

    constructor(productoCompraId: Number) {
        this.productoCompraId = productoCompraId;
    }

    getProductoCompraId(): Number {
        return this.productoCompraId;
    }

    getProductoCompraUuid(): String {
        return this.productoCompraUuid;
    }

    getCantidad(): Number {
        return this.cantidad;
    }

    getTotal(): Number {
        return this.total;
    }

    getPrecioBase(): Number {
        return this.precioBase;
    }

    getCompra(): Compra {
        return this.compra;
    }

    getProducto(): Producto {
        return this.producto;
    }

    setProductoCompraId(productoCompraId: Number): void {
        this.productoCompraId = productoCompraId;
    }

    setProductoCompraUuid(productoCompraUuid: String): void {
        this.productoCompraUuid = productoCompraUuid;
    }

    setCantidad(cantidad: Number): void {
        this.cantidad = cantidad;
    }

    setTotal(total: Number): void {
        this.total = total;
    }

    setPrecioBase(precioBase: Number): void {
        this.precioBase = precioBase;
    }

    setCompra(compra: Compra): void {
        this.compra = compra;
    }

    setProducto(producto: Producto): void {
        this.producto = producto;
    }
}
