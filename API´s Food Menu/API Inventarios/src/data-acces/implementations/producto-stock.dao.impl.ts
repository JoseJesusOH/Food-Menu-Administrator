import { ProductoStockIDAO } from "@data.dao/producto-stock.dao";
import { ProductoStock } from "@entity/producto-stock.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Implementación del DAO para manejar las operaciones relacionadas con el stock de productos.
 * Proporciona métodos CRUD que interactúan con la base de datos utilizando el repositorio de TypeORM.
 */
class ProductoStockDAO implements ProductoStockIDAO {

    /** Repositorio principal para interactuar con la entidad ProductoStock. */
    productoStockRepositorio = Conexion.getRepository(ProductoStock);

    /**
     * Obtiene todos los registros de productos con su stock, incluyendo relaciones con producto y sucursal.
     * 
     * @returns {Promise<ProductoStock[]>} Lista de productos con stock.
     * @throws {Error} Si ocurre algún error al consultar la base de datos.
     */
    async getProductosStock(): Promise<ProductoStock[]> {
        try {
            const productosStock = await this.productoStockRepositorio.find({ relations: ["producto", "sucursal"] });

            if (productosStock.length > 0) {
                LoggerAPI.info("Se obtuvieron todos los productos con su stock", { total: productosStock.length });
                return productosStock;
            } else {
                LoggerAPI.info("No se encontraron productos con stock", { total: productosStock.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos con stock", error);
            throw error;
        }
    }

    /**
     * Obtiene un producto en stock por su ID, incluyendo las relaciones con producto y sucursal.
     * 
     * @param {Number} productoStockId - ID del registro de stock a buscar.
     * @returns {Promise<ProductoStock | null>} El registro encontrado o `null` si no existe.
     * @throws {Error} Si ocurre algún error durante la búsqueda.
     */
    async getProductoStockById(productoStockId: Number): Promise<ProductoStock> {
        try {
            const productoStock = await this.productoStockRepositorio.findOne({
                where: { productoStockId },
                relations: ["producto", "sucursal"]
            });

            if (productoStock) {
                LoggerAPI.info("Producto en stock encontrado por ID", { id: productoStockId });
                return productoStock;
            } else {
                LoggerAPI.info("No se encontró el producto en stock con el ID especificado", { id: productoStockId });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto en stock por ID", error);
            throw error;
        }
    }

    /**
     * Obtiene un producto en stock por su UUID, incluyendo las relaciones con producto y sucursal.
     * 
     * @param {String} productoStockUuid - UUID del registro de stock a buscar.
     * @returns {Promise<ProductoStock | null>} El registro encontrado o `null` si no existe.
     * @throws {Error} Si ocurre algún error durante la búsqueda.
     */
    async getProductoStockByUuid(productoStockUuid: String): Promise<ProductoStock> {
        try {
            const productoStock = await this.productoStockRepositorio.findOne({
                where: { productoStockUuid },
                relations: ["producto", "sucursal"]
            });

            if (productoStock) {
                LoggerAPI.info("Producto en stock encontrado por UUID", { uuid: productoStockUuid });
                return productoStock;
            } else {
                LoggerAPI.info("No se encontró el producto en stock con el UUID especificado", { uuid: productoStockUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto en stock por UUID", error);
            throw error;
        }
    }

    /**
     * Elimina un registro de stock a partir de su ID.
     * 
     * @param {Number} productoStockId - ID del registro a eliminar.
     * @returns {Promise<Boolean>} `true` si el registro fue eliminado correctamente, `false` si no se encontró.
     * @throws {Error} Si ocurre algún error durante la eliminación.
     */
    async eliminarProductoStockById(productoStockId: Number): Promise<Boolean> {
        try {
            const resultado = await this.productoStockRepositorio.delete({ productoStockId });

            if (resultado.affected && resultado.affected > 0) {
                LoggerAPI.info("Registro de stock eliminado correctamente", { id: productoStockId });
                return true;
            } else {
                LoggerAPI.info("No se encontró el registro de stock para eliminar", { id: productoStockId });
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar el registro de stock por ID", error);
            throw error;
        }
    }

    /**
     * Actualiza un registro existente del stock de un producto.
     * 
     * @param {ProductoStock} productoStock - Objeto con los datos actualizados del stock.
     * @returns {Promise<Boolean>} `true` si se actualizó correctamente, `false` si no se encontró el registro.
     * @throws {Error} Si ocurre algún error durante la actualización.
     */
    async actualizarProductoStock(productoStock: ProductoStock): Promise<Boolean> {
        try {
            const existe = await this.productoStockRepositorio.findOne({ where: { productoStockId: productoStock.productoStockId } });

            if (!existe) {
                LoggerAPI.info("No se encontró el registro de stock para actualizar", { id: productoStock.productoStockId });
                return false;
            }

            await this.productoStockRepositorio.save(productoStock);
            LoggerAPI.info("Registro de stock actualizado correctamente", { id: productoStock.productoStockId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al actualizar el registro de stock", error);
            throw error;
        }
    }

    /**
     * Agrega un nuevo registro de stock para un producto.
     * 
     * @param {ProductoStock} productoStock - Objeto con los datos del nuevo registro de stock.
     * @returns {Promise<Boolean>} `true` si el registro se agregó correctamente.
     * @throws {Error} Si ocurre algún error durante la inserción.
     */
    async agregarProductoStock(productoStock: ProductoStock): Promise<Boolean> {
        try {
            const nuevoRegistro = await this.productoStockRepositorio.save(productoStock);
            LoggerAPI.info("Registro de stock agregado correctamente", { id: nuevoRegistro.productoStockId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al agregar el registro de stock", error);
            throw error;
        }
    }
}

export { ProductoStockDAO };
