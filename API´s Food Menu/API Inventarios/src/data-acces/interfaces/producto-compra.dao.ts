/** 
 * Importación de la entidad requerida
 */
import { ProductoCompra } from "@entity/producto-compra.entity"

/**
 * Interface de Acceso a Datos para la entidad ProductoCompra
 */
export interface ProductoCompraIDAO {
    /**
     * Obtiene la lista completa de productos comprados.
     * @returns Un arreglo con todos los registros de productos en compras.
     */
    getProductosCompra(): Promise<ProductoCompra[]>;

    /**
     * Busca un producto dentro de una compra por su identificador numérico.
     * @param productoCompraId Identificador numérico del registro producto-compra.
     * @returns El registro correspondiente, o null si no existe.
     */
    getProductoCompraById(productoCompraId: Number): Promise<ProductoCompra>;

    /**
     * Busca un producto dentro de una compra por su identificador único (UUID).
     * @param productoCompraUuid Identificador UUID del registro producto-compra.
     * @returns El registro correspondiente, o null si no existe.
     */
    getProductoCompraByUuid(productoCompraUuid: String): Promise<ProductoCompra>;

    /**
     * Elimina un registro producto-compra usando su identificador numérico.
     * @param productoCompraId Identificador numérico del registro.
     * @returns True si la eliminación fue exitosa, False en caso contrario.
     */
    eliminarProductoCompraById(productoCompraId: Number): Promise<Boolean>;

    /**
     * Actualiza la información de un registro producto-compra existente.
     * @param productoCompra Objeto de tipo ProductoCompra con los nuevos valores.
     * @returns True si la actualización fue exitosa, False en caso contrario.
     */
    actualizarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean>;

    /**
     * Agrega un nuevo registro de producto-compra a la base de datos.
     * @param productoCompra Objeto de tipo ProductoCompra a agregar.
     * @returns True si la inserción fue exitosa, False en caso contrario.
     */
    agregarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean>;
}
