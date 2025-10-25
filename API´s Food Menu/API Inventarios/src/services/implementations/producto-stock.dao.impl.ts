import { ProductoStockIDAO } from "@data.dao/producto-stock.dao";
import { ProductoStockDAO } from "@data.impl/producto-stock.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";
import { ProductoIServicio } from "@service.dao/producto.dao";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";
class ProductoStockService implements ProductoIServicio {

    productoStockDAO: ProductoStockIDAO = new ProductoStockDAO()

    async getProductos(): Promise<ProductoDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener los productos con su información de stock.");
        try {
            const productos = await this.productoStockDAO.getProductosStock();
            if (productos.length > 0) {
                const productosDTO = plainToInstance(ProductoDTO, productos);
                LoggerAPI.info(`Se han obtenido ${productosDTO.length} productos del sistema.`);
                return productosDTO;
            } else {
                LoggerAPI.warn("No se han encontrado productos registrados en el sistema.");
                return [];
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener los productos con stock: ${error}`);
            throw error;
        }
    }

    agregarProducto(producto: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    actualizarProducto(producto: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
    eliminarProducto(productoUuid: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
    getProductoByUuid(productoUuid: string): Promise<ProductoDTO> {
        throw new Error("Method not implemented.");
    }

}