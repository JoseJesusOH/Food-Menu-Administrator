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