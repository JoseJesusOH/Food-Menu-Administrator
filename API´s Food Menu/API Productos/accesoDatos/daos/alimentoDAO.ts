import { Alimento } from "../../modelos/alimento";
import { AlimentoIDAO } from "../daoInterfaces/alimentoIDAO";
export class AlimentoDAO implements AlimentoIDAO{
    getAlimentos(): Alimento[] {
        throw new Error("Method not implemented.");
    }
    getAlimentoByID(alimentoID: Number): Alimento {
        throw new Error("Method not implemented.");
    }
    getAlimentByUUID(alimentoUUID: String): Alimento {
        throw new Error("Method not implemented.");
    }
    eliminarAlimentoByID(alimentoID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarAlimento(alimento: Alimento): boolean {
        throw new Error("Method not implemented.");
    }
    agregarAlimento(alimento: Alimento): Boolean {
        throw new Error("Method not implemented.");
    }
}