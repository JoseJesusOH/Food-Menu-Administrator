import { ProductoCompraIDAO } from "@data.dao/producto-compra.dao";
import { ProductoCompra } from "@entity/producto-compra.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Implementación del DAO para manejar las operaciones CRUD de la entidad ProductoCompra.
 * Permite consultar, agregar, actualizar y eliminar registros de productos relacionados a compras.
 */
class ProductoCompraDAO implements ProductoCompraIDAO {

    /** Repositorio de TypeORM para interactuar con la entidad ProductoCompra. */
    productoCompraRepositorio = Conexion.getRepository(ProductoCompra);

    /**
     * Obtiene todos los registros de productos asociados a compras, incluyendo relaciones con producto y compra.
     * 
     * @returns {Promise<ProductoCompra[]>} Lista de registros de producto-compra.
     * @throws {Error} Si ocurre algún error al consultar la base de datos.
     */
    async getProductosCompra(): Promise<ProductoCompra[]> {
        try {
            const productosCompra = await this.productoCompraRepositorio.find({ relations: ["producto", "compra"] });

            if (productosCompra.length > 0) {
                LoggerAPI.info("Se obtuvieron todos los productos de compra", { total: productosCompra.length });
                return productosCompra;
            } else {
                LoggerAPI.info("No se encontraron productos de compra", { total: productosCompra.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos de compra", error);
            throw error;
        }
    }

    /**
     * Obtiene un registro de producto-compra por su ID.
     * 
     * @param {Number} productoCompraId - ID del registro a buscar.
     * @returns {Promise<ProductoCompra | null>} El registro encontrado o `null` si no existe.
     * @throws {Error} Si ocurre algún problema durante la consulta.
     */
    async getProductoCompraById(productoCompraId: Number): Promise<ProductoCompra> {
        try {
            const productoCompra = await this.productoCompraRepositorio.findOne({
                where: { productoCompraId },
                relations: ["producto", "compra"]
            });

            if (productoCompra) {
                LoggerAPI.info("Producto de compra encontrado por ID", { id: productoCompraId });
                return productoCompra;
            } else {
                LoggerAPI.info("No se encontró el producto de compra con el ID especificado", { id: productoCompraId });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto de compra por ID", error);
            throw error;
        }
    }

    /**
     * Obtiene un registro de producto-compra por su UUID.
     * 
     * @param {String} productoCompraUuid - UUID del registro a buscar.
     * @returns {Promise<ProductoCompra | null>} El registro encontrado o `null` si no existe.
     * @throws {Error} Si ocurre algún problema durante la consulta.
     */
    async getProductoCompraByUuid(productoCompraUuid: String): Promise<ProductoCompra> {
        try {
            const productoCompra = await this.productoCompraRepositorio.findOne({
                where: { productoCompraUuid },
                relations: ["producto", "compra"]
            });

            if (productoCompra) {
                LoggerAPI.info("Producto de compra encontrado por UUID", { uuid: productoCompraUuid });
                return productoCompra;
            } else {
                LoggerAPI.info("No se encontró el producto de compra con el UUID especificado", { uuid: productoCompraUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto de compra por UUID", error);
            throw error;
        }
    }

    /**
     * Elimina un registro de producto-compra por su ID.
     * 
     * @param {Number} productoCompraId - ID del registro a eliminar.
     * @returns {Promise<Boolean>} `true` si la eliminación fue exitosa, `false` si no se encontró el registro.
     * @throws {Error} Si ocurre algún problema durante la eliminación.
     */
    async eliminarProductoCompraById(productoCompraId: Number): Promise<Boolean> {
        try {
            const resultado = await this.productoCompraRepositorio.delete({ productoCompraId });

            if (resultado.affected && resultado.affected > 0) {
                LoggerAPI.info("Producto de compra eliminado correctamente", { id: productoCompraId });
                return true;
            } else {
                LoggerAPI.info("No se encontró el producto de compra para eliminar", { id: productoCompraId });
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar el producto de compra por ID", error);
            throw error;
        }
    }

    /**
     * Actualiza un registro existente de producto-compra.
     * 
     * @param {ProductoCompra} productoCompra - Objeto con los datos actualizados del registro.
     * @returns {Promise<Boolean>} `true` si la actualización fue exitosa, `false` si no se encontró el registro.
     * @throws {Error} Si ocurre algún problema durante la actualización.
     */
    async actualizarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean> {
        try {
            const existe = await this.productoCompraRepositorio.findOne({ where: { productoCompraId: productoCompra.productoCompraId } });

            if (!existe) {
                LoggerAPI.info("No se encontró el producto de compra para actualizar", { id: productoCompra.productoCompraId });
                return false;
            }

            await this.productoCompraRepositorio.save(productoCompra);
            LoggerAPI.info("Producto de compra actualizado correctamente", { id: productoCompra.productoCompraId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al actualizar el producto de compra", error);
            throw error;
        }
    }

    /**
     * Agrega un nuevo registro de producto-compra.
     * 
     * @param {ProductoCompra} productoCompra - Objeto con los datos del nuevo registro.
     * @returns {Promise<Boolean>} `true` si el registro se agregó correctamente.
     * @throws {Error} Si ocurre algún problema durante la inserción.
     */
    async agregarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean> {
        try {
            const nuevoRegistro = await this.productoCompraRepositorio.save(productoCompra);
            LoggerAPI.info("Producto de compra agregado correctamente", { id: nuevoRegistro.productoCompraId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al agregar el producto de compra", error);
            throw error;
        }
    }

}

export { ProductoCompraDAO };
