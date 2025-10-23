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
    getProductoCompraById(productoCompraId: Number): Promise<ProductoCompra> {
        throw new Error("Method not implemented.");
    }
    getProductoCompraByUuid(productoCompraUuid: String): Promise<ProductoCompra> {
        throw new Error("Method not implemented.");
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