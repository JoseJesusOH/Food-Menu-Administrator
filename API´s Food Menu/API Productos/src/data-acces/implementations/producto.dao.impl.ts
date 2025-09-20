/**
 * Importaciones requeridas para la implementación del DAO de Producto.
 */
import { Producto } from "@entity/producto.entity";
import { ProductoIDAO } from "@data.dao/producto.dao";
import { Conexion } from "@utility/conexion"
import { LoggerAPI } from "@utility/logger";
/**
 * Implementación del DAO de Producto.
 */
export class ProductoDAO implements ProductoIDAO {
    productoRepositorio = Conexion.getRepository(Producto);
    /** 1
     * Metodo para obtener todos los productos.
     */
    async getProductos(): Promise<Producto[]> {
        LoggerAPI.info("Se inicia la busqueda de productos del sistema")
        try {
            const productos = await this.productoRepositorio.find();
            if (!productos || productos.length === 0) {
                LoggerAPI.warn("No se han encontrado productos en el sistema")
                return []
            } else {
                LoggerAPI.info(`Se han enconctreado un total de ${productos.length} productos`)
                return productos;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error en la busqueda de productos error ${error}`)
            throw error;
        }
    }
    /** 2
     * Metodo para obtener un producto por su ID.
     */
    async getProductoById(productoId: Number): Promise<Producto> {
        LoggerAPI.info("Se inicia busqueda de producto por ID")
        try{
            const producto=await this.productoRepositorio.findOneBy({productoId:productoId.valueOf()})
            if(producto!==null){
                LoggerAPI.info(`Se ha encontrado un producto con el id ${productoId}`)
                return producto;
            }else{
                LoggerAPI.warn(`No se ha encontrado un producto con el ID ${productoId}`)
                return null;
            }
         }catch(error){
            LoggerAPI.warn(`Se ha producido un error en la busqueda de producto por id error: ${error}`)
            throw error;
        }
    }
    /** 3
     * Metodo para obtener un producto por su UUID.
     */
    async getProductoByUuid(productoUuid: String): Promise<Producto> {
        LoggerAPI.info("Se inicia la busqueda del producto por UUID")
        try{ 
          const producto=await this.productoRepositorio.findOneBy({productoUuid})
          if(producto!==null){
            LoggerAPI.info(`Se ha encontrado el producto con UUID ${productoUuid}`)
            return producto;
          }else{
            LoggerAPI.warn(`No se encontrado un producto con el UUID ${productoUuid}`)
            return null;
          }
        }catch(error){
        LoggerAPI.warn(`Se ha producido un error en la busqueda por UUID de producto error; ${error}`);
           throw error;
        }
    }
    /** 4
     * Metodo para agregar un producto.
     */
    async agregarProducto(producto: Producto): Promise<Boolean> {
        LoggerAPI.info("Se inicializa metodo para agregar un producto en DB")
        try{
           const resultado=await this.productoRepositorio.insert(producto);
           if(resultado.identifiers.length>0){
            LoggerAPI.info("Se ha regfistrado el producto en DB exitosamente")
            return new Boolean(true)
           }
           else{
            LoggerAPI.warn("No se ha relizado la inserccion del producto")
            return new Boolean(false)
           }
        }catch(error){
            LoggerAPI.warn(`Se produjo error en el proceso de agregar un producto error ${error}`)
         throw error;
        }
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