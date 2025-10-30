import { ProductoIDAO } from "@data.dao/producto.dao";
import { Producto } from "@entity/producto.entity";

class ProductoDAO implements ProductoIDAO{
    getProductos(): Producto[] {
        throw new Error("Method not implemented.");
    }
    getProductoByID(productoID: number): Producto {
        throw new Error("Method not implemented.");
    }
    getProductoByUUID(productoUUID: string): Producto {
        throw new Error("Method not implemented.");
    }
    agregarProducto(producto: Producto): boolean {
        throw new Error("Method not implemented.");
    }
    actualizarProducto(producto: Producto): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProductoByID(productoID: number): boolean {
        throw new Error("Method not implemented.");
    }
    
}