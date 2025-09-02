import { Producto } from "../../modelos/producto";
import { ProductoIDAO } from "../daoInterfaces/productoIDAO";
export class ProductoDAO implements ProductoIDAO{
    getProductos(): Producto[] {
        throw new Error("Method not implemented.");
    }
    getProductoByID(productoID: Number): Producto {
        throw new Error("Method not implemented.");
    }
    getProductoByUUID(productoUUID: String): Producto {
        throw new Error("Method not implemented.");
    }
    agregarProducto(producto: Producto): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarProducto(producto: Producto): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProductoByID(productoID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
}