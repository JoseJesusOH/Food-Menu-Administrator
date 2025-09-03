import {Usuario} from "../../modelos/usuario"
export interface UsuarioIDAO{
    getUsuarios():Usuario[];
    getUsuarioByID(usuarioID:Number):Usuario;
    agregarUsuario(usuario:Usuario):Boolean;
    eliminarUsuarioByID(usuarioID:Number):Boolean;
    actualizarUsuario(usuario:Usuario):Boolean;
}