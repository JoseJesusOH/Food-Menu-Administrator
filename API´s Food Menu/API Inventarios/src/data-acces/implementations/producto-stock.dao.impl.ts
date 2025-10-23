import { ProductoStockIDAO } from "@data.dao/producto-stock.dao";
import { ProductoStock } from "@entity/producto-stock.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class ProductoStockDAO implements ProductoStockIDAO {
    productoStockRepositorio = Conexion.getRepository(ProductoStock);

    async getProductosStock(): Promise<ProductoStock[]> {
        try {
            const productosStock = await this.productoStockRepositorio.find({ relations: ["producto", "sucursal"] });

            if (productosStock.length > 0) {
                LoggerAPI.info("Se obtuvieron todos los productos con su stock", { total: productosStock.length });
                return productosStock;
            } else {
                LoggerAPI.info("No se encontraron productos con stock", { total: productosStock.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos con stock", error);
            throw error;
        }
    }
    getProductoStockById(productoStockId: Number): Promise<ProductoStock> {
        throw new Error("Method not implemented.");
    }
    getProductoStockByUuid(productoStockUuid: String): Promise<ProductoStock> {
        throw new Error("Method not implemented.");
    }
    eliminarProductoStockById(productoStockId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarProductoStock(productoStock: ProductoStock): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarProductoStock(productoStock: ProductoStock): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}