// Importa la entidad Usuario que representa la estructura del usuario en la base de datos
import { Usuario } from "@entity/usuario.entity";

// Importa la utilidad LoggerAPI para registrar información y errores en el sistema
import { LoggerAPI } from "@utility/logger";

// Importa la implementación del servicio que contiene la lógica de negocio para usuarios
import { UsuarioServicio } from "servicies/implementations/usuario.servicio.impl";

// Importa la interfaz que define los métodos que el servicio de usuarios debe implementar
import { UsuarioIServicio } from "servicies/interfaces/usuario.servicio";

/**
 * Controlador encargado de manejar las operaciones relacionadas con los usuarios.
 * Se comunica con la capa de servicio para procesar las solicitudes del cliente.
 */
class UsuarioControl {

    /** Instancia del servicio de usuarios utilizada para acceder a la lógica de negocio */
    usuarioServicio: UsuarioIServicio = new UsuarioServicio();

    /**
     * Obtiene todos los usuarios registrados en el sistema.
     * Llama al servicio para obtener la lista de usuarios y responde al cliente.
     */
    getUsuario = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para obtener los usuarios");
        try {
            const usuarios = await this.usuarioServicio.getUsuarios();

            if (usuarios && usuarios.length > 0) {
                return res.status(200).send({ usuarios });
            } else {
                return res.status(404).send({ message: "No se han encontrado usuarios registrados" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener los usuarios: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    };
    /**
 * Obtiene un usuario específico a partir de su UUID.
 * El UUID se recibe desde los parámetros de la solicitud (req.params).
 */
    getUsuarioByUuid = async (req, res, next) => {
        const { uuid } = req.params;
        LoggerAPI.info(`Se inicia el control respectivo para obtener el usuario con UUID: ${uuid}`);
        try {
            const usuario = await this.usuarioServicio.getUsuarioByUuid(uuid);

            if (usuario) {
                return res.status(200).send(usuario);
            } else {
                return res.status(404).send({ message: `No se ha encontrado el usuario con UUID ${uuid}` });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener el usuario con UUID ${uuid}: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    };
    /**
     * Agrega un nuevo usuario al sistema.
     * Toma los datos del usuario desde req.body y llama al servicio para registrarlo.
     */
    agregarUsuario = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para agregar un usuario");
        try {
            const usuarioDTO = req.body;
            const resultado = await this.usuarioServicio.agregarUsuario(usuarioDTO);

            if (resultado) {
                return res.status(200).send({ message: "El usuario ha sido registrado correctamente" });
            } else {
                return res.status(404).send({ message: "No se ha podido registrar el usuario" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al agregar el usuario: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    };
    /**
     * Elimina un usuario del sistema a partir de su UUID.
     * El UUID se recibe desde los parámetros de la solicitud (req.params).
     */
    eliminarUsuarioByUuid = async (req, res, next) => {
        const { usuarioUuid } = req.params;
        LoggerAPI.info(`Se inicia el control respectivo para eliminar el usuario con UUID: ${usuarioUuid}`);
        try {
            const resultado = await this.usuarioServicio.eliminarUsuarioByUuid(usuarioUuid);

            if (resultado) {
                return res.status(200).send({ message: `El usuario con UUID ${usuarioUuid} ha sido eliminado correctamente` });
            } else {
                return res.status(404).send({ message: `No se encontró o no se pudo eliminar el usuario con UUID ${usuarioUuid}` });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al eliminar el usuario con UUID ${usuarioUuid}: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    };
    /**
     * Actualiza los datos de un usuario existente.
     * Toma los nuevos datos desde req.body y llama al servicio para realizar la actualización.
     */
    actualizarUsuario = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para actualizar un usuario");
        try {
            const usuarioDTO = req.body;
            const resultado = await this.usuarioServicio.actualizarUsuario(usuarioDTO);

            if (resultado) {
                return res.status(200).send({ message: "El usuario ha sido actualizado correctamente" });
            } else {
                return res.status(404).send({ message: "No se ha podido actualizar el usuario" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al actualizar el usuario: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    };

}

export default { UsuarioControl };
