
/**
 * Importaciones de los modelos respectivos e interface UsuarioCategoria e UsuarioCategoriaIDAO
 */
import { UsuarioCategoria } from "@entity/usuario-categoria.entity";
import {UsuarioCategoriaIDAO} from "@data.dao/usuario-categoria.dao"

/**
 * Implementación de UsuarioCateforiaDAO 
 */
export class UsuarioCategoriaDAO implements UsuarioCategoriaIDAO{
    /**
     * Metodo para obtener las relaciones de usuario con respecto a categoria
     */
    getUsuarioCategorias(): UsuarioCategoria[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener la relación con el ID identificador
     */
    getUsuarioCategoriaByID(usuarioCategoriaID: Number): UsuarioCategoria {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para agregar una categoria al usuario
     */
    agregarUsuarioCategoria(usuarioCategoria: UsuarioCategoria): Boolean {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para quitar una categoria al usuario
     */
    eliminarUsuarioCategoriaByID(usuarioCategoria: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar una categoria al usuario
     */
    actualizarUsuarioCategoria(usuarioCategoria: UsuarioCategoria): Boolean {
        throw new Error("Method not implemented.");
    }

}