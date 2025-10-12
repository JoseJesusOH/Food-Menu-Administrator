
/**
 * Importaciones de los modelos respectivos e interface UsuarioCategoria e UsuarioCategoriaIDAO
 */
import { UsuarioCategoria } from "@entity/usuario-categoria.entity";
import {UsuarioCategoriaIDAO} from "@data.dao/usuario-categoria.dao"
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
/**
 * Implementación de UsuarioCateforiaDAO 
 */
export class UsuarioCategoriaDAO implements UsuarioCategoriaIDAO{
    usuarioCategoria=Conexion.getRepository(UsuarioCategoria);
    /**
     * Metodo para obtener las relaciones de usuario con respecto a categoria
     */
    async getUsuarioCategorias(): Promise<UsuarioCategoria[]> {
        LoggerAPI.info("Se inicia el metodo getUsuarioCategorias de la clase UsuarioCategoriaDAO");
        try {
            let result = await this.usuarioCategoria.find();
            if (result.length > 0) {
                LoggerAPI.info("Se encontraron relaciones de usuario con categoria en el sistema");
                return result;
            }
            else {
                LoggerAPI.info("No se encontraron relaciones de usuario con categoria en el sistema");
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener las relaciones de usuario con categoria del sistema: " + error);
            throw error;
        }
    }

    /**
     * Metodo para obtener la relación con el ID identificador
     */
    async getUsuarioCategoriaById(usuarioCategoriaId: Number): Promise<UsuarioCategoria> {
        LoggerAPI.info("Se inicia el metodo getUsuarioCategoriaById de la clase UsuarioCategoriaDAO");
        try {
            let result = await this.usuarioCategoria.findOneBy({ usuarioCategoriaId: Number(usuarioCategoriaId) });
            if (result) {
                LoggerAPI.info("Se encontro la relacion de usuario con categoria con id: " + usuarioCategoriaId);
                return result;
            }
            else {
                LoggerAPI.info("No se encontro la relacion de usuario con categoria con id: " + usuarioCategoriaId);
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener la relacion de usuario con categoria con id: " + usuarioCategoriaId + " - " + error);
            throw error;
        }
    }
    /**
     * Metodo para agregar una categoria al usuario
     */
    async agregarUsuarioCategoria(usuarioCategoria: UsuarioCategoria): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo agregarUsuarioCategoria de la clase UsuarioCategoriaDAO");
        try {
            let result = await this.usuarioCategoria.save(usuarioCategoria);
            if (result) {
                LoggerAPI.info("Se agrego la relacion de usuario con categoria correctamente");
                return true;
            }
            else {
                LoggerAPI.info("No se pudo agregar la relacion de usuario con categoria");
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al agregar la relacion de usuario con categoria: " + error);
            throw error;
        }
    }
    /**
     * Metodo para quitar una categoria al usuario
     */
    async eliminarUsuarioCategoriaByID(usuarioCategoria: Number): Promise<Boolean> {
         LoggerAPI.info("Se inicia el metodo eliminarUsuarioCategoriaByID de la clase UsuarioCategoriaDAO");
        try {
            let result = await this.usuarioCategoria.delete(usuarioCategoria);
            if (result.affected > 0) {
                LoggerAPI.info("Se elimino la relacion de usuario con categoria correctamente");
                return true;
            }
            else {
                LoggerAPI.info("No se pudo eliminar la relacion de usuario con categoria");
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar la relacion de usuario con categoria: " + error);
            throw error;
        }
    }

    /**
     * Metodo para actualizar una categoria al usuario
     */
    actualizarUsuarioCategoria(usuarioCategoria: UsuarioCategoria): Boolean {
        throw new Error("Method not implemented.");
    }

}