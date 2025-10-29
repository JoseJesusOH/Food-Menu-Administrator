import { Usuario } from "@entity/usuario.entity";

export interface UsuarioIDAO{
    getUsuarios():Usuario[];
    getUsuarioByID(usuarioID:Number):Usuario;
    getUsuarioByUUID(usuarioUUID:String):Usuario;
    agregarUsuario(usuario:Usuario):Boolean;
    actualizarUsuario(usuario:Usuario):Boolean;
    eliminarUsuarioByID(usuarioID:Number):Boolean;
}