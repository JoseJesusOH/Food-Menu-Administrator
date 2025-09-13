/**
 * Interface para el DAO de ProductoCompania
 */
import { ProductoCompania } from "@entity/producto-compania.entity"
/**
 * Interfaz que define los métodos para el acceso a datos de ProductoCompania
 */
export interface ProductoCompaniaIDAO {

    /**
     * Obtiene un producto compañia por su UUID
     * @param productoCompaniaUuid UUID del producto compañia a buscar
     * @returns Producto compañia encontrado
     */
    getProductoCompaniaByUuid(productoCompaniaUuid: String): ProductoCompania;

    /**
     * Obtiene un producto compañia por su ID
     * @param productoCompaniaId ID del producto compañia a buscar
     * @returns Producto compañia encontrado
     */
    getProductoCompaniaById(productoCompaniaId: Number): ProductoCompania;
    /**
     * Obtiene todos los productos compañias de la base de datos por el ID del producto
     * @param productoId ID del producto
     * @returns Lista de productos compañias
     */
    getProductosCompaniasByIdProducto(productoId: Number): ProductoCompania[];

    /**
     * Obtiene todos los productos compañias de la base de datos por el ID de la compañia
     * @param companiaId ID de la compañia
     * @returns Lista de productos compañias
     */
    getProductosCompaniasByIdCompania(companiaId: Number): ProductoCompania[];

    /**
     * Agrega un nuevo producto compañia a la base de datos
     * @param productoCompania ProductoCompania a agregar
     * @returns Boolean indicando si se agrego o no el producto compañia
     */
    agregarProductoCompania(productoCompania: ProductoCompania): Boolean;

    /**
     * Actualiza un producto compañia en la base de datos
     * @param productoCompania ProductoCompania a actualizar
     * @returns Boolean indicando si se actualizo o no el producto compañia
     */
    actualizarProductoCompania(productoCompania: ProductoCompania): Boolean;

    /**
     * Elimina un producto compañia de la base de datos
     * @param productoCompaniaId ID del producto compañia a eliminar
     * @returns Boolean indicando si se elimino o no el producto compañia
     */
    eliminarProductoCompaniaById(productoCompaniaId: Number): Boolean;
}