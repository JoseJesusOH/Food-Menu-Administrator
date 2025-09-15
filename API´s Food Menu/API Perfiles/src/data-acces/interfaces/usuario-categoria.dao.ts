/**
 * Importacion del modelo de UsuarioCategoria
 */
import {UsuarioCategoria} from "@entity/usuario-categoria.entity"
/**
 * Interfaz de UsuarioCategoria
 */
export interface UsuarioCategoriaIDAO{
    /**
     * Metodo para obtener todas las categorias de usuario
     * @return {UsuarioCategoria[]} Retorna un arreglo de categorias de usuario
     */
    getUsuarioCategorias():UsuarioCategoria[];

    /**
     * Metodo para obtener una categoria de usuario por su ID
     * @param usuarioCategoriaID ID de la categoria de usuario
     * @return {UsuarioCategoria} Retorna la categoria de usuario que coincide con el ID
     */
    getUsuarioCategoriaByID(usuarioCategoriaID:Number):UsuarioCategoria;

    /**
     * Metodo para agregar una nueva categoria de usuario
     * @param usuarioCategoria Categoria de usuario a agregar
     * @return {Boolean} Retorna true si se agrego correctamente, false si no
     */
    agregarUsuarioCategoria(usuarioCategoria:UsuarioCategoria):Boolean;
    /**
     * Metodo para eliminar una categoria de usuario por su ID
     * @param usuarioCategoria ID de la categoria de usuario a eliminar
     * @return {Boolean} Retorna true si se elimino correctamente, false si no
     */
    eliminarUsuarioCategoriaByID(usuarioCategoria:Number):Boolean;
    /**
     * Metodo para actualizar una categoria de usuario
     * @param usuarioCategoria Categoria de usuario a actualizar
     * @return {Boolean} Retorna true si se actualizo correctamente, false si no
     */
    actualizarUsuarioCategoria(usuarioCategoria:UsuarioCategoria):Boolean;
}