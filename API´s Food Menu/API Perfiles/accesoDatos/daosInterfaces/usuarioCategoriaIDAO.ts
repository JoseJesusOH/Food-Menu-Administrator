import {UsuarioCategoria} from "../../modelos/usuarioCategoria"
export interface UsuarioCategoriaIDAO{
    getUsuarioCategorias():UsuarioCategoria[];
    getUsuarioCategoriaByID(usuarioCategoriaID:Number):UsuarioCategoria;
    agregarUsuarioCategoria(usuarioCategoria:UsuarioCategoria):Boolean;
    eliminarUsuarioCategoriaByID(usuarioCategoria:Number):Boolean;
    actualizarUsuarioCategoria(usuarioCategoria:UsuarioCategoria):Boolean;
}