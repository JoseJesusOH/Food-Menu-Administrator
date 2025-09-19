/**
 * Importaciones requeridas para la implementación del DAO de Producto.
 */
import { Producto } from "@entity/producto.entity";
import { ProductoIDAO } from "@data.dao/producto.dao";
import { Conexion } from "@utility/conexion"
/**
 * Implementación del DAO de Producto.
 */
export class ProductoDAO implements ProductoIDAO {

    /** 1
     * Metodo para obtener todos los productos.
     */
    async getProductos(): Promise<Producto[]> {
        const productoRepositorio = Conexion.getRepository(Producto);
        return productoRepositorio.find()
    }
    /** 2
     * Metodo para obtener un producto por su ID.
     */
    async getProductoById(productoId: Number): Promise<Producto> {
        const productoRepositorio = Conexion.getRepository(Producto);
        return productoRepositorio.findOneBy({ productoId: productoId.valueOf() })
    }
    /** 3
     * Metodo para obtener un producto por su UUID.
     */
    async getProductoByUuid(productoUuid: String): Promise<Producto> {
           const productoRepositorio = Conexion.getRepository(Producto);
        return productoRepositorio.findOneBy({ productoUuid: productoUuid })
  }
    /** 4
     * Metodo para agregar un producto.
     */
    async agregarProducto(producto: Producto): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Metodo para actualizar un producto.
     */
    async actualizarProducto(producto: Producto): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 6
     * Metodo para eliminar un producto por su ID.
     */
    async eliminarProductoById(productoId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }


}