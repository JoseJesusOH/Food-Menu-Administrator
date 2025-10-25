import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";
import { ProductoIServicio } from "@service.dao/producto.dao";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class ProductoService implements ProductoIServicio{
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