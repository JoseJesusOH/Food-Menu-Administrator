import { ProductoIDAO } from "@data.dao/producto.dao";
import { Producto } from "@entity/producto.entity";

class ProductoDAO implements ProductoIDAO{
    getProductos(): Promise<Producto[]> {
        throw new Error("Method not implemented.");
    }
    getProductoById(productoId: Number): Promise<Producto> {
        throw new Error("Method not implemented.");
    }
    getProductoByUuid(productoUuid: String): Promise<Producto> {
        throw new Error("Method not implemented.");
    }
    eliminarProductoById(productoId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarProducto(producto: Producto): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarProducto(producto: Producto): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}