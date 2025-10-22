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
    async getProductoById(productoId: Number): Promise<Producto> {
        try {
            const producto = await this.productoRepositorio.findOne({ where: { productoId } });

            if (producto) {
                LoggerAPI.info("Producto encontrado por ID", { id: productoId });
                return producto;
            } else {
                LoggerAPI.info("No se encontró el producto con el ID especificado", { id: productoId });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto por ID", error);
            throw error;
        }
    }

    async getProductoByUuid(productoUuid: String): Promise<Producto> {
        try {
            const producto = await this.productoRepositorio.findOne({ where: { productoUuid } });

            if (producto) {
                LoggerAPI.info("Producto encontrado por UUID", { uuid: productoUuid });
                return producto;
            } else {
                LoggerAPI.info("No se encontró el producto con el UUID especificado", { uuid: productoUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto por UUID", error);
            throw error;
        }
    }

async eliminarProductoById(productoId: Number): Promise<Boolean> {
    try {
        const resultado = await this.productoRepositorio.delete({ productoId });

        if (resultado.affected && resultado.affected > 0) {
            LoggerAPI.info("Producto eliminado correctamente", { id: productoId });
            return true;
        } else {
            LoggerAPI.info("No se encontró el producto para eliminar", { id: productoId });
            return false;
        }
    } catch (error) {
        LoggerAPI.error("Error al eliminar el producto por ID", error);
        throw error;
    }
}

    actualizarProducto(producto: Producto): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarProducto(producto: Producto): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}