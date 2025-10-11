/**
 * Importaciones requeridas del acceso a datos el modelo Permiso e interface PermisoIDAO
 */
import { Permiso } from "@entity/permiso.entity";
import { PermisoIDAO } from "@data.dao/permiso.dao"
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
/**
 * Clase de acceso a datos del modelo permiso
 */
export class PermisoDAO implements PermisoIDAO {
    permisoRepositorio = Conexion.getRepository(Permiso);
    /**
     * Metodo para obtener los permisos del sistema
     */
    async getPermisos(): Promise<Permiso[]> {
        LoggerAPI.info("Se inicia el metodo getPermisos de la clase PermisoDAO");
        try {
            let result = await this.permisoRepositorio.find();
            if (result.length > 0) {
                LoggerAPI.info("Se encontraron permisos en el sistema");
                return result;
            } else {
                LoggerAPI.info("No se encontraron permisos en el sistema");
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener los permisos del sistema: " + error);
            throw error;
        }
    }

    /**
     * Metodo para obtener el permiso del sistema por su id respectivo
     */
    async getPermisoById(permisoId: Number): Promise<Permiso> {
        LoggerAPI.info("Se inicia el metodo getPermisoById de la clase PermisoDAO");
        try {
            let result = await this.permisoRepositorio.findOneBy({ permisoId: Number(permisoId) });
            if (result) {
                LoggerAPI.info("Se encontro el permiso con id: " + permisoId);
                return result;
            }
            else {
                LoggerAPI.info("No se encontro el permiso con id: " + permisoId);
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el permiso con id: " + permisoId + " - " + error);
            throw error;
        }
    }

    /**
     * Metodo para agregar un permiso al sistema
     */
    async agregarPermiso(permiso: Permiso): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo agregarPermiso de la clase PermisoDAO");
        try {
            let permisoNuevo = await this.permisoRepositorio.insert(permiso);
            if (permisoNuevo) {
                LoggerAPI.info("Se agrego el permiso correctamente");
                return true;
            } else {
                LoggerAPI.info("No se pudo agregar el permiso");
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al agregar el permiso: " + error);
            throw error;
        }
    }

    /**
     * Metodo para eliminar el permiso por id del mismo
     */
    eliminarPermisoByID(permisoID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar un permiso del sistema
     */
    actualizarPermiso(permiso: Permiso): Boolean {
        throw new Error("Method not implemented.");
    }

}