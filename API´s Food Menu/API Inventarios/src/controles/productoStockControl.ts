import { ProductoStock } from "@entity/producto-stock.entity";
import { ProductoStockIServicio } from "@service.dao/producto-stock.dao";
import { ProductoStockService } from "@service.impl/producto-stock.dao.impl";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class ProductoStockControl {
    productoStockServicio: ProductoStockIServicio = new ProductoStockService();
    agregarProductoStock = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso para registrar un nuevo producto con stock en el sistema.");
        try {
            const producto = plainToInstance(ProductoStock, req.body);
            const result = await this.productoStockServicio.agregarProductoStock(producto);

            if (result) {
                LoggerAPI.info("El producto fue registrado correctamente.");
                return res.status(201).json({ message: "Producto registrado correctamente", producto: result });
            } else {
                LoggerAPI.warn("No se pudo registrar el producto.");
                return res.status(400).json({ message: "No se pudo registrar el producto" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al registrar el producto: ${error}`);
            return res.status(500).json({ message: "Error al registrar el producto" });
        }
    };
    eliminarProductoStock = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso para eliminar un producto con stock en control.");
        try {
            const productoStockUuid = req.params.productoStockUuid;
            const result = await this.productoStockServicio.eliminarProductoStock(productoStockUuid);

            if (result) {
                LoggerAPI.info(`El producto con UUID ${productoStockUuid} fue eliminado correctamente.`);
                return res.status(200).json({ message: "Producto eliminado correctamente" });
            } else {
                LoggerAPI.warn(`No se pudo eliminar el producto con UUID ${productoStockUuid}.`);
                return res.status(400).json({ message: "No se pudo eliminar el producto" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al eliminar el producto con stock: ${error}`);
            return res.status(500).json({ message: "Error al eliminar el producto" });
        }
    };
      obtenerProductosStock = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso para obtener los productos con stock en control.");
        try {
            const result = await this.productoStockServicio.getProductoStocks();
            if (result && result.length > 0) {
                LoggerAPI.info("Se obtuvieron los productos con stock correctamente.");
                return res.status(200).json({ productos: result });
            } else {
                LoggerAPI.warn("No se encontraron productos con stock en el sistema.");
                return res.status(404).json({ message: "No se encontraron productos con stock" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener los productos con stock: ${error}`);
            return res.status(500).json({ message: "Error al obtener los productos con stock" });
        }
    };
}