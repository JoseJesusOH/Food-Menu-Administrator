import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";
import { Producto } from "@entity/producto.entity";
import { ProductoIServicio } from "@service.dao/producto.dao";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class ProductoService implements ProductoIServicio {
    productoDAO: ProductoIDAO = new ProductoDAO();
    async getProductos(): Promise<ProductoDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener los productos registrados en el sistema.");
        try {
            // Se obtiene la lista de productos desde el DAO
            const productos = await this.productoDAO.getProductos();

            if (productos.length > 0) {
                // Se transforman las entidades en objetos DTO
                const productosDTO = plainToInstance(ProductoDTO, productos);
                LoggerAPI.info(`Se han obtenido ${productosDTO.length} productos del sistema.`);
                return productosDTO;
            } else {
                LoggerAPI.warn("No se encontraron productos registrados en el sistema.");
                return [];
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener los productos: ${error}`);
            throw error;
        }
    }
    async agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para registrar un nuevo producto en el sistema.");
        try {
            // Conversión del DTO a entidad Producto
            const producto = plainToInstance(Producto, productoDTO);

            // Se invoca al DAO para registrar el nuevo producto
            const productoCreado = await this.productoDAO.agregarProducto(producto);

            if (productoCreado) {
                LoggerAPI.info(`El producto "${producto.nombre}" fue registrado correctamente en el sistema.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo registrar el producto "${producto.nombre}" en el sistema.`);
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al agregar un nuevo producto: ${error}`);
            throw error;
        }
    }

    async actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para actualizar un producto en el sistema.");
        try {
            // Convertir el DTO en entidad de Producto
            const producto = plainToInstance(Producto, productoDTO);

            // Llamar al DAO para realizar la actualización
            const productoActualizado = await this.productoDAO.actualizarProducto(producto);

            if (productoActualizado) {
                LoggerAPI.info(`El producto "${producto.nombre}" fue actualizado correctamente.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo actualizar el producto "${producto.nombre}".`);
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al actualizar el producto: ${error}`);
            throw error;
        }
    }

    async eliminarProducto(productoUuid: string): Promise<Boolean> {
        LoggerAPI.info(`Se inicia servicio para eliminar el producto con UUID: ${productoUuid}`);
        try {
            // Verificar si el producto existe
            const producto = await this.productoDAO.getProductoByUuid(productoUuid);

            if (!producto) {
                LoggerAPI.warn(`No se encontró ningún producto con UUID: ${productoUuid}`);
                return false;
            }

            // Llamar al DAO para eliminar el producto
            const productoEliminado = await this.productoDAO.eliminarProductoById(producto.productoId);

            if (productoEliminado) {
                LoggerAPI.info(`El producto con UUID ${productoUuid} fue eliminado correctamente.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo eliminar el producto con UUID ${productoUuid}.`);
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al eliminar el producto con UUID ${productoUuid}: ${error}`);
            throw error;
        }
    }

    async getProductoByUuid(productoUuid: string): Promise<ProductoDTO> {
        LoggerAPI.info(`Se inicia servicio para obtener el producto con UUID: ${productoUuid}`);
        try {
            // Consultar el producto en la base de datos
            const producto = await this.productoDAO.getProductoByUuid(productoUuid);

            if (producto) {
                const productoDTO = plainToInstance(ProductoDTO, producto);
                LoggerAPI.info(`Producto con UUID ${productoUuid} obtenido correctamente.`);
                return productoDTO;
            } else {
                LoggerAPI.warn(`No se encontró ningún producto con UUID: ${productoUuid}`);
                return null;
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener el producto con UUID ${productoUuid}: ${error}`);
            throw error;
        }
    }

}