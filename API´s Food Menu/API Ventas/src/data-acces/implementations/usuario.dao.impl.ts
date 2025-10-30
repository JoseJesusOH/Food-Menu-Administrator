import { UsuarioIDAO } from "@data.dao/usuario.dao";
import { Usuario } from "@entity/usuario.entity";

class UsuarioDAO implements UsuarioIDAO{
    getUsuarios(): Usuario[] {
        throw new Error("Method not implemented.");
    }
    getUsuarioByID(usuarioID: number): Usuario {
        throw new Error("Method not implemented.");
    }
    getUsuarioByUUID(usuarioUUID: string): Usuario {
        throw new Error("Method not implemented.");
    }
    agregarUsuario(usuario: Usuario): boolean {
        throw new Error("Method not implemented.");
    }
    actualizarUsuario(usuario: Usuario): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarUsuarioByID(usuarioID: number): boolean {
        throw new Error("Method not implemented.");
    }
    
}