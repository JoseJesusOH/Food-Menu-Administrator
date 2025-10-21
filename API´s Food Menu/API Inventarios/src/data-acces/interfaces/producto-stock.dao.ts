/** 
 * Importación de la entidad requerida
 */
import { ProductoStock } from "@entity/producto-stock.entity"

/**
 * Interface de Acceso a Datos para la entidad ProductoStock
 */
export interface ProductoStockIDAO {
    /**
     * Obtiene la lista completa de existencias de productos.
     * @returns Un arreglo con todos los registros de stock de productos.
     */
    getProductosStock(): Promise<ProductoStock[]>;

    /**
     * Busca un registro de stock por su identificador numérico.
     * @param productoStockId Identificador numérico del registro de stock.
     * @returns El registro correspondiente, o null si no existe.
     */
    getProductoStockById(productoStockId: Number): Promise<ProductoStock>;

    /**
     * Busca un registro de stock por su identificador único (UUID).
     * @param productoStockUuid Identificador UUID del registro de stock.
     * @returns El registro correspondiente, o null si no existe.
     */
    getProductoStockByUuid(productoStockUuid: String): Promise<ProductoStock>;

    /**
     * Elimina un registro de stock usando su identificador numérico.
     * @param productoStockId Identificador numérico del registro.
     * @returns True si la eliminación fue exitosa, False en caso contrario.
     */
    eliminarProductoStockById(productoStockId: Number): Promise<Boolean>;

    /**
     * Actualiza la información de un registro de stock existente.
     * @param productoStock Objeto de tipo ProductoStock con los nuevos valores.
     * @returns True si la actualización fue exitosa, False en caso contrario.
     */
    actualizarProductoStock(productoStock: ProductoStock): Promise<Boolean>;

    /**
     * Agrega un nuevo registro de stock a la base de datos.
     * @param productoStock Objeto de tipo ProductoStock a agregar.
     * @returns True si la inserción fue exitosa, False en caso contrario.
     */
    agregarProductoStock(productoStock: ProductoStock): Promise<Boolean>;
}
