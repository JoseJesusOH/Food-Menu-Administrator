import { Alimento } from "../../entities/alimento.entity";
import { AlimentoIDAO } from "../interfaces/alimento.dao";
export class AlimentoDAO implements AlimentoIDAO{
    getAlimentos(): Alimento[] {
        throw new Error("Method not implemented.");
    }
    getAlimentoById(alimentoId: Number): Alimento {
        throw new Error("Method not implemented.");
    }
    getAlimentByUuid(alimentoUuid: String): Alimento {
        throw new Error("Method not implemented.");
    }
    eliminarAlimentoById(alimentoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarAlimento(alimento: Alimento): boolean {
        throw new Error("Method not implemented.");
    }
    agregarAlimento(alimento: Alimento): Boolean {
        throw new Error("Method not implemented.");
    }
   
}