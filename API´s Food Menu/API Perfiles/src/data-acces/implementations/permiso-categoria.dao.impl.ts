/**
 * Importaciones requeridas el modelo PermisoCategoria e interface PermisoCategoriaIDAO
 */
import { PermisoCategoria } from "@entity/permiso-categoria.entity";
import {PermisoCategoriaIDAO} from "@data.dao/permiso-categoria.dao"
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Implementacion del acceso a datos de PermisoCategoriaDAO
 */
export class PermisoCategoriaDAO implements PermisoCategoriaIDAO{
     permisoCategoriaRepository=Conexion.getRepository(PermisoCategoria);
    /**
     * Metodo para obtener todos las relacionas de permisos con respecto a categoria
     */
    async getPermisoCategorias(): Promise<PermisoCategoria[]> {
        LoggerAPI.info("Inicio - getPermisoCategorias - PermisoCategoriaDAO");
        try {
            let permisosCategorias: PermisoCategoria[] = await this.permisoCategoriaRepository.find(); 
            if(permisosCategorias.length === 0){  
                LoggerAPI.warn("No se encontraron permisos categorias - getPermisoCategorias - PermisoCategoriaDAO");
             return [];
            }
            else{
                LoggerAPI.info("Fin - getPermisoCategorias - PermisoCategoriaDAO");
                return permisosCategorias;
            }
        } catch (error) {
            LoggerAPI.error("Error - getPermisoCategorias - PermisoCategoriaDAO", error);
            throw new Error("Error al obtener los permisos categorias");
        }
    }
    /**
     * Obtiene las relacion con respecti al id 
     */
    async getPermisoCategoriaByID(permisoCategoriaID: Number): Promise<PermisoCategoria> {
        LoggerAPI.info("Inicio - getPermisoCategoriaByID - PermisoCategoriaDAO");
        try {
            let permisoCategoria: PermisoCategoria | null = await this.permisoCategoriaRepository.findOneBy({id: Number(permisoCategoriaID)});
            if(permisoCategoria === null){
                LoggerAPI.warn("No se encontro el permiso categoria con el id proporcionado - getPermisoCategoriaByID - PermisoCategoriaDAO");
                return null;
            }
            else{
                LoggerAPI.info("Fin - getPermisoCategoriaByID - PermisoCategoriaDAO");
                return permisoCategoria;
            }
        } catch (error) {
            LoggerAPI.error("Error - getPermisoCategoriaByID - PermisoCategoriaDAO", error);
            throw new Error("Error al obtener el permiso categoria con el id proporcionado");
        }
    }

    /**
     * Agrega una nueva relación de permiso - categoria
     */
    async agregarPermisoCategoria(permisoCategoria: PermisoCategoria): Promise<Boolean> {
          
        LoggerAPI.info("Inicio - agregarPermisoCategoria - PermisoCategoriaDAO");
        try {
            let result = await this.permisoCategoriaRepository.save(permisoCategoria);
            if(result){
                LoggerAPI.info("Fin - agregarPermisoCategoria - PermisoCategoriaDAO");
                return true;
            }
            else{
                LoggerAPI.warn("No se pudo agregar el permiso categoria - agregarPermisoCategoria - PermisoCategoriaDAO");
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error - agregarPermisoCategoria - PermisoCategoriaDAO", error);
            throw new Error("Error al agregar el permiso categoria");
        }
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