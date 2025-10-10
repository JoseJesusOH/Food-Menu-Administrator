
/**
 * Importaciones del los modelos respectivos e interface Usuario y UsuarioIDAO 
 */
import { Usuario } from "@entity/usuario.entity";
import { UsuarioIDAO } from "@data.dao/usuario.dao";
/**
 * Implementacion corrrespondiente del acceso a datos de usuario
 */
export class UsuarioDAO implements UsuarioIDAO {
    /**
     * Metodo para obtener la lista de usuarios del sistema
     */
    async getUsuarios():  Promise<Usuario[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener determinado usuario del sistema por ID
     */
    async getUsuarioByID(usuarioID: Number): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

    async getUsuarioByUuid(usuarioUuid: String): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar un Usuario 
     */
    async agregarUsuario(usuario: Usuario): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar un usuario del sistema por su id respectivo
     */
    async eliminarUsuarioByID(usuarioID: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para la actualización de usuario.
     */
    async actualizarUsuario(usuario: Usuario): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}