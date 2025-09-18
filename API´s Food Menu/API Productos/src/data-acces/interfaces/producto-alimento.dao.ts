/**
 * Interfaz para el acceso a datos de ProductoAlimento
 */
import {ProductoAlimento} from "@entity/producto-alimento.entity"
/**
 * Interfaz que define los métodos para el acceso a datos de ProductoAlimento
 */
export interface ProductoAlimentoIDAO{
    /**
     *  Obtiene todos los productos alimentos de la base de datos por el ID del alimento
     * @param alimentoId ID del alimento
     * @returns Lista de productos alimentos
     */
    getProductosAlimentosByIdAlimento(alimentoId:Number):Promise<ProductoAlimento[]>;

  /**
   *  Obtiene un producto alimento por su ID
   * @param productoAlimentoId ID del producto alimento a buscar
   * @returns ProductoAlimento con el ID especificado
   */
    getProductoAlimentoById(productoAlimentoId:Number):Promise<ProductoAlimento>;

    /**
     * Obtiene un producto alimento por su UUID
     * @param productoAlimentoUuid UUID del producto alimento a buscar
     * @returns ProductoAlimento con el UUID especificado
     */
    getProductoAlimentoByUuid(productoAlimentoUuid:String):Promise<ProductoAlimento>;

    /**
     * Obtiene todos los productos alimentos de la base de datos por el ID del producto
     * @param productoId ID del producto
     * @returns Lista de productos alimentos
     */
    getProductosAlimentosByIdProducto(productoId:Number):Promise<ProductoAlimento[]>;
    /**
     * Agrega un nuevo producto alimento a la base de datos
     * @param productoAlimento ProductoAlimento a agregar
     * @returns Boolean indicando si se agrego o no el producto alimento
     */
    agregarProductoAlimento(productoAlimento:ProductoAlimento):Promise<Boolean>;

    /**
     * Actualiza un producto alimento en la base de datos
     * @param productoAlimento ProductoAlimento a actualizar
     * @returns Boolean indicando si se actualizo o no el producto alimento
     */
    actualizarProductoAlimento(productoAlimento:ProductoAlimento):Promise<Boolean>;

    /**
     * Elimina un producto alimento de la base de datos
     * @param productoAlimentoId ID del producto alimento a eliminar
     * @returns Boolean indicando si se elimino o no el producto alimento
     */
    eliminarProductoAlimentoById(productoAlimentoId:Number):Promise<Boolean>;
}