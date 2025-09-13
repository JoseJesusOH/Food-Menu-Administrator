/**
 * Importaciones de entidades y interfaces necesarias Alimento y AlimentoIDAO
 */
import { Alimento } from "@entity/alimento.entity";
import { AlimentoIDAO } from "@data.dao/alimento.dao";
export class AlimentoDAO implements AlimentoIDAO{
    /**
     * Metodo que retorna un arreglo de alimentos
     */
    getAlimentos(): Alimento[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que retorna un alimento por su ID
     */
    getAlimentoById(alimentoId: Number): Alimento {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que retorna un alimento por su UUID
     */
    getAlimentByUuid(alimentoUuid: String): Alimento {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que elimina un alimento por su ID
     */
    eliminarAlimentoById(alimentoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que actualiza un alimento
     */
    actualizarAlimento(alimento: Alimento): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que agrega un alimento
     */
    agregarAlimento(alimento: Alimento): Boolean {
        throw new Error("Method not implemented.");
    }
   
   
}