/**
 * Importaciones requeridas para la implementación del DAO de Compañía.
 */
import { Compania } from "@entity/compania.entity";
import { CompaniaIDAO } from "@data.dao/compania.dao";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Implementación del DAO de Compañía.
 */
export class CompaniaDAO implements CompaniaIDAO {
    companiaRepositorio = Conexion.getRepository(Compania);
    /** 1
     * Metodo que obtiene todas las compañias.
     */
    async getCompanias(): Promise<Compania[]> {
        LoggerAPI.info("Se inicia proceso de obtención de companias en DB")
        try {
            const companias = await this.companiaRepositorio.find();
            if (!companias || companias.length === 0) {
                LoggerAPI.warn("No se han encontrado companias en DB")
                return []
            } else {
                LoggerAPI.info(`Se han encontrado un total de ${companias.length} companias`)
                return companias;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error en la busqueda de companias error; ${error}`)
            throw error;
        }
    }
    /** 2
     * Metodo que obtiene una compañia por su ID.
     */
    async getCompaniaById(companiaId: Number): Promise<Compania> {
        LoggerAPI.info("Se inicia proceso para obtener compania por ID")
        try {
            const compania = await this.companiaRepositorio.findOneBy({ companiaId: companiaId.valueOf() })
            if (compania !== null) {
                LoggerAPI.info(`Se ha obtenido la campania con id ${companiaId}`)
                return compania
            } else {
                LoggerAPI.warn(`No se ha obtenido la compania con el id ${companiaId}`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error en la busqueda de compania por id error; ${error}`)
            throw error;
        }
    }
    /** 3
     * Metodo que obtiene una compañia por su UUID.
     *  
     */
    async getCompaniaByUuid(companiaUuid: String): Promise<Compania> {
        throw new Error("Method not implemented.");
    }
    /** 4
     * Metodo que agrega una nueva compañia.
     */
    async agregarCompania(compania: Compania): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Metodo que elimina una compañia por su ID.
     */
    async eliminarCompaniaById(companiaId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 6
     * Metodo que actualiza una compañia.
     */
    async actualizarCompania(compania: Compania): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}