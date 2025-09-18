/**
 * Importaciones requeridas para la implementación del DAO de Producto.
 */
import { Producto } from "@entity/producto.entity";
import { ProductoIDAO } from "@data.dao/producto.dao";

/**
 * Implementación del DAO de Producto.
 */
export class ProductoDAO implements ProductoIDAO{
     
    /**
     * Metodo para obtener todos los productos.
     */ 
    async getProductos(): Promise<Producto[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener un producto por su ID.
     */
    async getProductoById(productoId: Number): Promise<Producto >{
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener un producto por su nombre.
     */
    async getProductoByNombre(productoNombre: String): Promise<Producto> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener un producto por su UUID.
     */
    async getProductoByUuid(productoUuid: String): Promise<Producto> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar un producto.
     */
    async agregarProducto(producto: Producto): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar un producto.
     */
    async actualizarProducto(producto: Producto): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar un producto por su ID.
     */
    async eliminarProductoById(productoId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
   
}