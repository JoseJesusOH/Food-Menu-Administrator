import { ProductoStockIDAO } from "@data.dao/producto-stock.dao";
import { ProductoStockDAO } from "@data.impl/producto-stock.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";
import { ProductoStock } from "@entity/producto-stock.entity";
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

    async agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para registrar un nuevo producto en el sistema.");
        try {
            // Convertimos el DTO a una entidad de Producto
            const productoStock = plainToInstance(ProductoStock, productoDTO);

            // Llamamos al DAO para realizar el registro
            const productoCreado = await this.productoStockDAO.agregarProductoStock(productoStock);

            if (productoCreado) {
                LoggerAPI.info("El producto fue registrado correctamente en el sistema.");
                return true;
            } else {
                LoggerAPI.warn("No se pudo registrar el producto en el sistema.");
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al agregar un nuevo producto: ${error}`);
            throw error;
        }
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