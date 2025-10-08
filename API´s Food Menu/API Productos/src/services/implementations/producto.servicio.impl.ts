// Importación del Data Transfer Object (DTO) para la entidad Producto
import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { ProductoDTO } from "@dto/producto.dto";

// Importación de la interfaz de servicio que define los métodos a implementar
import { ProductoIService } from "@service.dao/producto.servicio";
import { LoggerAPI } from "@utility/logger";
import { instanceToInstance, plainToInstance } from "class-transformer";

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
                let productosDTO=[]
                productosDTO=plainToInstance(ProductoDTO,productos);
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
    async getProductoByUuid(productoUuid: String): Promise<ProductoDTO> {
         LoggerAPI.info("Se inicia el metodo para obtener Productos");
        try {
             const producto= await this.productoDAO.getProductoByUuid(productoUuid)
             if(!producto){
                let productoDTO: ProductoDTO =new ProductoDTO();
                productoDTO=instanceToInstance(producto);
                return producto;
             }else{
                LoggerAPI.warn("No se han encontrado producto")
                return null;
             }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos: " + error);
            throw error;
        }  
    }

    /** Agrega un nuevo producto al sistema. */
    agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
         LoggerAPI.info("Se inicia el metodo para agregar un nuevo producto");
        try {
              let productoDTOInsert: ProductoDTO =new ProductoDTO();
              productoDTOInsert=instanceToInstance(productoDTO);
             const producto= this.productoDAO.agregarProducto(productoDTOInsert);
             if(producto){
                return new Promise(true);
             }else{
                LoggerAPI.warn("No se ha podido agregar el producto")
                return false;
             }
        } catch (error) {
            LoggerAPI.error("Error al agregar el producto: " + error);
            throw error;
        } 
    }

    /** Elimina un producto a partir de su UUID. */
    eliminarProdcto(productoUuid: String): Promise<Boolean> {
            LoggerAPI.info("Se inicia el metodo para eliminar un producto");
        try {
             const producto= this.productoDAO.eliminarProdcto(productoUuid);
                if(producto){
                return new Promise(true);
             }else{
                LoggerAPI.warn("No se ha podido eliminar el producto")
                return false;
             }      
        } catch (error) {
            LoggerAPI.error("Error al eliminar el producto: " + error);
            throw error;
        }
    }

    /** Actualiza la información de un producto existente. */
    actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
            LoggerAPI.info("Se inicia el metodo para actualizar un producto");
        try {
              let productoDTOUpdate: ProductoDTO =new ProductoDTO();
              productoDTOUpdate=instanceToInstance(productoDTO);
             const producto= this.productoDAO.actualizarProducto(productoDTOUpdate);
                if(producto){ 
                return new Boolean(true);
             }else{
                LoggerAPI.warn("No se ha podido actualizar el producto")
                return false;
             }  
        } catch (error) {
            LoggerAPI.error("Error al actualizar el producto: " + error);
            throw error;
        }
    }
}

export { ProductoServicio }
