/**
 * Importación del DTO de ProductoStock.
 * Representa la estructura de datos que se transfiere entre capas.
 */
import { ProductoStockDTO } from "@dto/producto-stock.dto";

/**
 * Interfaz que define los métodos del servicio de ProductoStock.
 * Todos los servicios que implementen esta interfaz deben cumplir con estas operaciones.
 */
interface ProductoStockIServicio {

    /**
     * Obtiene todos los registros de producto en stock registrados en el sistema.
     * @return Arreglo de objetos ProductoStockDTO que representan todos los registros de stock.
     */
    getProductoStocks(): Promise<ProductoStockDTO[]>;

    /**
     * Registra un nuevo producto en stock a partir de los datos proporcionados.
     * @param productoStock Datos del producto en stock a registrar.
     * @return Boolean indicando si la operación fue exitosa o no.
     */
    agregarProductoStock(productoStock: ProductoStockDTO): Promise<Boolean>;

    /**
     * Actualiza un registro de producto en stock existente con los datos proporcionados.
     * @param productoStock Datos del producto en stock a actualizar.
     * @return Boolean indicando si la operación fue exitosa o no.
     */
    actualizarProductoStock(productoStock: ProductoStockDTO): Promise<Boolean>;

    /**
     * Elimina un registro de producto en stock utilizando su identificador único (UUID).
     * @param productoStockUuid Identificador único del producto en stock.
     * @return Boolean indicando si la operación de eliminación fue exitosa o no.
     */
    eliminarProductoStock(productoStockUuid: string): Promise<Boolean>;

    /**
     * Obtiene un registro de producto en stock específico a partir de su UUID.
     * @param productoStockUuid Identificador único del producto en stock.
     * @return Objeto ProductoStockDTO correspondiente al registro buscado.
     */
    getProductoStockByUuid(productoStockUuid: string): Promise<ProductoStockDTO>;
}

export { ProductoStockIServicio };
