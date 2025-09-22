/**
 * Importaciones requeridas para la implementación del DAO de ProductoCompania.
 */
import { ProductoCompania } from "@entity/producto-compania.entity";
import { ProductoCompaniaIDAO } from "@data.dao/producto-compania.dao";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
/**
 * Implementación del DAO de ProductoCompania.
 */
export class ProductoCompaniaDAO implements ProductoCompaniaIDAO {
productoCompaniaRepositorio = Conexion.getRepository(ProductoCompania);
    /** 1
     * Metodo que obtiene un ProductoCompania por su UUID.
     */
    async getProductoCompaniaByUuid(productoCompaniaUuid: String): Promise<ProductoCompania> {
        LoggerAPI.info("Se ha iniciado el proceso para obtener un producto compania por id")
        try {
            const productoCompania=await this.productoCompaniaRepositorio.findOneBy({productoCompaniaUuid})
            if(productoCompania!==null){
                LoggerAPI.info(`Se ha encontrado el productocompania con uuid ${productoCompaniaUuid}`)
                return productoCompania;
            }else{
                LoggerAPI.warn(`No se ha encontrado el productocompania con uuid ${productoCompaniaUuid}`)
               return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener el producto por UUID error ${error}`)
            throw error
        }
    }
    /** 2
     * Metodo que obtiene un ProductoCompania por su ID.
     */
    async getProductoCompaniaById(productoCompaniaId: Number): Promise<ProductoCompania> {
         const productoCompaniaRepositorio = Conexion.getRepository(ProductoCompania);
        return productoCompaniaRepositorio.findOneBy(
            {productoCompaniaId:productoCompaniaId})
    }
    /** 3
     * Metodo que obtiene los ProductoCompania por su ID de producto.
     */
    async getProductosCompaniasByIdProducto(productoId: Number): Promise<ProductoCompania[]> {
        throw new Error("Method not implemented.");
    }
    /** 4
     * Metodo que obtiene los ProductoCompania por su UUID de producto compañia.
     */
    async getProductosCompaniasByIdCompania(companiaId: Number): Promise<ProductoCompania[]> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Metodo que agrega un ProductoCompania.
     */
    async agregarProductoCompania(productoCompania: ProductoCompania): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 6
     * Metodo que actualiza un ProductoCompania.
     */
    async actualizarProductoCompania(productoCompania: ProductoCompania): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 7
     * Metodo que elimina un ProductoCompania por su ID.
     */
    async eliminarProductoCompaniaById(productoCompaniaId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }


}