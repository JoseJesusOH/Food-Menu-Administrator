import { ProductoDTO } from "@dto/producto.dto";

/**
 * Interfaz que define las operaciones del servicio relacionadas con los productos.
 * 
 * Proporciona métodos para gestionar el ciclo de vida completo de los productos:
 * creación, lectura, actualización y eliminación.
 */
interface ProductoIService {
    /**
     * Obtiene todos los productos disponibles.
     * @returns Una promesa que resuelve con una lista de productos.
     */
    getProductos(): Promise<ProductoDTO[]>;

    /**
     * Obtiene un producto específico por su UUID.
     * @param productoUuid UUID del producto a buscar.
     * @returns Una promesa que resuelve con el producto encontrado.
     */
    getProductoByUuid(productoUuid: String): Promise<ProductoDTO>;

    /**
     * Agrega un nuevo producto al sistema.
     * @param productoDTO Objeto que contiene los datos del producto a registrar.
     * @returns Una promesa que resuelve con `true` si el producto se agregó correctamente.
     */
    agregarProducto(productoDTO: ProductoDTO): Promise<Boolean>;

    /**
     * Elimina un producto por su UUID.
     * @param productoUuid UUID del producto a eliminar.
     * @returns Una promesa que resuelve con `true` si el producto fue eliminado correctamente.
     */
    eliminarProducto(productoUuid: String): Promise<Boolean>;

    /**
     * Actualiza los datos de un producto existente.
     * @param productoDTO Objeto con la información actualizada del producto.
     * @returns Una promesa que resuelve con `true` si la actualización fue exitosa.
     */
    actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean>;
}

export { ProductoIService };
