/**
 * Importación de la entidad Usuario
 */
import {Usuario} from "@entity/usuario.entity"
/**
 *  Interfaz que define las operaciones de acceso a datos para la entidad Usuario
 */
export interface UsuarioIDAO{
    /**
     * Método para obtener todos los usuarios
     * @returns Un arreglo de objetos Usuario
     */
    getUsuarios(): Promise<Usuario[]> ;

    /**
     *  Método para obtener un usuario por su ID
     * @param usuarioId ID del usuario a buscar
     * @returns Un objeto Usuario si se encuentra, de lo contrario retorna null
     */
    getUsuarioById(usuarioId:Number):Promise<Usuario>;

    /**
     *  Método para agregar un nuevo usuario
     * @param usuario Objeto Usuario a agregar
     * @return true si la operación fue exitosa, de lo contrario false
     */
    agregarUsuario(usuario:Usuario):Promise<Boolean>;

    /**
     *  Método para eliminar un usuario por su ID
     * @param usuarioId ID del usuario a eliminar
     * @return true si la operación fue exitosa, de lo contrario false
     */
    eliminarUsuarioById(usuarioId:Number):Promise<Boolean>;
    
    /**
     *  Método para actualizar un usuario existente
     * @param usuario Objeto Usuario con los datos actualizados
     * @return true si la operación fue exitosa, de lo contrario false
     */
    actualizarUsuario(usuario:Usuario):Promise<Boolean>;
}