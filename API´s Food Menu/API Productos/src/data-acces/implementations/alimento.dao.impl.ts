/**
 * Importaciones de entidades y interfaces necesarias Alimento y AlimentoIDAO
 */
import { Alimento } from "@entity/alimento.entity";
import { AlimentoIDAO } from "@data.dao/alimento.dao";
import { Conexion } from "@utility/conexion"
import { LoggerAPI } from "@utility/logger";
export class AlimentoDAO implements AlimentoIDAO {
    alimentoRepositorio = Conexion.getRepository(Alimento);
    /** 1
     * Metodo que retorna un arreglo de alimentos
     */
    async getAlimentos(): Promise<Alimento[]> {
        LoggerAPI.info("Se inicia la busqueda de alimentos de DB")
        try{
            const alimentos=await this.alimentoRepositorio.find();
            if(!alimentos || alimentos.length===0){
                LoggerAPI.warn("No se han encontrado alimentos en el sistema")
                return [];
            }else{
                LoggerAPI.info(`Se han obtenido las alimentos exitosamente un total de ${alimentos.length}`)
                return alimentos;
            }
        }catch(error){
            LoggerAPI.warn(`Error al obtenr los alimentos error: ${error}`)
            throw error;
        }
    }
    /** 2
     * Metodo que retorna un alimento por su ID
     */
    async getAlimentoById(alimentoId: Number): Promise<Alimento> {
        LoggerAPI.info("Se inicia la obtencion del alimento por el id del mismo")
        try{
            const alimento=await this.alimentoRepositorio.findOneBy({alimentoId:alimentoId.valueOf()})
            if(alimento!==null){
                LoggerAPI.info(`Se ha obtenido el alimento con ID ${alimentoId}`)
                return alimento;
            }else{
                LoggerAPI.warn(`No se ha obtenido un alimento con el id ${alimentoId}`)
                return null;
            }
        }catch(error){
            LoggerAPI.warn(`Error en la busqueda por id de alimento error; ${error}`)
            throw error;
        }
    }
    /** 3
     * Metodo que retorna un alimento por su UUID
     */
    async getAlimentByUuid(alimentoUuid: String): Promise<Alimento> {
      LoggerAPI.info("Se inicia la obtencion del alimento por el id del mismo")
        try{
            const alimento=await this.alimentoRepositorio.findOneBy({alimentoUuid:alimentoUuid.valueOf()})
            if(alimento!==null){
                LoggerAPI.info(`Se ha obtenido el alimento con UUID ${alimentoUuid}`)
                return alimento;
            }else{
                LoggerAPI.warn(`No se ha obtenido un alimento con el UUID ${alimentoUuid}`)
                return null;
            }
        }catch(error){
            LoggerAPI.warn(`Error en la busqueda por uuid de alimento error; ${error}`)
            throw error;
        }
    }
    /** 4
     * Metodo que elimina un alimento por su ID
     */
    async eliminarAlimentoById(alimentoId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Metodo que actualiza un alimento
     */
    async actualizarAlimento(alimento: Alimento): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 6
     * Metodo que agrega un alimento
     */
    async agregarAlimento(alimento: Alimento): Promise<Boolean> {
        LoggerAPI.info("Iniciando operación para agregar un alimento")
        try{
            const resultado=await this.alimentoRepositorio.insert(alimento);
            if(resultado.identifiers.length>0){
                LoggerAPI.info("Se ha agregado el alimento exitosamente")
                return new Boolean(true);
            }else{
                LoggerAPI.warn("No se ha podido agregar el alimento ")
                return new Boolean(false)
            }
        }catch(error){
            LoggerAPI.warn(`Se produjo error en operacion de agregar alimento error: ${error}`)
            throw error;
        }
    }


}