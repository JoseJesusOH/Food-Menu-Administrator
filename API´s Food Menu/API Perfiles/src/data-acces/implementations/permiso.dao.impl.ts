/**
 * Importaciones requeridas del acceso a datos el modelo Permiso e interface PermisoIDAO
 */
import { Permiso } from "@entity/permiso.entity";
import {PermisoIDAO} from "@data.dao/permiso.dao"
/**
 * Clase de acceso a datos del modelo permiso
 */
export class PermisoDAO implements PermisoIDAO{

    /**
     * Metodo para obtener los permisos del sistema
     */
    getPermisos(): Permiso[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener el permiso del sistema por su id respectivo
     */
    getPermisoByID(permisoID: Number): Permiso {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar un permiso al sistema
     */
    agregarPermiso(permiso: Permiso): Boolean {
        throw new Error("Method not implemented.");
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