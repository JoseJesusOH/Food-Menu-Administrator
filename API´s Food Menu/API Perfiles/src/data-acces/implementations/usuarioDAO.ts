import { Usuario } from "../../modelos/usuario";
import { UsuarioIDAO } from "../interfaces/usuario.dao";

export class UsuarioDAO implements UsuarioIDAO{
    getUsuarios(): Usuario[] {
        throw new Error("Method not implemented.");
    }
    getUsuarioByID(usuarioID: Number): Usuario {
        throw new Error("Method not implemented.");
    }
    agregarUsuario(usuario: Usuario): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarUsuarioByID(usuarioID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarUsuario(usuario: Usuario): Boolean {
        throw new Error("Method not implemented.");
    }
    
}