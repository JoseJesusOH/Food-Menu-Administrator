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
        const alimentoRepositorio = Conexion.getRepository(Alimento);
        return alimentoRepositorio.findOneBy({
            alimentoId: alimentoId.valueOf()
        });
    }
    /** 3
     * Metodo que retorna un alimento por su UUID
     */
    async getAlimentByUuid(alimentoUuid: String): Promise<Alimento> {
        const alimentoRepositorio = Conexion.getRepository(Alimento);
        return alimentoRepositorio.findOneBy({
            alimentoUuid: alimentoUuid.valueOf()
        });
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
        const alimentoRepositorio = Conexion.getRepository(Alimento);
        return (await alimentoRepositorio.insert(alimento)).identifiers.length > 0
    }


}