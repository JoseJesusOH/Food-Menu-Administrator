import { Producto } from "../../entities/producto.entity";
import { ProductoIDAO } from "../interfaces/producto.dao";
export class ProductoDAO implements ProductoIDAO{
    getProductos(): Producto[] {
        throw new Error("Method not implemented.");
    }
    getProductoById(productoId: Number): Producto {
        throw new Error("Method not implemented.");
    }
    getProductoByUuid(productoUuid: String): Producto {
        throw new Error("Method not implemented.");
    }
    agregarProducto(producto: Producto): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarProducto(producto: Producto): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProductoById(productoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
   
}