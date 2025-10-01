// Importación del Data Transfer Object (DTO) para la entidad Producto
import { ProductoDTO } from "@dto/producto.dto"

/**
 * Interfaz que define los métodos del servicio para la gestión de productos.
 * Cada método retorna una Promesa con el tipo de dato esperado.
 */
interface ProductoIService {

    /**
     * Obtiene la lista completa de productos.
     * @returns Promise con un arreglo de ProductoDTO.
     */
    getProductos(): Promise<ProductoDTO[]>;

    /**
     * Busca un producto específico mediante su UUID.
     * @param productoUuid Identificador único del producto.
     * @returns Promise con el ProductoDTO encontrado.
     */
    getProductoByUuid(productoUuid: String): Promise<ProductoDTO>;

    /**
     * Agrega un nuevo producto al sistema.
     * @param productoDTO Objeto de transferencia con los datos del producto.
     * @returns Promise con true si se insertó correctamente, false en caso contrario.
     */
    agregarProducto(productoDTO: ProductoDTO): Promise<Boolean>;

    /**
     * Elimina un producto a partir de su UUID.
     * @param productoUuid Identificador único del producto.
     * @returns Promise con true si la eliminación fue exitosa, false en caso contrario.
     */
    eliminarProdcto(productoUuid: String): Promise<Boolean>;

    /**
     * Actualiza la información de un producto existente.
     * @param productoDTO Objeto de transferencia con los datos actualizados del producto.
     * @returns Promise con true si la actualización fue exitosa, false en caso contrario.
     */
    actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean>;
}

// Exportación de la interfaz para ser implementada en servicios concretos
export { ProductoIService }
