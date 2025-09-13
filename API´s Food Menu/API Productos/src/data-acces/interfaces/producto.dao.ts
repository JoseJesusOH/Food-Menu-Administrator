/**
 * Importaciones requeridas para la interfaz ProductoIDAO, entidad Producto.
 */
import {Producto} from "@entity/producto.entity"

/**
 * Interfaz para el acceso a datos de Producto
 */
export interface ProductoIDAO{
    /**
     * Obtiene todos los productos
     * @returns Lista de productos
     */
    getProductos():Producto[];
    
    /**
     * Obtiene un producto por su ID
     * @param productoId ID del producto a buscar
     * @returns Producto con el ID especificado
     */
    getProductoById(productoId:Number):Producto;

    /**
     * Obtiene un producto por su UUID
     * @param productoUuid UUID del producto a buscar
     * @returns Producto con el UUID especificado
     */
    getProductoByUuid(productoUuid:String):Producto;
   
    /**
     * Agrega un nuevo producto a la base de datos
     * @param producto Producto a agregar
     * @returns Boolean indicando si se agrego o no el producto
     */
    agregarProducto(producto:Producto):Boolean;
    
    /**
     * Actualiza un producto en la base de datos
     * @param producto Producto a actualizar
     * @returns Boolean indicando si se actualizo o no el producto
     */
    actualizarProducto(producto:Producto):Boolean;

    /**
     * Elimina un producto de la base de datos
     * @param productoId ID del producto a eliminar
     * @returns Boolean indicando si se elimino o no el producto
     */
    eliminarProductoById(productoId:Number):Boolean;
}