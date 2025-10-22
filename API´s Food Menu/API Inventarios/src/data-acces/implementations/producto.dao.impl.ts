import { ProductoIDAO } from "@data.dao/producto.dao";
import { Producto } from "@entity/producto.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class ProductoDAO implements ProductoIDAO {
    productoRepositorio = Conexion.getRepository(Producto);
    async getProductos(): Promise<Producto[]> {
        try {
            const productos = await this.productoRepositorio.find();
            if (productos.length > 0) {
                LoggerAPI.info("Se obtuvieron todos los productos", { total: productos.length });
                return productos;
            } else {
                LoggerAPI.info("No se obtuvieron productos", { total: productos.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos", error);
            throw error;
        }
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