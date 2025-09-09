import { Compania } from "../../modelos/compania";
import { CompaniaIDAO } from "../interfaces/compania.dao";

export class CompaniaDAO implements CompaniaIDAO{
    getCompanias(): Compania[] {
        throw new Error("Method not implemented.");
    }
    getCompaniaById(companiaID: Number): Compania {
        throw new Error("Method not implemented.");
    }
    getCompaniaByUuid(companiaUuid: String): Compania {
        throw new Error("Method not implemented.");
    }
    agregarCompania(compania: Compania): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarCompaniaById(companiaId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarCompania(compania: Compania): Boolean {
        throw new Error("Method not implemented.");
    }
	
}