import { UsuarioDTO } from "@dto/usuario.dto";
export interface UsuarioIServicio {
    getUsuarios(): Promise<UsuarioDTO[]>;
    getUsuarioById(usuarioId: Number): Promise<UsuarioDTO>;
    getUsuarioByUuid(usuarioUuid: String): Promise<UsuarioDTO>;
    agregarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean>;
    eliminarUsuarioById(usuarioId: Number): Promise<Boolean>;
    actualizarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean>;
} 