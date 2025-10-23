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
    async getProductoStockById(productoStockId: Number): Promise<ProductoStock> {
        try {
            const productoStock = await this.productoStockRepositorio.findOne({
                where: { productoStockId },
                relations: ["producto", "sucursal"]
            });

            if (productoStock) {
                LoggerAPI.info("Producto en stock encontrado por ID", { id: productoStockId });
                return productoStock;
            } else {
                LoggerAPI.info("No se encontró el producto en stock con el ID especificado", { id: productoStockId });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto en stock por ID", error);
            throw error;
        }
    }
    async getProductoStockByUuid(productoStockUuid: String): Promise<ProductoStock> {
        try {
            const productoStock = await this.productoStockRepositorio.findOne({
                where: { productoStockUuid },
                relations: ["producto", "sucursal"]
            });

            if (productoStock) {
                LoggerAPI.info("Producto en stock encontrado por UUID", { uuid: productoStockUuid });
                return productoStock;
            } else {
                LoggerAPI.info("No se encontró el producto en stock con el UUID especificado", { uuid: productoStockUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto en stock por UUID", error);
            throw error;
        }
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