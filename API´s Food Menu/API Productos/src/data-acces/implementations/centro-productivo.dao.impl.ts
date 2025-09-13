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
    getCentrosProductivos(): CentroProductivo[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener un centro productivo por su ID
     */
    getCentroProductivoById(centroProductivoId: Number): CentroProductivo {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para obtener un centro productivo por su UUID
     */
    getCentroProductivoByUuid(centroProductivoUuid: String): CentroProductivo {
        throw new Error("Method not implemented.");
    }
    
    /**
     * Metodo para agregar un nuevo centro productivo
     */
    agregarCentroProductivo(centroProductivo: CentroProductivo): Boolean {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para actualizar un centro productivo
     */
    actualizarCentroProductivo(centroProductivo: CentroProductivo): Boolean {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para eliminar un centro productivo por su ID
     */
    eliminarCentroProductivoById(centroProductivoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
}