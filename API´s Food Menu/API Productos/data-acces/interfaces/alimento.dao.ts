import { Alimento } from "../../modelos/alimento"

export interface AlimentoIDAO {
    getAlimentos(): Alimento[];
    getAlimentoById(alimentoId: Number): Alimento;
    getAlimentByUuid(alimentoUuid: String): Alimento;
    eliminarAlimentoById(alimentoId: Number): Boolean;
    actualizarAlimento(alimento: Alimento): boolean;
    agregarAlimento(alimento: Alimento): Boolean;
}