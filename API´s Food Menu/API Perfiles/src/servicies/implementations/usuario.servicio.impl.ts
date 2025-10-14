import { UsuarioDTO } from "@dto/usuario.dto";
import { UsuarioIServicio } from "servicies/interfaces/usuario.servicio";

export class UsuarioServicio implements UsuarioIServicio{
    getUsuarios(): Promise<UsuarioDTO[]> {
        throw new Error("Method not implemented.");
    }
    getUsuarioById(usuarioId: Number): Promise<UsuarioDTO> {
        throw new Error("Method not implemented.");
    }
    getUsuarioByUuid(usuarioUuid: String): Promise<UsuarioDTO> {
        throw new Error("Method not implemented.");
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