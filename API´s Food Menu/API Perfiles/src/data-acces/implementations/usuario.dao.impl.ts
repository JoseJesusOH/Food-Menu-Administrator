
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
        LoggerAPI.info("Se inicia el metodo para obtener usuario por ID en UsuarioDAO")
        try {
            let usuario = await this.usuarioRepositorio.findOneBy({ usuarioId: Number(usuarioId) });
            if (usuario) {
                LoggerAPI.info("Se encontro el usuario en el sistema")
                return usuario;
            }
            else {
                LoggerAPI.warn("No se encontro el usuario en el sistema")
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error en la consulta de usuario por ID en el sistema: " + error)
            throw error;
        }
    }

    async getUsuarioByUuid(usuarioUuid: String): Promise<Usuario> {
        LoggerAPI.info("Se inicia el metodo para obtener usuario por UUID en UsuarioDAO")
        try {
            let usuario = await this.usuarioRepositorio.findOneBy({ usuarioUuid: String(usuarioUuid) });
            if (usuario) {
                LoggerAPI.info("Se encontro el usuario en el sistema")
                return usuario;
            }
            else {
                LoggerAPI.warn("No se encontro el usuario en el sistema")
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error en la consulta de usuario por UUID en el sistema: " + error)
            throw error;
        }
    }

    /**
     * Metodo para agregar un Usuario 
     */
    async agregarUsuario(usuario: Usuario): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo para agregar usuario en UsuarioDAO")
        try {
            let nuevoUsuario = this.usuarioRepositorio.create(usuario);
             if (nuevoUsuario) {
                await this.usuarioRepositorio.save(nuevoUsuario);
                LoggerAPI.info("Se agrego el usuario en el sistema")
                return true;
            }
            else {
                LoggerAPI.warn("No se pudo agregar el usuario en el sistema")
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error en la insercion de usuario en el sistema: " + error)
            return false;
        }
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