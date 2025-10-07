// Importación del Data Transfer Object (DTO) para la entidad Producto
import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";

// Importación de la interfaz de servicio que define los métodos a implementar
import { ProductoIService } from "@service.dao/producto.servicio";
import { LoggerAPI } from "@utility/logger";
import { instanceToInstance } from "class-transformer";

/**
 * Clase que implementa la interfaz ProductoIService.
 * Proporciona la estructura base para la gestión de productos,
 * incluyendo operaciones de consulta, inserción, actualización y eliminación.
 * 
 * Actualmente los métodos lanzan un error indicando que no han sido implementados.
 */
class ProductoServicio implements ProductoIService {
    productoDAO : ProductoIDAO = new ProductoDAO();
    /** Obtiene la lista de productos disponibles. */
    async getProductos(): Promise<ProductoDTO[]> {
        LoggerAPI.info("Se inicia el metodo para obtener Productos");
        try {
             const productos= await this.productoDAO.getProductos();
             if(productos.length>0){
                let productosDTO:ProductoDTO []=[]
                productosDTO=instanceToInstance(productos);
                return productos;
             }else{
                LoggerAPI.warn("No se han encontrado producto")
                return [];
             }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos: " + error);
            throw error;
        }
    }

    /** Busca un producto por su UUID único. */
    getProductoByUuid(productoUuid: String): Promise<ProductoDTO> {
        
    }

    /** Agrega un nuevo producto al sistema. */
    agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        
    }

    /** Elimina un producto a partir de su UUID. */
    eliminarProdcto(productoUuid: String): Promise<Boolean> {
       
    }

    /** Actualiza la información de un producto existente. */
    actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        
    }
}

export { ProductoServicio }
