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
    async getCompanias():  Promise<Compania[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene una compañia por su ID.
     */
    async getCompaniaById(companiaID: Number):  Promise<Compania> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene una compañia por su UUID.
     *  
     */
    async getCompaniaByUuid(companiaUuid: String):  Promise<Compania> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que agrega una nueva compañia.
     */
    async agregarCompania(compania: Compania):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que elimina una compañia por su ID.
     */
    async eliminarCompaniaById(companiaId: Number):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo que elimina una compañia por su UUID.
     */
    async eliminarCompaniaByUuid(companiaUuid: String):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo que actualiza una compañia.
     */
    async actualizarCompania(compania: Compania):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}