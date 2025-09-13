import {Permiso} from "../../modelos/permiso"
export interface PermisoIDAO{
    getPermisos():Permiso[];
    getPermisoByID(permisoID:Number):Permiso;
    agregarPermiso(permiso:Permiso):Boolean;
    eliminarPermisoByID(permisoID:Number):Boolean;
    actualizarPermiso(permiso:Permiso):Boolean;
}