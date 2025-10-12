/**
 * Importaciones requeridas del sistema el modelo Direccion y la interface DireccionIDAO
 */
import { Direccion } from "@entity/direccion.entity"
import { DireccionIDAO } from "@data.dao/direccion.dao"
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Implementación correspondiente al acceso a datos de Direccion
 */
export class DireccionDAO implements DireccionIDAO {
    direccionRepiositorio = Conexion.getRepository(Direccion)
    /**
     * Metodo para obtener todas las direcciones del sistema
     */
    async getDirecciones(): Promise<Direccion[]> {
        LoggerAPI.info("Se inicia el metodo para obtener todas las direcciones en DB")
        try {
            const resultados = await this.direccionRepiositorio.find();
            if (resultados.length > 0) {
                LoggerAPI.info(`Se han encontrado un total de ${resultados.length} direcciones`)
                return resultados;
            } else {
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
    async getDireccionById(direccionId: Number): Promise<Direccion> {
        LoggerAPI.info("Se inicia el metodo para obtener direccion por ID")
        try {
            const resultado = await this.direccionRepiositorio.findOneBy({ direccionId });
            if (resultado !== null) {
                LoggerAPI.info(`Se ha encontrado la direccion con el ID ${direccionId}`)
                return resultado;
            } else {
                LoggerAPI.warn(`No se ha encontrado la direccion con ID ${direccionId}`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al buscar la direccion por ID del sistema ${error}`)
            throw error;
        }
    }
    /**
     * Metodo para obtener la direccion por UUID
     */
    async getDireccionByUuid(direccionUuid: String): Promise<Direccion> {
        LoggerAPI.info("Se inicia el metodo para obtener direccion por UUID")
        try {
            const resultado = await this.direccionRepiositorio.findOneBy({ direccionUuid });
            if (resultado !== null) {
                LoggerAPI.info(`Se ha encontrado la direccion con UUID ${direccionUuid}`)
                return resultado;
            } else {
                LoggerAPI.warn(`No se ha encontrado la direccion con UUID ${direccionUuid}`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al buscar la direccion por UUID del sistema ${error}`)
            throw error;
        }
    }
    /**
     * Metodo para agregar una direccion
     */
    async agregarDireccion(direccion: Direccion): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo para agregar una direccion en DB")
        try {
            const resultado = await this.direccionRepiositorio.insert(direccion);
            if (resultado.identifiers.length > 0) {
                LoggerAPI.info("Se ha ingresado la direccion exitosamente.")
                return new Boolean(true)
            } else {
                LoggerAPI.warn("No sse ha podido ingresar la direccion en DB")
                return new Boolean(false)
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al agregar la direccion error; ${error}`)
            throw error;
        }
    }

    /**
     * Metodo para eliminar una direccion
     */
    async eliminarDireccion(direccionId: Number): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo para eliminar una direccion en DB")
        try {
            const resultado = await this.direccionRepiositorio.delete({ direccionId });
            if (resultado.affected > 0) {
                LoggerAPI.info("Se ha eliminado la direccion exitosamente.")
                return new Boolean(true)
            } else {
                LoggerAPI.warn("No sse ha podido eliminar la direccion en DB")
                return new Boolean(false)
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al eliminar la direccion error; ${error}`)
            throw error;
        }
    }

    /**
     * Metodo para actualizar una direccion
     */
    async actualizarDireccion(direccion: Direccion): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo para actualizar una direccion en DB")
        try {
            const resultado = await this.direccionRepiositorio.update({ direccionId: direccion.direccionId }, direccion);
            if (resultado.affected > 0) {
                LoggerAPI.info("Se ha actualizado la direccion exitosamente.")
                return new Boolean(true)
            }
            else {
                LoggerAPI.warn("No sse ha podido actualizar la direccion en DB")
                return new Boolean(false)
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al actualizar la direccion error; ${error}`)
            throw error;
        }
    }

}