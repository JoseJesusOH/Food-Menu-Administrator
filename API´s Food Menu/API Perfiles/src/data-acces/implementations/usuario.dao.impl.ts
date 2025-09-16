
/**
 * Importaciones del los modelos respectivos e interface Usuario y UsuarioIDAO 
 */
import { Usuario } from "@entity/usuario.entity";
import { UsuarioIDAO } from "@data.dao/usuario.dao";
/**
 * Implementacion corrrespondiente del acceso a datos de usuario
 */
export class UsuarioDAO implements UsuarioIDAO{
    /**
     * Metodo para obtener la lista de usuarios del sistema
     */
    getUsuarios(): Usuario[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener determinado usuario del sistema por ID
     */
    getUsuarioByID(usuarioID: Number): Usuario {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar un Usuario 
     */
    agregarUsuario(usuario: Usuario): Boolean {
        throw new Error("Method not implemented.");
    }
    
    /**
     * Metodo para eliminar un usuario del sistema por su id respectivo
     */
    eliminarUsuarioByID(usuarioID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para la actualización de usuario.
     */
    actualizarUsuario(usuario: Usuario): Boolean {
        throw new Error("Method not implemented.");
    }
    
}