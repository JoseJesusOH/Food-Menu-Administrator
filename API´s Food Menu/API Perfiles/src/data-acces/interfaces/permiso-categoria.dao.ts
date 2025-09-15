/**
 * Importacion de entidad PermisoCategoria
 */

import { PermisoCategoria } from "@entity/permiso-categoria.entity"

/**
 * Interfaz que define las operaciones de acceso a datos para la entidad PermisoCategoria
 */
export interface PermisoCategoriaIDAO {
    /**
     * Método para obtener todos los PermisoCategorias
     * @return Un arreglo de objetos PermisoCategoria
     */
    getPermisoCategorias(): PermisoCategoria[];

    /**
     * Método para obtener un PermisoCategoria por su ID
     * @param permisoCategoriaID ID del PermisoCategoria a buscar
     * @return Un objeto PermisoCategoria si se encuentra, de lo contrario retorna null
     */
    getPermisoCategoriaByID(permisoCategoriaID: Number): PermisoCategoria;

    /** 
     * 
     * Método para agregar un nuevo PermisoCategoria
     * @param permisoCategoria Objeto PermisoCategoria a agregar
     * @return true si la operación fue exitosa, de lo contrario false
     */
    agregarPermisoCategoria(permisoCategoria: PermisoCategoria): Boolean;

    /** 
     * 
     * Método para eliminar un PermisoCategoria por su ID
     * @param permisoCategoriaID ID del PermisoCategoria a eliminar
     * @return true si la operación fue exitosa, de lo contrario false
     */
    eliminarPermisoCategoriaByID(permisoCategoriaID: Number): Boolean;

    /** 
     * 
     * Método para actualizar un PermisoCategoria existente
     * @param permisoCategoria Objeto PermisoCategoria con los datos actualizados
     * @return true si la operación fue exitosa, de lo contrario false
     */
    actualizarPermisoCategoria(permisoCategoria: PermisoCategoria): Boolean
}