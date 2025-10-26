import { ProductoStock } from "@entity/producto-stock.entity";
import { ProductoStockIServicio } from "@service.dao/producto-stock.dao";
import { ProductoStockService } from "@service.impl/producto-stock.dao.impl";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class ProductoStockControl{
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
}