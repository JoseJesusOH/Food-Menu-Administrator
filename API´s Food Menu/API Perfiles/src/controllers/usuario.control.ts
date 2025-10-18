import { Usuario } from "@entity/usuario.entity";
import { LoggerAPI } from "@utility/logger";
import { UsuarioServicio } from "servicies/implementations/usuario.servicio.impl"
import { UsuarioIServicio } from "servicies/interfaces/usuario.servicio"

class UsuarioControl {
    usuarioServicio: UsuarioIServicio = new UsuarioServicio();
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
export default { UsuarioControl }