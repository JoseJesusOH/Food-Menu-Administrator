import { ProductoCompraIDAO } from "@data.dao/producto-compra.dao";
import { ProductoCompra } from "@entity/producto-compra.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class ProductoCompraDAO implements ProductoCompraIDAO {
    productoCompraRepositorio = Conexion.getRepository(ProductoCompra)
    async getProductosCompra(): Promise<ProductoCompra[]> {
        try {
            const productosCompra = await this.productoCompraRepositorio.find({ relations: ["producto", "compra"] });

            if (productosCompra.length > 0) {
                LoggerAPI.info("Se obtuvieron todos los productos de compra", { total: productosCompra.length });
                return productosCompra;
            } else {
                LoggerAPI.info("No se encontraron productos de compra", { total: productosCompra.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos de compra", error);
            throw error;
        }
    }
    async getProductoCompraById(productoCompraId: Number): Promise<ProductoCompra> {
        try {
            const productoCompra = await this.productoCompraRepositorio.findOne({
                where: { productoCompraId },
                relations: ["producto", "compra"]
            });

            if (productoCompra) {
                LoggerAPI.info("Producto de compra encontrado por ID", { id: productoCompraId });
                return productoCompra;
            } else {
                LoggerAPI.info("No se encontró el producto de compra con el ID especificado", { id: productoCompraId });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto de compra por ID", error);
            throw error;
        }
    }
    async getProductoCompraByUuid(productoCompraUuid: String): Promise<ProductoCompra> {
        try {
            const productoCompra = await this.productoCompraRepositorio.findOne({
                where: { productoCompraUuid },
                relations: ["producto", "compra"]
            });

            if (productoCompra) {
                LoggerAPI.info("Producto de compra encontrado por UUID", { uuid: productoCompraUuid });
                return productoCompra;
            } else {
                LoggerAPI.info("No se encontró el producto de compra con el UUID especificado", { uuid: productoCompraUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto de compra por UUID", error);
            throw error;
        }
    }

    async eliminarProductoCompraById(productoCompraId: Number): Promise<Boolean> {
        try {
            const resultado = await this.productoCompraRepositorio.delete({ productoCompraId });

            if (resultado.affected && resultado.affected > 0) {
                LoggerAPI.info("Producto de compra eliminado correctamente", { id: productoCompraId });
                return true;
            } else {
                LoggerAPI.info("No se encontró el producto de compra para eliminar", { id: productoCompraId });
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar el producto de compra por ID", error);
            throw error;
        }
    }

    async actualizarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean> {
        try {
            const existe = await this.productoCompraRepositorio.findOne({ where: { productoCompraId: productoCompra.productoCompraId } });

            if (!existe) {
                LoggerAPI.info("No se encontró el producto de compra para actualizar", { id: productoCompra.productoCompraId });
                return false;
            }

            await this.productoCompraRepositorio.save(productoCompra);
            LoggerAPI.info("Producto de compra actualizado correctamente", { id: productoCompra.productoCompraId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al actualizar el producto de compra", error);
            throw error;
        }
    }
    
    async agregarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean> {
        try {
            const nuevoRegistro = await this.productoCompraRepositorio.save(productoCompra);
            LoggerAPI.info("Producto de compra agregado correctamente", { id: nuevoRegistro.productoCompraId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al agregar el producto de compra", error);
            throw error;
        }
    }

}