import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";
import { Producto } from "@entity/producto.entity";
import { ProductoIServicio } from "@service.dao/producto.dao";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

/**
 * Clase que implementa la interfaz {@link ProductoIServicio}.
 * 
 * Gestiona las operaciones CRUD de productos dentro del sistema,
 * sirviendo como capa de servicio entre los controladores y el DAO.
 * 
 * Utiliza {@link LoggerAPI} para registrar la actividad de cada operación.
 */
class ProductoService implements ProductoIServicio {

    /** Instancia del DAO que maneja el acceso a los datos de productos. */
    productoDAO: ProductoIDAO = new ProductoDAO();

    /**
     * Obtiene todos los productos registrados en el sistema.
     * 
     * @returns {Promise<ProductoDTO[]>} Promesa que devuelve un arreglo de objetos {@link ProductoDTO}.
     * Devuelve un arreglo vacío si no hay productos registrados.
     * @throws {Error} Lanza una excepción si ocurre un error al consultar la base de datos.
     */
    async getProductos(): Promise<ProductoDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener los productos registrados en el sistema.");
        try {
            const productos = await this.productoDAO.getProductos();

            if (productos.length > 0) {
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

    /**
     * Registra un nuevo producto en el sistema.
     * 
     * @param {ProductoDTO} productoDTO Objeto con los datos del producto a registrar.
     * @returns {Promise<Boolean>} Promesa que indica si el registro fue exitoso (`true`) o fallido (`false`).
     * @throws {Error} Lanza una excepción si ocurre un error durante la inserción en la base de datos.
     */
    async agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para registrar un nuevo producto en el sistema.");
        try {
            const producto = plainToInstance(Producto, productoDTO);
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

    /**
     * Actualiza la información de un producto existente.
     * 
     * @param {ProductoDTO} productoDTO Objeto con los datos actualizados del producto.
     * @returns {Promise<Boolean>} Promesa que indica si la actualización fue exitosa (`true`) o fallida (`false`).
     * @throws {Error} Lanza una excepción si ocurre un error durante la actualización.
     */
    async actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para actualizar un producto en el sistema.");
        try {
            const producto = plainToInstance(Producto, productoDTO);
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

    /**
     * Elimina un producto del sistema a partir de su UUID.
     * 
     * @param {string} productoUuid Identificador único del producto a eliminar.
     * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o fallida (`false`).
     * @throws {Error} Lanza una excepción si ocurre un error durante la eliminación.
     */
    async eliminarProducto(productoUuid: string): Promise<Boolean> {
        LoggerAPI.info(`Se inicia servicio para eliminar el producto con UUID: ${productoUuid}`);
        try {
            const producto = await this.productoDAO.getProductoByUuid(productoUuid);

            if (!producto) {
                LoggerAPI.warn(`No se encontró ningún producto con UUID: ${productoUuid}`);
                return false;
            }

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

    /**
     * Obtiene un producto específico por su UUID.
     * 
     * @param {string} productoUuid Identificador único del producto a consultar.
     * @returns {Promise<ProductoDTO>} Promesa que devuelve un objeto {@link ProductoDTO} si existe,
     * o `null` si no se encuentra.
     * @throws {Error} Lanza una excepción si ocurre un error durante la consulta.
     */
    async getProductoByUuid(productoUuid: string): Promise<ProductoDTO> {
        LoggerAPI.info(`Se inicia servicio para obtener el producto con UUID: ${productoUuid}`);
        try {
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

export { ProductoService };
