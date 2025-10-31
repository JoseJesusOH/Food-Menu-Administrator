import { UsuarioIDAO } from "@data.dao/usuario.dao";
import { Usuario } from "@entity/usuario.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
class UsuarioDAO implements UsuarioIDAO {
    usuarioRepositorio = Conexion.getRepository(Usuario);
    async getUsuarios(): Promise<Usuario[]> {
        LoggerAPI.info("Se inicia la búsqueda de usuarios en la base de datos.");

        try {
            const usuarios = await this.usuarioRepositorio.find();

            if (!usuarios || usuarios.length === 0) {
                LoggerAPI.warn("No se han encontrado usuarios en el sistema.");
                return [];
            } else {
                LoggerAPI.info(`Se han obtenido los usuarios exitosamente. Total: ${usuarios.length}`);
                return usuarios;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al obtener los usuarios. Detalle del error: ${error}`);
            throw error;
        }
    } async getUsuarioById(usuarioId: Number): Promise<Usuario> {
        LoggerAPI.info(`Se inicia la búsqueda del usuario con ID: ${usuarioId}`);

        try {
            const usuario = await this.usuarioRepositorio.findOneBy({ usuarioId: usuarioId.valueOf() });

            if (usuario !== null) {
                LoggerAPI.info(`Se ha obtenido correctamente el usuario con ID ${usuarioId}`);
                return usuario;
            } else {
                LoggerAPI.warn(`No se encontró un usuario con el ID ${usuarioId}`);
                return null;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al buscar el usuario por ID. Detalle del error: ${error}`);
            throw error;
        }
    }
    async getUsuarioByUuid(usuarioUuid: String): Promise<Usuario> {
        LoggerAPI.info(`Se inicia la búsqueda del usuario con UUID: ${usuarioUuid}`);

        try {
            const usuario = await this.usuarioRepositorio.findOneBy({ usuarioUuid: usuarioUuid.toString() });

            if (usuario !== null) {
                LoggerAPI.info(`Se ha obtenido correctamente el usuario con UUID ${usuarioUuid}`);
                return usuario;
            } else {
                LoggerAPI.warn(`No se encontró un usuario con el UUID ${usuarioUuid}`);
                return null;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al buscar el usuario por UUID. Detalle del error: ${error}`);
            throw error;
        }
    }
    async agregarUsuario(usuario: Usuario): Promise<Boolean> {
        LoggerAPI.info("Se inicia el proceso de registro de un nuevo usuario en la base de datos");

        try {
            const resultado = await this.usuarioRepositorio.insert(usuario);

            if (resultado.identifiers.length > 0) {
                LoggerAPI.info(`El usuario '${usuario['nombre'] ?? 'sin nombre'}' fue registrado exitosamente con ID ${resultado.identifiers[0].id}`);
                return true;
            } else {
                LoggerAPI.warn("La inserción del usuario no devolvió un identificador, podría no haberse completado correctamente");
                return false;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al registrar el usuario en la base de datos: ${error}`);
            throw error;
        }
    }
    actualizarUsuario(usuario: Usuario): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarUsuarioByID(usuarioID: number): boolean {
        throw new Error("Method not implemented.");
    }

}