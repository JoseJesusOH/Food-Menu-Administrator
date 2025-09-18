/**
 * Implementacion de los metodos de la interfaz CentroProductivoIDAO
 */
import { CentroProductivo } from "@entity/centro-productivo.entity";
import { CentroProductivoIDAO } from "@data.dao/centro-productivo.dao";
/**
 * Implementacion de los metodos de la interfaz CentroProductivoIDAO
 * 
 */
export class CentroProductivoDAO implements CentroProductivoIDAO{
 
    /**
     * Metodo para obtener todos los centros productivos
     */
    async getCentrosProductivos():  Promise<CentroProductivo[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener un centro productivo por su ID
     */
    async getCentroProductivoById(centroProductivoId: Number): Promise< CentroProductivo> {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para obtener un centro productivo por su UUID
     */
    async getCentroProductivoByUuid(centroProductivoUuid: String):  Promise<CentroProductivo> {
        throw new Error("Method not implemented.");
    }
    
    /**
     * Metodo para agregar un nuevo centro productivo
     */
    async agregarCentroProductivo(centroProductivo: CentroProductivo):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para actualizar un centro productivo
     */
    async actualizarCentroProductivo(centroProductivo: CentroProductivo):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para eliminar un centro productivo por su ID
     */
    async eliminarCentroProductivoById(centroProductivoId: Number):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}