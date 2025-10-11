
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
    agregarUsuarioCategoria(usuarioCategoria: UsuarioCategoria): Boolean {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para quitar una categoria al usuario
     */
    eliminarUsuarioCategoriaByID(usuarioCategoria: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar una categoria al usuario
     */
    actualizarUsuarioCategoria(usuarioCategoria: UsuarioCategoria): Boolean {
        throw new Error("Method not implemented.");
    }

}