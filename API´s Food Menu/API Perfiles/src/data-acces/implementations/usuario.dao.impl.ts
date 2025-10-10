
/**
 * Importaciones del los modelos respectivos e interface Usuario y UsuarioIDAO 
 */
import { Usuario } from "@entity/usuario.entity";
import { UsuarioIDAO } from "@data.dao/usuario.dao";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
/**
 * Implementacion corrrespondiente del acceso a datos de usuario
 */
export class UsuarioDAO implements UsuarioIDAO {

    usuarioRepositorio = Conexion.getRepository(Usuario);
    /**
     * Metodo para obtener la lista de usuarios del sistema
     */
    async getUsuarios(): Promise<Usuario[]> {
        LoggerAPI.info("Se inicia el metodo para obtener usuario en UsuarioDAO")
        try {
            let usuario = await this.usuarioRepositorio.find();
            if (usuario.length > 0) {
                LoggerAPI.info("Se encontraron usuarios en el sistema")
                return usuario;
            } else {
                LoggerAPI.warn("No se encontraron usuarios en el sistema")
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error en la consulta de usuarios en el sistema: " + error)
            throw error;
        }
    }

    /**
     * Metodo para obtener determinado usuario del sistema por ID
     */
    async getUsuarioById(usuarioId: Number): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

    async getUsuarioByUuid(usuarioUuid: String): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar un Usuario 
     */
    async agregarUsuario(usuario: Usuario): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar un usuario del sistema por su id respectivo
     */
    async eliminarUsuarioById(usuarioID: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para la actualización de usuario.
     */
    async actualizarUsuario(usuario: Usuario): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}