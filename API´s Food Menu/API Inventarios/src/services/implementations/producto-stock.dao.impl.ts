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


 async actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para actualizar un producto del sistema.");
        try {
            // Convertir el DTO en entidad de Producto
            const producto = plainToInstance(ProductoStock, productoDTO);

            // Llamar al DAO para realizar la actualización
            const productoActualizado = await this.productoStockDAO.actualizarProductoStock(producto);

            if (productoActualizado) {
                LoggerAPI.info(`El producto fue actualizado correctamente.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo actualizar el producto .`);
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al actualizar el producto: ${error}`);
            throw error;
        }
    }

  async eliminarProducto(productoUuid: String): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para eliminar un producto del sistema.");
        try {
            // Buscar el producto por su UUID antes de intentar eliminarlo
            const producto = await this.productoStockDAO.getProductoStockByUuid(productoUuid);

            if (!producto) {
                LoggerAPI.warn(`No se encontró ningún producto con el UUID ${productoUuid} en el sistema.`);
                return false;
            }

            // Intentar eliminar el producto por su ID interno
            const productoEliminado = await this.productoStockDAO.eliminarProductoStockById(producto.productoStockId);

            if (productoEliminado) {
                LoggerAPI.info(`El producto con UUID ${productoUuid} fue eliminado correctamente del sistema.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo eliminar el producto con UUID ${productoUuid}.`);
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al eliminar el producto: ${error}`);
            throw error;
        }
    }
    getProductoByUuid(productoUuid: string): Promise<ProductoDTO> {
        throw new Error("Method not implemented.");
    }

}