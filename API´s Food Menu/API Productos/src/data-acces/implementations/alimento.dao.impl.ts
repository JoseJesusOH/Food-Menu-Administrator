/**
 * Importaciones de entidades y interfaces necesarias Alimento y AlimentoIDAO
 */
import { Alimento } from "@entity/alimento.entity";
import { AlimentoIDAO } from "@data.dao/alimento.dao";
import {Conexion} from "@utility/conexion"
export class AlimentoDAO implements AlimentoIDAO{
    /**
     * Metodo que retorna un arreglo de alimentos
     */
    async  getAlimentos(): Promise<Alimento[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que retorna un alimento por su ID
     */
    async getAlimentoById(alimentoId: Number): Promise<Alimento> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que retorna un alimento por su UUID
     */
    async     getAlimentByUuid(alimentoUuid: String): Promise<Alimento> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que elimina un alimento por su ID
     */
    async eliminarAlimentoById(alimentoId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que actualiza un alimento
     */
    async actualizarAlimento(alimento: Alimento): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que agrega un alimento
     */
    async agregarAlimento(alimento: Alimento): Promise<Boolean>{
        throw new Error("Method not implemented.");
    }
   
   
}