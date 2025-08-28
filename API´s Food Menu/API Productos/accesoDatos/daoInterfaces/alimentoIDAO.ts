import { Alimento } from "../../modelos/Alimento"
export interface AlimentoIDAO {
    getAlimentos(): Alimento[];
    getAlimentoByID(alimentoID: Number): Alimento;
    getAlimentByUUID(alimentoUUID: String): Alimento;
    eliminarAlimentoByID(alimentoID: Number): Boolean;
    actualizarAlimento(alimento: Alimento): boolean;
    agregarAlimento(alimento: Alimento): Boolean;
}