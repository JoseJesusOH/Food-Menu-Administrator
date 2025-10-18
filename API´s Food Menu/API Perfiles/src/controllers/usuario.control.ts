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
}

export default { UsuarioControl };
