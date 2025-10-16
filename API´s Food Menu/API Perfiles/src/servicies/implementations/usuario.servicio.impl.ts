import { UsuarioIDAO } from "@data.dao/usuario.dao";
import { UsuarioDAO } from "@data.impl/usuario.dao.impl";
import { UsuarioDTO } from "@dto/usuario.dto";
import { UsuarioIServicio } from "servicies/interfaces/usuario.servicio";
import { LoggerAPI } from "@utility/logger";
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
    agregarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarUsuarioById(usuarioId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}