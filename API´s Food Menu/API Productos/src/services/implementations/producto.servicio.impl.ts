// Importación del Data Transfer Object (DTO) para la entidad Producto
import { ProductoDTO } from "@dto/producto.dto";

// Importación de la interfaz de servicio que define los métodos a implementar
import { ProductoIService } from "@service.dao/producto.servicio";

/**
 * Clase que implementa la interfaz ProductoIService.
 * Proporciona la estructura base para la gestión de productos,
 * incluyendo operaciones de consulta, inserción, actualización y eliminación.
 * 
 * Actualmente los métodos lanzan un error indicando que no han sido implementados.
 */
class ProductoServicio implements ProductoIService {
    
    /** Obtiene la lista de productos disponibles. */
    getProductos(): Promise<ProductoDTO[]> {
        throw new Error("Method not implemented.");
    }

    /** Busca un producto por su UUID único. */
    getProductoByUuid(productoUuid: String): Promise<ProductoDTO> {
        throw new Error("Method not implemented.");
    }

    /** Agrega un nuevo producto al sistema. */
    agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /** Elimina un producto a partir de su UUID. */
    eliminarProdcto(productoUuid: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /** Actualiza la información de un producto existente. */
    actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}

export { ProductoServicio }
