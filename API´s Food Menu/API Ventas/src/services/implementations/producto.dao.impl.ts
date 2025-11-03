import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";
import { Producto } from "@entity/producto.entity";
import { ProductoIService } from "@service.dao/producto.dao";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class ProductoService implements ProductoIService {
    productoDAO: ProductoIDAO = new ProductoDAO();

    async getProductos(): Promise<ProductoDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener los productos.");
        try {
            const productos = await this.productoDAO.getProductos();

            if (productos && productos.length > 0) {
                // Transformar entidades a DTO
                const productosDTO = plainToInstance(ProductoDTO, productos);
                LoggerAPI.info(`Se obtuvieron ${productosDTO.length} productos del sistema.`);
                return productosDTO;
            } else {
                LoggerAPI.warn("No se encontraron productos en el sistema.");
                return [];
            }
        } catch (error) {
            LoggerAPI.warn(`Error al obtener los productos en el servicio: ${error}`);
            throw error;
        }
    }
async getProductoByUuid(productoUuid: String): Promise<ProductoDTO> {
        LoggerAPI.info(`Se inicia servicio para obtener el producto con UUID: ${productoUuid}`);
        try {
            const producto = await this.productoDAO.getProductoByUuid(productoUuid);
            
            if (producto) {
                const productoDTO = plainToInstance(ProductoDTO, producto);
                LoggerAPI.info(`Producto encontrado: ${productoDTO.nombre ?? "sin nombre"}`);
                return productoDTO;
            } else {
                LoggerAPI.warn(`No se encontró un producto con UUID: ${productoUuid}`);
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Error al obtener el producto con UUID ${productoUuid}: ${error}`);
            throw error;
        }
    }
  async agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para agregar un nuevo producto al sistema.");
        try {
            let producto = plainToInstance(Producto, productoDTO);
            const productoCreado = await this.productoDAO.agregarProducto(producto);

            if (productoCreado) {
                LoggerAPI.info(`Producto agregado correctamente: ${productoDTO.nombre ?? "sin nombre"}`);
                return true;
            } else {
                LoggerAPI.warn("No se pudo crear el producto en el sistema.");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Error al agregar un nuevo producto en el servicio: ${error}`);
            throw error;
        }
    }
    eliminarProducto(productoUuid: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}