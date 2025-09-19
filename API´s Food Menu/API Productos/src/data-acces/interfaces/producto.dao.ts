/**
 * Importaciones requeridas para la interfaz ProductoIDAO, entidad Producto.
 */
import {Producto} from "@entity/producto.entity"

/**
 * Interfaz para el acceso a datos de Producto
 */
export interface ProductoIDAO{
    /** 1
     * Obtiene todos los productos
     * @returns Lista de productos
     */
    getProductos(): Promise<Producto[]>;
    /** 2
     * Obtiene un producto por su ID
     * @param productoId ID del producto a buscar
     * @returns Producto con el ID especificado
     */
    getProductoById(productoId:Number): Promise<Producto>;
    /** 3
     * Obtiene un producto por su UUID
     * @param productoUuid UUID del producto a buscar
     * @returns Producto con el UUID especificado
     */
    getProductoByUuid(productoUuid:String): Promise<Producto>;
    /** 4
     * Agrega un nuevo producto a la base de datos
     * @param producto Producto a agregar
     * @returns Boolean indicando si se agrego o no el producto
     */
    agregarProducto(producto:Producto): Promise<Boolean>;
    /** 5
     * Actualiza un producto en la base de datos
     * @param producto Producto a actualizar
     * @returns Boolean indicando si se actualizo o no el producto
     */
    actualizarProducto(producto:Producto): Promise<Boolean>;
    /** 6
     * Elimina un producto de la base de datos
     * @param productoId ID del producto a eliminar
     * @returns Boolean indicando si se elimino o no el producto
     */
    eliminarProductoById(productoId:Number): Promise<Boolean>;
}