import { UsuarioIDAO } from "@data.dao/usuario.dao";
import { UsuarioDAO } from "@data.impl/usuario.dao.impl";
import { UsuarioDTO } from "@dto/usuario.dto";
import { UsuarioIServicio } from "servicies/interfaces/usuario.servicio";
import { LoggerAPI } from "@utility/logger";
import { Usuario } from "@entity/usuario.entity";
import { plainToInstance } from "class-transformer";
export class UsuarioServicio implements UsuarioIServicio {
    usuarioDAO: UsuarioIDAO = new UsuarioDAO();
    async getUsuarios(): Promise<UsuarioDTO[]> {
        LoggerAPI.info("Se inicia el método para obtener los usuarios en UsuarioServicio");
        try {
            // Se llama al DAO para obtener la lista de usuarios
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
    async getUsuarioById(usuarioId: Number): Promise<UsuarioDTO> {
        LoggerAPI.info(`Se inicia el método para obtener el usuario con ID: ${usuarioId} en UsuarioServicio`);
        try {
            // Se llama al DAO para obtener el usuario por su ID
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
    async getUsuarioByUuid(usuarioUuid: String): Promise<UsuarioDTO> {
        LoggerAPI.info(`Se inicia el método para obtener el usuario con UUID: ${usuarioUuid} en UsuarioServicio`);
        try {
            // Se llama al DAO para obtener el usuario por su UUID
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
    async agregarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el método para agregar un usuario en UsuarioServicio");
        try {
            // Convertimos el DTO en la entidad Usuario para persistencia
            let usuario = plainToInstance(Usuario, usuarioDTO);

            // Llamada al DAO para agregar el usuario
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
    eliminarUsuarioById(usuarioId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}