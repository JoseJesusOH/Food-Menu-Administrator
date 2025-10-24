/**
 * Importación del DTO de Producto.
 * Representa la estructura de datos que se transfiere entre capas.
 */
import { ProductoDTO } from "@dto/producto.dto";

/**
 * Interfaz que define los métodos del servicio de Productos.
 * Todos los servicios que implementen esta interfaz deben cumplir con estas operaciones.
 */
interface ProductoIServicio {

    /**
     * Obtiene todos los productos registrados en el sistema.
     * @return Arreglo de objetos ProductoDTO que representan todos los productos.
     */
    getProductos(): Promise<ProductoDTO[]>;

    /**
     * Crea un nuevo producto a partir de los datos proporcionados.
     * @param producto Datos del producto a registrar.
     * @return Boolean indicando si la operación fue exitosa o no.
     */
    agregarProducto(producto: ProductoDTO): Promise<Boolean>;

    /**
     * Actualiza un producto existente con los datos proporcionados.
     * @param producto Datos del producto a actualizar.
     * @return Boolean indicando si la operación fue exitosa o no.
     */
    actualizarProducto(producto: ProductoDTO): Promise<Boolean>;

    /**
     * Elimina un producto utilizando su identificador único (UUID).
     * @param productoUuid Identificador único del producto.
     * @return Boolean indicando si la operación de eliminación fue exitosa o no.
     */
    eliminarProducto(productoUuid: string): Promise<Boolean>;

    /**
     * Obtiene un producto específico a partir de su UUID.
     * @param productoUuid Identificador único del producto.
     * @return Objeto ProductoDTO correspondiente al producto buscado.
     */
    getProductoByUuid(productoUuid: string): Promise<ProductoDTO>;
}

export { ProductoIServicio };
