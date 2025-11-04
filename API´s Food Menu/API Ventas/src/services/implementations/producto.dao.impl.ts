import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";
import { Producto } from "@entity/producto.entity";
import { ProductoIService } from "@service.dao/producto.dao";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

/**
 * Clase que implementa la interfaz {@link ProductoIService}.
 * 
 * Proporciona los servicios de negocio relacionados con la entidad **Producto**,
 * incluyendo operaciones CRUD (crear, leer, actualizar, eliminar).
 * 
 * Cada método se encarga de manejar la lógica intermedia entre la capa DAO y la capa de presentación,
 * transformando los datos entre entidades y DTOs, y registrando las acciones mediante `LoggerAPI`.
 */
class ProductoService implements ProductoIService {

    /**
     * Instancia del DAO que maneja las operaciones de acceso a datos
     * para la entidad {@link Producto}.
     */
    productoDAO: ProductoIDAO = new ProductoDAO();

    /**
     * Obtiene la lista completa de productos registrados en el sistema.
     * 
     * Convierte las entidades de base de datos a objetos {@link ProductoDTO}.
     * 
     * @returns Una promesa que resuelve con un arreglo de objetos {@link ProductoDTO}.
     */
    async getProductos(): Promise<ProductoDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener los productos.");
        try {
            const productos = await this.productoDAO.getProductos();

            if (productos && productos.length > 0) {
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

    /**
     * Obtiene un producto específico a partir de su UUID.
     * 
     * @param productoUuid UUID del producto a buscar.
     * @returns Una promesa que resuelve con un objeto {@link ProductoDTO},
     * o `null` si no se encuentra.
     */
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

    /**
     * Registra un nuevo producto en el sistema.
     * 
     * Convierte el {@link ProductoDTO} a entidad {@link Producto}
     * antes de enviarlo al DAO para su inserción.
     * 
     * @param productoDTO Objeto con los datos del producto a registrar.
     * @returns Una promesa que resuelve con `true` si la inserción fue exitosa.
     */
    async agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para agregar un nuevo producto al sistema.");
        try {
            const producto = plainToInstance(Producto, productoDTO);
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

    /**
     * Elimina un producto del sistema utilizando su UUID.
     * 
     * Antes de eliminarlo, el método obtiene el ID interno del producto
     * desde la base de datos, ya que la eliminación se realiza mediante dicho identificador.
     * 
     * @param productoUuid UUID del producto a eliminar.
     * @returns Una promesa que resuelve con `true` si el producto fue eliminado correctamente.
     */
    async eliminarProducto(productoUuid: String): Promise<Boolean> {
        LoggerAPI.info(`Se inicia servicio para eliminar el producto con UUID: ${productoUuid}`);
        try {
            const producto = await this.productoDAO.getProductoByUuid(productoUuid);

            if (!producto || !producto.productoId) {
                LoggerAPI.warn(`No se encontró un producto con UUID: ${productoUuid}`);
                return false;
            }

            const productoEliminado = await this.productoDAO.eliminarProductoById(producto.productoId);

            if (productoEliminado) {
                LoggerAPI.info(`Producto con ID ${producto.productoId} (UUID: ${productoUuid}) eliminado correctamente.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo eliminar el producto con ID ${producto.productoId} (UUID: ${productoUuid}).`);
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Error al eliminar el producto con UUID ${productoUuid}: ${error}`);
            throw error;
        }
    }

    /**
     * Actualiza los datos de un producto existente.
     * 
     * El método obtiene primero el ID interno del producto mediante su UUID,
     * actualiza el DTO con ese identificador y luego lo convierte en entidad
     * para ejecutar la actualización en la base de datos.
     * 
     * @param productoDTO Objeto con la información actualizada del producto.
     * @returns Una promesa que resuelve con `true` si la actualización fue exitosa.
     */
    async actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info(`Se inicia servicio para actualizar el producto con UUID: ${productoDTO.productoUuid}`);
        try {
            const productoExistente = await this.productoDAO.getProductoByUuid(productoDTO.productoUuid);
            
            if (!productoExistente || !productoExistente.productoId) {
                LoggerAPI.warn(`No se encontró el producto con UUID: ${productoDTO.productoUuid} para actualizar.`);
                return false;
            }

            productoDTO.productoUuid = productoExistente.productoUuid;
            const producto = plainToInstance(Producto, productoDTO);
            const productoActualizado = await this.productoDAO.actualizarProducto(producto);

            if (productoActualizado) {
                LoggerAPI.info(`Producto con ID ${producto.productoId} (UUID: ${productoDTO.productoUuid}) actualizado correctamente.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo actualizar el producto con ID ${producto.productoId} (UUID: ${productoDTO.productoUuid}).`);
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Error al actualizar el producto con UUID ${productoDTO.productoUuid}: ${error}`);
            throw error;
        }
    }
}

export { ProductoService };
