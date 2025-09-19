/**
 * Importaciones de entidades y interfaces necesarias Alimento y AlimentoIDAO
 */
import { Alimento } from "@entity/alimento.entity";
import { AlimentoIDAO } from "@data.dao/alimento.dao";
import {Conexion} from "@utility/conexion"
export class AlimentoDAO implements AlimentoIDAO{
    /** 1
     * Metodo que retorna un arreglo de alimentos
     */
    async  getAlimentos(): Promise<Alimento[]> {
        const alimentoRepositorio=Conexion.getRepository(Alimento);
        return alimentoRepositorio.find();
    }
    /** 2
     * Metodo que retorna un alimento por su ID
     */
    async getAlimentoById(alimentoId: Number): Promise<Alimento> {
                 const alimentoRepositorio=Conexion.getRepository(Alimento);
        return alimentoRepositorio.findOneBy({
           alimentoId:alimentoId.valueOf()
        });
    }
    /** 3
     * Metodo que retorna un alimento por su UUID
     */
    async     getAlimentByUuid(alimentoUuid: String): Promise<Alimento> {
        throw new Error("Method not implemented.");
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
    async agregarAlimento(alimento: Alimento): Promise<Boolean>{
        throw new Error("Method not implemented.");
    }
   
   
}