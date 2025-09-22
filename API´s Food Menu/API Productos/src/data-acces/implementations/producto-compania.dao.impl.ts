/**
 * Importaciones requeridas para la implementación del DAO de ProductoCompania.
 */
import { ProductoCompania } from "@entity/producto-compania.entity";
import { ProductoCompaniaIDAO } from "@data.dao/producto-compania.dao";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
import { Compania } from "@entity/compania.entity";
import { Producto } from "@entity/producto.entity";
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
            const productoCompania = await this.productoCompaniaRepositorio.findOneBy({ productoCompaniaUuid })
            if (productoCompania !== null) {
                LoggerAPI.info(`Se ha encontrado el productocompania con uuid ${productoCompaniaUuid}`)
                return productoCompania;
            } else {
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
        LoggerAPI.info("Se inicia el proceso para obtener un producto compania por id DB")
        try {
            const resultado = await this.productoCompaniaRepositorio.findOneBy({ productoCompaniaId: productoCompaniaId.valueOf() })
            if (resultado !== null) {
                LoggerAPI.info(`Se ha encontrado un producto compania con ID ${productoCompaniaId}`)
                return resultado;
            } else {
                LoggerAPI.warn(`No se ha encontrado un producto compania con ID ${productoCompaniaId}`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error en la busqueda por id de productocompania error; ${error}`)
            throw error;
        }
    }
    /** 3
     * Metodo que obtiene los ProductoCompania por su ID de producto.
     */
    async getProductosCompaniasByIdProducto(productoId: Number): Promise<ProductoCompania[]> {
        LoggerAPI.info("Se inicia el proceso para obtener todos los productos compania por id de producto")
        try {
            const resultado = await this.productoCompaniaRepositorio.findBy({ producto: new Producto(productoId.valueOf()) })
            if (resultado.length > 0) {
                LoggerAPI.info(`Se han encontrado un total de ${resultado.length} productocompanias`)
                return resultado;
            } else {
                LoggerAPI.warn(`No se han encontrado productocompania por el id de la compania ${productoId}`)
                return []
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener todos los productocompania por id de producto error; ${error}`)
            throw error;
        }
    }
    /** 4
     * Metodo que obtiene los ProductoCompania por su UUID de producto compañia.
     */
    async getProductosCompaniasByIdCompania(companiaId: Number): Promise<ProductoCompania[]> {
        LoggerAPI.info("Se inicia el proceso para obtener todos los productos compania por id de compania")
        try {
            const resultado = await this.productoCompaniaRepositorio.findBy({ compania: new Compania(companiaId.valueOf()) })
            if (resultado.length > 0) {
                LoggerAPI.info(`Se han encontrado un total de ${resultado.length} productocompanias`)
                return resultado;
            } else {
                LoggerAPI.warn(`No se han encontrado productocompania por el id de la compania ${companiaId}`)
                return []
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener todos los productocompania por id de compania error; ${error}`)
            throw error;
        }
    }
    /** 5
     * Metodo que agrega un ProductoCompania.
     */
    async agregarProductoCompania(productoCompania: ProductoCompania): Promise<Boolean> {
        LoggerAPI.info("Se iniia el metodo para agregar un productoCompania en el sistema")
        try {
            const resultado = await this.productoCompaniaRepositorio.insert(productoCompania)
            if (resultado.identifiers.length > 0) {
                LoggerAPI.info("Se ha agregado el productoCompania exitosamente")
                return new Boolean(true)
            } else {
                LoggerAPI.warn("No se ha agregado el producto compania")
                return new Boolean(false)
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al agregar un productocompania error; ${error}`)
            throw error;
        }
    }
    /** 6
     * Metodo que actualiza un ProductoCompania.
     */
    async actualizarProductoCompania(productoCompania: ProductoCompania): Promise<Boolean> {
        LoggerAPI.info("Se ha iniciado el proceso para actualizar un productoCompania de DB")
        try {
            const resultado = await this.productoCompaniaRepositorio.update({ productoCompaniaId: productoCompania.getProductoCompaniaId() }, productoCompania)
            if (resultado !== null) {
                LoggerAPI.info(`Se ha actualizado el productocompania exitosamente`)
                return new Boolean(true);
            }
            else {
                LoggerAPI.warn(`No se ha actualizado el productocompania`)
                return new Boolean(false)
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al actualizar un productoCompania error; ${error}`)
            throw error;
        }
    }
    /** 7
     * Metodo que elimina un ProductoCompania por su ID.
     */
    async eliminarProductoCompaniaById(productoCompaniaId: Number): Promise<Boolean> {
        LoggerAPI.info("Se ha iniciado el proceso para eliminar un producto compania por id ")
        try {
            const resultado = await this.productoCompaniaRepositorio.delete({ productoCompaniaId })
            if (resultado.affected > 0) {
                LoggerAPI.info("Se ha eliminado el producto compania exitosamente")
                return new Boolean(true)
            } else {
                LoggerAPI.warn("No se ha eliminado el producto compania")
                return new Boolean(false)
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al eliminar un productocompania por id error; ${error}`)
            throw error;
        }
    }


}