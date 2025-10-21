/** 
 * Importación de la entidad requerida
 */
import { Producto } from "@entity/producto.entity"

/**
 * Interface de Acceso a Datos para la entidad Producto
 */
export interface ProductoIDAO {
    /**
     * Obtiene la lista completa de productos registrados.
     * @returns Un arreglo con todos los productos.
     */
    getProductos(): Promise<Producto[]>;

    /**
     * Busca un producto a partir de su identificador numérico.
     * @param productoId Identificador numérico del producto.
     * @returns El producto correspondiente al ID, o null si no existe.
     */
    getProductoById(productoId: Number): Promise<Producto>;

    /**
     * Busca un producto a partir de su identificador único (UUID).
     * @param productoUuid Identificador UUID del producto.
     * @returns El producto correspondiente al UUID, o null si no existe.
     */
    getProductoByUuid(productoUuid: String): Promise<Producto>;

    /**
     * Elimina un producto usando su identificador numérico.
     * @param productoId Identificador numérico del producto.
     * @returns True si el producto fue eliminado, False en caso contrario.
     */
    eliminarProductoById(productoId: Number): Promise<Boolean>;

    /**
     * Actualiza la información de un producto existente.
     * @param producto Objeto de tipo Producto con los nuevos valores.
     * @returns True si la actualización fue exitosa, False en caso contrario.
     */
    actualizarProducto(producto: Producto): Promise<Boolean>;

    /**
     * Agrega un nuevo producto a la base de datos.
     * @param producto Objeto de tipo Producto a agregar.
     * @returns True si la inserción fue exitosa, False en caso contrario.
     */
    agregarProducto(producto: Producto): Promise<Boolean>;
}
