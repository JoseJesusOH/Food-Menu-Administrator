/**
 * Importaciones requeridas el modelo PermisoCategoria e interface PermisoCategoriaIDAO
 */
import { PermisoCategoria } from "@entity/permiso-categoria.entity";
import {PermisoCategoriaIDAO} from "@data.dao/permiso-categoria.dao"

/**
 * Implementacion del acceso a datos de PermisoCategoriaDAO
 */
export class PermisoCategoriaDAO implements PermisoCategoriaIDAO{
    /**
     * Metodo para obtener todos las relacionas de permisos con respecto a categoria
     */
    getPermisoCategorias(): PermisoCategoria[] {
        throw new Error("Method not implemented.");
    }
    /**
     * Obtiene las relacion con respecti al id 
     */
    getPermisoCategoriaByID(permisoCategoriaID: Number): PermisoCategoria {
        throw new Error("Method not implemented.");
    }

    /**
     * Agrega una nueva relación de permiso - categoria
     */
    agregarPermisoCategoria(permisoCategoria: PermisoCategoria): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Elimina un permiso categoria con respecto al id
     */
    eliminarPermisoCategoriaByID(permisoCategoriaID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Actualiza la relacion de permiso - categoria
     */
    actualizarPermisoCategoria(permisoCategoria: PermisoCategoria): Boolean {
        throw new Error("Method not implemented.");
    }
    
}