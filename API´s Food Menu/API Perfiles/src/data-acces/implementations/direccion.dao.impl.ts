/**
 * Importaciones requeridas del sistema el modelo Direccion y la interface DireccionIDAO
 */
import { Direccion } from "@entity/direccion.entity"
import {DireccionIDAO} from "@data.dao/direccion.dao"

/**
 * Implementación correspondiente al acceso a datos de Direccion
 */
export class DireccionDAO implements DireccionIDAO{

    /**
     * Metodo para obtener todas las direcciones del sistema
     */
    getDirecciones(): Direccion[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener la direccion por id
     */
    getDireccionByID(direccionID: Number): Direccion {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar una direccion
     */
    agregarDireccion(direccion: Direccion): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar una direccion
     */
    eliminarDireccion(direccionID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar una direccion
     */
    actualizarDireccion(direccion: Direccion): Boolean {
        throw new Error("Method not implemented.");
    }
    
}