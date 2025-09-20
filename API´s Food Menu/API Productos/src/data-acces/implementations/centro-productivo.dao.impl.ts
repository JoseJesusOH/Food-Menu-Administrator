/**
 * Implementacion de los metodos de la interfaz CentroProductivoIDAO
 */
import { CentroProductivo } from "@entity/centro-productivo.entity";
import { CentroProductivoIDAO } from "@data.dao/centro-productivo.dao";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
/**
 * Implementacion de los metodos de la interfaz CentroProductivoIDAO
 * 
 */
export class CentroProductivoDAO implements CentroProductivoIDAO{
     centroProductivoRepositorio = Conexion.getRepository(CentroProductivo);
    /** 1
     * Metodo para obtener todos los centros productivos
     */
    async getCentrosProductivos():  Promise<CentroProductivo[]> {
        LoggerAPI.info("Se inicia la busqueda de centros productivos")
        try{
            const centrosProductivos=await this.centroProductivoRepositorio.find();
            if(!centrosProductivos || centrosProductivos.length===0){
                LoggerAPI.warn(`No se han podido encontrar centros productivos`)
                return []
            }else{
                LoggerAPI.info(`Se han obtenido un total de ${centrosProductivos.length} centros productivos`)
                return centrosProductivos;
            }
        }catch(error){
            LoggerAPI.warn(`Se produjo error en la busqueda de centros productivos error; ${error}`)
            throw error;
        }
    }
    /** 2
     * Metodo para obtener un centro productivo por su ID
     */
    async getCentroProductivoById(centroProductivoId: Number): Promise< CentroProductivo> {
        LoggerAPI.info("Se procede a obtener el centro productivo por id DB")
        try{
            const centroProductivo=await this.centroProductivoRepositorio.findOneBy({centroProductivoId});
            if(centroProductivo!==null){
                LoggerAPI.info(`Se encontro el centro productivo con id ${centroProductivoId}`)
                return centroProductivo;
            }else{
                LoggerAPI.warn(`No se encontro el centro productivo con id ${centroProductivoId}`)
                return null;
            }
        }catch(error){
            LoggerAPI.warn(`Se produjo un error en la busqueda por id del centro productivo error; ${error}`)
            throw error;
        }
    }
    /** 3
     * Metodo para obtener un centro productivo por su UUID
     */
    async getCentroProductivoByUuid(centroProductivoUuid: String):  Promise<CentroProductivo> {
            LoggerAPI.info("Se procede a obtener el centro productivo por uuid DB")
        try{
            const centroProductivo=await this.centroProductivoRepositorio.findOneBy({centroProductivoUuid});
            if(centroProductivo!==null){
                LoggerAPI.info(`Se encontro el centro productivo con UUID ${centroProductivoUuid}`)
                return centroProductivo;
            }else{
                LoggerAPI.warn(`No se encontro el centro productivo con UUID ${centroProductivoUuid}`)
                return null;
            }
        }catch(error){
            LoggerAPI.warn(`Se produjo un error en la busqueda por UUID del centro productivo error; ${error}`)
            throw error;
        }
    }
    /** 4
     * Metodo para agregar un nuevo centro productivo
     */
    async agregarCentroProductivo(centroProductivo: CentroProductivo):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Metodo para actualizar un centro productivo
     */
    async actualizarCentroProductivo(centroProductivo: CentroProductivo):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 6
     * Metodo para eliminar un centro productivo por su ID
     */
    async eliminarCentroProductivoById(centroProductivoId: Number):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}