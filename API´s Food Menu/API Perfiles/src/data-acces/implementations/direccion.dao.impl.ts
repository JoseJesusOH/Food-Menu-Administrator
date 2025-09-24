/**
 * Importaciones requeridas del sistema el modelo Direccion y la interface DireccionIDAO
 */
import { Direccion } from "@entity/direccion.entity"
import {DireccionIDAO} from "@data.dao/direccion.dao"
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Implementación correspondiente al acceso a datos de Direccion
 */
export class DireccionDAO implements DireccionIDAO{
     direccionRepiositorio=Conexion.getRepository(Direccion)
    /**
     * Metodo para obtener todas las direcciones del sistema
     */
    async getDirecciones(): Promise<Direccion[]> {
        LoggerAPI.info("Se inicia el metodo para obtener todas las direcciones en DB")
        try {
            const resultados = await this.direccionRepiositorio.find();
            if(resultados.length>0){
                LoggerAPI.info(`Se han encontrado un total de ${resultados.length} direcciones`)
                return resultados;
            }else{
                LoggerAPI.warn("No se han encontrado direcciones en DB")
                return []
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Metodo para obtener la direccion por id
     */
    getDireccionById(direccionId: Number): Promise<Direccion> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar una direccion
     */
    agregarDireccion(direccion: Direccion): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar una direccion
     */
    async eliminarDireccion(direccionId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar una direccion
     */
    actualizarDireccion(direccion: Direccion): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}