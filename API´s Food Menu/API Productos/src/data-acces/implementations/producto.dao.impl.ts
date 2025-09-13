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
    getProductos(): Producto[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener un producto por su ID.
     */
    getProductoById(productoId: Number): Producto {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener un producto por su nombre.
     */
    getProductoByNombre(productoNombre: String): Producto {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener un producto por su UUID.
     */
    getProductoByUuid(productoUuid: String): Producto {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar un producto.
     */
    agregarProducto(producto: Producto): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar un producto.
     */
    actualizarProducto(producto: Producto): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar un producto por su ID.
     */
    eliminarProductoById(productoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    
   
}