import { Permiso } from "@entity/permiso.entity";
import {PermisoIDAO} from "@data.dao/permiso.dao"
export class PermisoDAO implements PermisoIDAO{
    getPermisos(): Permiso[] {
        throw new Error("Method not implemented.");
    }
    getPermisoByID(permisoID: Number): Permiso {
        throw new Error("Method not implemented.");
    }
    agregarPermiso(permiso: Permiso): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarPermisoByID(permisoID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarPermiso(permiso: Permiso): Boolean {
        throw new Error("Method not implemented.");
    }

}