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

    eliminarProductoCompraById(productoCompraId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}