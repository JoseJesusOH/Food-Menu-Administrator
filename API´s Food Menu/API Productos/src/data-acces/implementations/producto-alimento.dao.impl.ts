/**
 * Importaciones requeridas para la implementación del DAO de ProductoAlimento.
 */
import { ProductoAlimento } from "@entity/producto-alimento.entity";
import { ProductoAlimentoIDAO } from "@data.dao/producto-alimento.dao";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
import { Alimento } from "@entity/alimento.entity";
/**
 * Implementación del DAO de ProductoAlimento.
 */
export class ProductoAlimentoDAO implements ProductoAlimentoIDAO {
    productoAlimentoRepositorio = Conexion.getRepository(ProductoAlimento)
    /** 1
     * Obtiene todos los productos-alimentos de un alimento específico 
    */
    async getProductosAlimentosByIdAlimento(alimentoId: Number): Promise<ProductoAlimento[]> {
        LoggerAPI.info("Se inicia el proceso para obtener todos los ProductoAlimento por ID de Alimento")
        try {
            const resultados = await this.productoAlimentoRepositorio.find({
                where: {
                    alimento: new Alimento(alimentoId.valueOf())
                }
            })

            if(resultados.length>0){
                 LoggerAPI.info(`Se han encontrado un total de ${resultados.length} ProductoCompania`)
                return resultados;
            }else{
                LoggerAPI.info(`No se han encontrado ProductoCompania con el id de alimento ${alimentoId}`)
                return []
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error en la busqueda de ProductoAlimento por ID alimento error; ${error}`)
            throw error;
        }
    }
    /** 2
     * Obtiene un producto-alimento por su ID 
    */
    async getProductoAlimentoById(productoAlimentoId: Number): Promise<ProductoAlimento> {
        LoggerAPI.info("Se inicia el proceso para obtener un productoalimento por ID ")
        try {
            const resultado = await this.productoAlimentoRepositorio.findOneBy({ productoAlimentoId })
            if (resultado != null) {
                LoggerAPI.info(`Se ha obtenido el productoalimento con id ${productoAlimentoId}`)
                return resultado;
            } else {
                LoggerAPI.info(`No se ha obtenido el productoalimento con id ${productoAlimentoId}`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener el producto alimento por id error; ${error}`)
            throw error;
        }
    }
    /** 3
     * Obtiene un producto-alimento por su UUID 
    */
    async getProductoAlimentoByUuid(productoAlimentoUuid: string): Promise<ProductoAlimento> {
        LoggerAPI.info("Se inicia el proceso para obtener un productoalimento por UUID ")
        try {
            const resultado = await this.productoAlimentoRepositorio.findOneBy({ productoAlimentoUuid })
            if (resultado != null) {
                LoggerAPI.info(`Se ha obtenido el productoalimento con uuid ${productoAlimentoUuid}`)
                return resultado;
            } else {
                LoggerAPI.info(`No se ha obtenido el productoalimento con uuid ${productoAlimentoUuid}`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener el producto alimento por uuid error; ${error}`)
            throw error;
        }
    }
    /** 4
     * Obtiene todos los productos-alimentos de un producto específico 
     */
    getProductosAlimentosByIdProducto(productoId: number): Promise<ProductoAlimento[]> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Agrega un nuevo producto-alimento 
     */
    async agregarProductoAlimento(productoAlimento: ProductoAlimento): Promise<Boolean> {
        LoggerAPI.info("Se inicia el proceso para agregar un productoalimento ")
        try {
            const resultado = await this.productoAlimentoRepositorio.insert(productoAlimento)
            if (resultado.identifiers.length > 0) {
                LoggerAPI.info(`Se ha agregado el productoalimento exitosamente`)
                return new Boolean(true);
            } else {
                LoggerAPI.info(`No se ha obtenido agregado el productoalimento `)
                return new Boolean(false);
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al agregar el producto alimento error; ${error}`)
            throw error;
        }
    }
    /** 6
     * Actualiza un producto-alimento existente 
     */
    async actualizarProductoAlimento(productoAlimento: ProductoAlimento): Promise<Boolean> {
        LoggerAPI.info("Se inicia el proceso para actualizar un productoalimento ")
        try {
            const resultado = await this.productoAlimentoRepositorio.update({ productoAlimentoId: productoAlimento.getProductoAlimentoId() }, productoAlimento)
            if (resultado.affected > 0) {
                LoggerAPI.info(`Se ha actualizado el productoalimento exitosamente`)
                return new Boolean(true);
            } else {
                LoggerAPI.info(`No se ha actualizado el productoalimento `)
                return new Boolean(false);
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al actualizar el producto alimento error; ${error}`)
            throw error;
        }
    }
    /** 7
     * Elimina un producto-alimento por su ID 
     */
    async eliminarProductoAlimentoById(productoAlimentoId: number): Promise<Boolean> {
        LoggerAPI.info("Se inicia el proceso para eliminar un productoalimento ")
        try {
            const resultado = await this.productoAlimentoRepositorio.delete({ productoAlimentoId })
            if (resultado.affected > 0) {
                LoggerAPI.info(`Se ha eliminado el productoalimento exitosamente con id ${productoAlimentoId}`)
                return new Boolean(true);
            } else {
                LoggerAPI.info(`No se ha eliminado el productoalimento con id ${productoAlimentoId} `)
                return new Boolean(false);
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al eliminar el producto alimento error; ${error}`)
            throw error;
        }
    }
}