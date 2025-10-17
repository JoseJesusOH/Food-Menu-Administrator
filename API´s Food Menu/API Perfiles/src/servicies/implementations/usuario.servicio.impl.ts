// Interfaz del DAO para operaciones de usuario
import { UsuarioIDAO } from "@data.dao/usuario.dao";
// Implementación concreta del DAO de usuario
import { UsuarioDAO } from "@data.impl/usuario.dao.impl";
// DTO que representa los datos de un usuario
import { UsuarioDTO } from "@dto/usuario.dto";
// Interfaz de servicio que define los métodos del servicio de usuario
import { UsuarioIServicio } from "servicies/interfaces/usuario.servicio";
// Logger para registrar información, advertencias y errores
import { LoggerAPI } from "@utility/logger";
// Entidad Usuario para persistencia en base de datos
import { Usuario } from "@entity/usuario.entity";
// Utilidad para convertir objetos planos en instancias de clase
import { plainToInstance } from "class-transformer";

/**
 * Servicio que implementa las operaciones del sistema para la gestión de usuarios
 */
export class UsuarioServicio implements UsuarioIServicio {
    // DAO encargado de la persistencia de usuarios
    usuarioDAO: UsuarioIDAO = new UsuarioDAO();

    // Obtiene todos los usuarios registrados en el sistema
    async getUsuarios(): Promise<UsuarioDTO[]> {
        LoggerAPI.info("Se inicia el método para obtener los usuarios en UsuarioServicio");
        try {
            let resultado = await this.usuarioDAO.getUsuarios();

            if (resultado.length > 0) {
                LoggerAPI.info(`Se han encontrado un total de ${resultado.length} usuarios`);
                return resultado;
            } else {
                LoggerAPI.warn("No se han encontrado usuarios registrados");
                return [];
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener los usuarios en UsuarioServicio; ${error}`);
            return [];
        }
    }

    // Obtiene un usuario por su ID
    async getUsuarioById(usuarioId: Number): Promise<UsuarioDTO> {
        LoggerAPI.info(`Se inicia el método para obtener el usuario con ID: ${usuarioId} en UsuarioServicio`);
        try {
            let resultado = await this.usuarioDAO.getUsuarioById(usuarioId);

            if (resultado) {
                LoggerAPI.info(`Se ha encontrado el usuario con ID ${usuarioId}`);
                return resultado;
            } else {
                LoggerAPI.warn(`No se ha encontrado ningún usuario con el ID ${usuarioId}`);
                return new UsuarioDTO();
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener el usuario con ID ${usuarioId} en UsuarioServicio; ${error}`);
            return new UsuarioDTO();
        }
    }

    // Obtiene un usuario por su UUID
    async getUsuarioByUuid(usuarioUuid: String): Promise<UsuarioDTO> {
        LoggerAPI.info(`Se inicia el método para obtener el usuario con UUID: ${usuarioUuid} en UsuarioServicio`);
        try {
            let resultado = await this.usuarioDAO.getUsuarioByUuid(usuarioUuid);

            if (resultado) {
                LoggerAPI.info(`Se ha encontrado el usuario con UUID ${usuarioUuid}`);
                return resultado;
            } else {
                LoggerAPI.warn(`No se ha encontrado ningún usuario con el UUID ${usuarioUuid}`);
                return new UsuarioDTO();
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener el usuario con UUID ${usuarioUuid} en UsuarioServicio; ${error}`);
            return new UsuarioDTO();
        }
    }

    // Agrega un nuevo usuario al sistema
    async agregarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el método para agregar un usuario en UsuarioServicio");
        try {
            let usuario = plainToInstance(Usuario, usuarioDTO);
            let resultado = await this.usuarioDAO.agregarUsuario(usuario);

            if (resultado) {
                LoggerAPI.info("El usuario ha sido agregado exitosamente");
                return true;
            } else {
                LoggerAPI.warn("No se ha podido agregar el usuario");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al agregar el usuario en UsuarioServicio; ${error}`);
            throw error;
        }
    }

    // Elimina un usuario por su UUID
    async eliminarUsuarioByUuid(usuarioUuid: String): Promise<Boolean> {
        LoggerAPI.info(`Se inicia el método para eliminar el usuario con UUID: ${usuarioUuid} en UsuarioServicio`);
        try {
             let usuario = await this.usuarioDAO.getUsuarioByUuid(usuarioUuid);
             if(usuario===null){
                LoggerAPI.warn(`No se ha encontrado un usuario con UUID ${usuarioUuid}`)
                return null;
             }
            let resultado = await this.usuarioDAO.eliminarUsuarioById(usuario.usuarioId);

            if (resultado) {
                LoggerAPI.info(`El usuario con UUID ${usuarioUuid} ha sido eliminado exitosamente`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo eliminar el usuario con UUID ${usuarioUuid}`);
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al eliminar el usuario con UUID ${usuarioUuid} en UsuarioServicio; ${error}`);
            throw error;
        }
    }

    // Actualiza la información de un usuario
    async actualizarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el método para actualizar un usuario en UsuarioServicio");
        try {
            let usuario = plainToInstance(Usuario, usuarioDTO);
            let resultado = await this.usuarioDAO.actualizarUsuario(usuario);

            if (resultado) {
                LoggerAPI.info("El usuario ha sido actualizado exitosamente");
                return true;
            } else {
                LoggerAPI.warn("No se ha podido actualizar el usuario");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al actualizar el usuario en UsuarioServicio; ${error}`);
            throw error;
        }
    }
}
