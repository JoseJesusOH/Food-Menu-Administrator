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
    getUsuarioCategorias():Promise<UsuarioCategoria[]>;

    /**
     * Metodo para obtener una categoria de usuario por su ID
     * @param usuarioCategoriaId ID de la categoria de usuario
     * @return {UsuarioCategoria} Retorna la categoria de usuario que coincide con el ID
     */
    getUsuarioCategoriaById(usuarioCategoriaId:Number):Promise<UsuarioCategoria>;

    /**
     * Metodo para agregar una nueva categoria de usuario
     * @param usuarioCategoria Categoria de usuario a agregar
     * @return {Boolean} Retorna true si se agrego correctamente, false si no
     */
    agregarUsuarioCategoria(usuarioCategoria:UsuarioCategoria):Promise<Boolean>;
    /**
     * Metodo para eliminar una categoria de usuario por su ID
     * @param usuarioCategoria ID de la categoria de usuario a eliminar
     * @return {Boolean} Retorna true si se elimino correctamente, false si no
     */
    eliminarUsuarioCategoriaByID(usuarioCategoria:Number):Promise<Boolean>;
    /**
     * Metodo para actualizar una categoria de usuario
     * @param usuarioCategoria Categoria de usuario a actualizar
     * @return {Boolean} Retorna true si se actualizo correctamente, false si no
     */
    actualizarUsuarioCategoria(usuarioCategoria:UsuarioCategoria):Promise<Boolean>;
}