// Importa el DTO que representa la estructura de un usuario
import { UsuarioDTO } from "@dto/usuario.dto";

/**
 * Interfaz que define las operaciones del servicio de usuarios.
 * Contiene los métodos necesarios para gestionar la información
 * de los usuarios dentro del sistema (operaciones CRUD).
 */
export interface UsuarioIServicio {

    /**
     * Obtiene la lista completa de usuarios registrados.
     * @returns {Promise<UsuarioDTO[]>} Lista de objetos UsuarioDTO con los datos de los usuarios.
     */
    getUsuarios(): Promise<UsuarioDTO[]>;

    /**
     * Obtiene un usuario específico por su identificador numérico.
     * @param {Number} usuarioId - Identificador único del usuario.
     * @returns {Promise<UsuarioDTO>} Objeto UsuarioDTO con la información del usuario encontrado.
     */
    getUsuarioById(usuarioId: Number): Promise<UsuarioDTO>;

    /**
     * Obtiene un usuario específico por su UUID.
     * @param {String} usuarioUuid - UUID único del usuario.
     * @returns {Promise<UsuarioDTO>} Objeto UsuarioDTO con los datos del usuario asociado al UUID.
     */
    getUsuarioByUuid(usuarioUuid: String): Promise<UsuarioDTO>;

    /**
     * Agrega un nuevo usuario al sistema.
     * @param {UsuarioDTO} usuarioDTO - Objeto con los datos del usuario a registrar.
     * @returns {Promise<Boolean>} Verdadero si el usuario fue agregado correctamente, falso en caso contrario.
     */
    agregarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean>;

    /**
     * Elimina un usuario del sistema mediante su identificador numérico.
     * @param {Number} usuarioId - Identificador único del usuario a eliminar.
     * @returns {Promise<Boolean>} Verdadero si la eliminación fue exitosa, falso si no se pudo eliminar.
     */
    eliminarUsuarioById(usuarioId: Number): Promise<Boolean>;

    /**
     * Actualiza los datos de un usuario existente.
     * @param {UsuarioDTO} usuarioDTO - Objeto con los datos actualizados del usuario.
     * @returns {Promise<Boolean>} Verdadero si la actualización fue exitosa, falso en caso contrario.
     */
    actualizarUsuario(usuarioDTO: UsuarioDTO): Promise<Boolean>;
}
