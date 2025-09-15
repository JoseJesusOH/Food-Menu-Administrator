/**
 * Importacion de la entidad Permiso
 */
import {Permiso} from "@entity/permiso.entity"
/** 
 * Interface que define los metodos del DAO de Permiso
 */
export interface PermisoIDAO{
    /**
     * Metodo para obtener todos los permisos
     * @return Array de permisos
     */
    getPermisos():Permiso[];

     /**
      *  Metodo para obtener un permiso por su ID
      * @param permisoID ID del permiso a buscar
      * @return Permiso encontrado
      */
    getPermisoByID(permisoID:Number):Permiso;

    /**
     * Metodo para agregar un permiso
     * @param permiso Permiso a agregar
     * @return Booleano que indica si se agrego el permiso
     */
    agregarPermiso(permiso:Permiso):Boolean;

    /**
     * Metodo para eliminar un permiso por su ID
     * @param permisoID ID del permiso a eliminar
     * @return Booleano que indica si se elimino el permiso
     */
    eliminarPermisoByID(permisoID:Number):Boolean;
    
    /**
     * Metodo para actualizar un permiso
     * @param permiso Permiso a actualizar
     * @return Booleano que indica si se actualizo el permiso
     */
    actualizarPermiso(permiso:Permiso):Boolean;
}