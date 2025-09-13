import {PermisoCategoria} from "../../modelos/permisoCategoria"
export interface PermisoCategoriaIDAO {
    getPermisoCategorias():PermisoCategoria[];
    getPermisoCategoriaByID(permisoCategoriaID:Number):PermisoCategoria;
    agregarPermisoCategoria(permisoCategoria: PermisoCategoria):Boolean;
    eliminarPermisoCategoriaByID(permisoCategoriaID:Number):Boolean;
    actualizarPermisoCategoria(permisoCategoria:PermisoCategoria): Boolean
}