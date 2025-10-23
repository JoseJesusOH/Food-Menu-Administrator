import { ProductoIDAO } from "@data.dao/producto.dao";
import { Producto } from "@entity/producto.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Clase encargada de manejar las operaciones CRUD de la entidad {@link Producto}.
 * Implementa la interfaz {@link ProductoIDAO} para garantizar la consistencia en las operaciones de acceso a datos.
 * 
 * Utiliza TypeORM para interactuar con la base de datos y un sistema de logging personalizado mediante {@link LoggerAPI}.
 */
class ProductoDAO implements ProductoIDAO {

    /** Repositorio de TypeORM para la entidad Producto. */
    productoRepositorio = Conexion.getRepository(Producto);

    /**
     * Obtiene la lista completa de productos registrados en la base de datos.
     * 
     * @returns {Promise<Producto[]>} Lista de productos o un arreglo vacío si no existen registros.
     * @throws {Error} Si ocurre algún problema durante la consulta.
     */
    async getProductos(): Promise<Producto[]> {
        try {
            const productos = await this.productoRepositorio.find();
            if (productos.length > 0) {
                LoggerAPI.info("Se obtuvieron todos los productos", { total: productos.length });
                return productos;
            } else {
                LoggerAPI.info("No se obtuvieron productos", { total: productos.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos", error);
            throw error;
        }
    }

    /**
     * Obtiene un producto según su identificador numérico.
     * 
     * @param {Number} productoId - Identificador único del producto.
     * @returns {Promise<Producto | null>} El producto encontrado o `null` si no existe.
     * @throws {Error} Si ocurre algún problema durante la consulta.
     */
    async getProductoById(productoId: Number): Promise<Producto> {
        try {
            const producto = await this.productoRepositorio.findOne({ where: { productoId } });

            if (producto) {
                LoggerAPI.info("Producto encontrado por ID", { id: productoId });
                return producto;
            } else {
                LoggerAPI.info("No se encontró el producto con el ID especificado", { id: productoId });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto por ID", error);
            throw error;
        }
    }

    /**
     * Obtiene un producto mediante su UUID.
     * 
     * @param {String} productoUuid - UUID del producto.
     * @returns {Promise<Producto | null>} El producto encontrado o `null` si no existe.
     * @throws {Error} Si ocurre algún problema durante la consulta.
     */
    async getProductoByUuid(productoUuid: String): Promise<Producto> {
        try {
            const producto = await this.productoRepositorio.findOne({ where: { productoUuid } });

            if (producto) {
                LoggerAPI.info("Producto encontrado por UUID", { uuid: productoUuid });
                return producto;
            } else {
                LoggerAPI.info("No se encontró el producto con el UUID especificado", { uuid: productoUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto por UUID", error);
            throw error;
        }
    }

    /**
     * Elimina un producto de la base de datos a partir de su ID.
     * 
     * @param {Number} productoId - Identificador del producto a eliminar.
     * @returns {Promise<Boolean>} `true` si la eliminación fue exitosa, `false` si el producto no fue encontrado.
     * @throws {Error} Si ocurre algún problema durante la eliminación.
     */
    async eliminarProductoById(productoId: Number): Promise<Boolean> {
        try {
            const resultado = await this.productoRepositorio.delete({ productoId });

            if (resultado.affected && resultado.affected > 0) {
                LoggerAPI.info("Producto eliminado correctamente", { id: productoId });
                return true;
            } else {
                LoggerAPI.info("No se encontró el producto para eliminar", { id: productoId });
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar el producto por ID", error);
            throw error;
        }
    }

    /**
     * Actualiza la información de un producto existente.
     * 
     * @param {Producto} producto - Objeto de tipo {@link Producto} con los datos actualizados.
     * @returns {Promise<Boolean>} `true` si la actualización fue exitosa, `false` si el producto no fue encontrado.
     * @throws {Error} Si ocurre algún problema durante la actualización.
     */
    async actualizarProducto(producto: Producto): Promise<Boolean> {
        try {
            const existe = await this.productoRepositorio.findOne({ where: { productoId: producto.productoId } });

            if (!existe) {
                LoggerAPI.info("No se encontró el producto para actualizar", { id: producto.productoId });
                return false;
            }

            await this.productoRepositorio.save(producto);
            LoggerAPI.info("Producto actualizado correctamente", { id: producto.productoId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al actualizar el producto", error);
            throw error;
        }
    }

    /**
     * Agrega un nuevo producto a la base de datos.
     * 
     * @param {Producto} producto - Objeto de tipo {@link Producto} a registrar.
     * @returns {Promise<Boolean>} `true` si la inserción fue exitosa.
     * @throws {Error} Si ocurre algún problema durante la inserción.
     */
    async agregarProducto(producto: Producto): Promise<Boolean> {
        try {
            const nuevoProducto = await this.productoRepositorio.save(producto);
            LoggerAPI.info("Producto agregado correctamente", { id: nuevoProducto.productoId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al agregar el producto", error);
            throw error;
        }
    }

}
