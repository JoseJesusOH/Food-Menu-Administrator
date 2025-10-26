import { ProductoStockIDAO } from "@data.dao/producto-stock.dao";
import { ProductoStockDAO } from "@data.impl/producto-stock.dao.impl";
import { ProductoStockDTO } from "@dto/producto-stock.dto";
import { ProductoStock } from "@entity/producto-stock.entity";
import { ProductoStockIServicio } from "@service.dao/producto-stock.dao";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

/**
 * Clase que implementa la interfaz {@link ProductoStockIServicio}.
 * 
 * Gestiona las operaciones relacionadas con los productos y su stock en el sistema,
 * sirviendo como intermediario entre la capa de acceso a datos (DAO) y la capa de presentación.
 * 
 * Incluye métodos para:
 * - Obtener todos los productos registrados.
 * - Registrar un nuevo producto.
 * - Actualizar información de un producto.
 * - Eliminar un producto por su UUID.
 * - Consultar un producto específico por su UUID.
 * 
 * Cada operación se registra mediante {@link LoggerAPI} para permitir trazabilidad y depuración.
 */
class ProductoStockService implements ProductoStockIServicio {

    /** Instancia del DAO responsable del acceso a los datos de productos con stock. */
    private productoStockDAO: ProductoStockIDAO = new ProductoStockDAO();

    /**
     * Obtiene la lista completa de productos registrados con su información de stock.
     * 
     * @returns Promesa que resuelve con un arreglo de objetos {@link ProductoStockDTO}.
     * Si no existen productos, devuelve un arreglo vacío.
     */
    async getProductoStocks(): Promise<ProductoStockDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener los productos con su información de stock.");
        try {
            const productos = await this.productoStockDAO.getProductosStock();

            if (productos.length === 0) {
                LoggerAPI.warn("No se han encontrado productos registrados en el sistema.");
                return [];
            }

            const productosDTO = plainToInstance(ProductoStockDTO, productos);
            LoggerAPI.info(`Se han obtenido ${productosDTO.length} productos del sistema.`);
            return productosDTO;

        } catch (error) {
            LoggerAPI.error(`Error al obtener los productos con stock: ${error}`);
            throw error;
        }
    }

    /**
     * Registra un nuevo producto en el sistema junto con su información de stock.
     * 
     * @param productoStockDTO Objeto que contiene los datos del producto a registrar.
     * @returns Promesa que indica si la operación fue exitosa (`true`) o fallida (`false`).
     */
    async agregarProductoStock(productoStockDTO: ProductoStockDTO): Promise<boolean> {
        LoggerAPI.info("Se inicia servicio para registrar un nuevo producto en el sistema.");
        try {
            const productoEntity = plainToInstance(ProductoStock, productoStockDTO);
            const productoCreado = await this.productoStockDAO.agregarProductoStock(productoEntity);

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

    /**
     * Actualiza la información de un producto existente en el sistema.
     * 
     * @param productoStockDTO Objeto con los datos actualizados del producto.
     * @returns Promesa que indica si la actualización fue exitosa (`true`) o no (`false`).
     */
    async actualizarProductoStock(productoStockDTO: ProductoStockDTO): Promise<boolean> {
        LoggerAPI.info("Se inicia servicio para actualizar un producto del sistema.");
        try {
            const productoEntity = plainToInstance(ProductoStock, productoStockDTO);
            const productoActualizado = await this.productoStockDAO.actualizarProductoStock(productoEntity);

            if (productoActualizado) {
                LoggerAPI.info("El producto fue actualizado correctamente.");
                return true;
            } else {
                LoggerAPI.warn("No se pudo actualizar el producto.");
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al actualizar el producto: ${error}`);
            throw error;
        }
    }

    /**
     * Elimina un producto del sistema utilizando su identificador único (UUID).
     * 
     * @param productoUuid Identificador único del producto a eliminar.
     * @returns Promesa que indica si la eliminación fue exitosa (`true`) o no (`false`).
     */
    async eliminarProductoStock(productoUuid: string): Promise<boolean> {
        LoggerAPI.info("Se inicia servicio para eliminar un producto del sistema.");
        try {
            const producto = await this.productoStockDAO.getProductoStockByUuid(productoUuid);

            if (!producto) {
                LoggerAPI.warn(`No se encontró ningún producto con el UUID ${productoUuid} en el sistema.`);
                return false;
            }

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

    /**
     * Obtiene un producto específico a partir de su identificador único (UUID).
     * 
     * @param productoStockUuid Identificador único del producto a consultar.
     * @returns Promesa que resuelve con un objeto {@link ProductoStockDTO} si el producto existe,
     * o `null` si no se encontró.
     */
    async getProductoStockByUuid(productoStockUuid: string): Promise<ProductoStockDTO | null> {
        LoggerAPI.info("Se inicia servicio para obtener un producto del sistema por su UUID.");
        try {
            const producto = await this.productoStockDAO.getProductoStockByUuid(productoStockUuid);

            if (!producto) {
                LoggerAPI.warn(`No se encontró ningún ProductoStock con el UUID ${productoStockUuid}.`);
                return null;
            }

            const productoDTO = plainToInstance(ProductoStockDTO, producto);
            LoggerAPI.info(`ProductoStock con UUID ${productoStockUuid} obtenido correctamente.`);
            return productoDTO;

        } catch (error) {
            LoggerAPI.error(`Error al obtener el ProductoStock con UUID ${productoStockUuid}: ${error}`);
            throw error;
        }
    }
}

export { ProductoStockService };
