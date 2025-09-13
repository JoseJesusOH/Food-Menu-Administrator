/**
 * Importaciones requeridas para la implementación del DAO de Compañía.
 */
import { Compania } from "@entity/compania.entity";
import { CompaniaIDAO } from "@data.dao/compania.dao";

/**
 * Implementación del DAO de Compañía.
 */
export class CompaniaDAO implements CompaniaIDAO {
    /**
     * Metodo que obtiene todas las compañias.
     */
    getCompanias(): Compania[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene una compañia por su ID.
     */
    getCompaniaById(companiaID: Number): Compania {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene una compañia por su UUID.
     *  
     */
    getCompaniaByUuid(companiaUuid: String): Compania {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que agrega una nueva compañia.
     */
    agregarCompania(compania: Compania): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que elimina una compañia por su ID.
     */
    eliminarCompaniaById(companiaId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo que elimina una compañia por su UUID.
     */
    eliminarCompaniaByUuid(companiaUuid: String): Boolean {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo que actualiza una compañia.
     */
    actualizarCompania(compania: Compania): Boolean {
        throw new Error("Method not implemented.");
    }

}