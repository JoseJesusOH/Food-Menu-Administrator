/**
 * Importa la clase o entidad {@link Usuario}, que representa
 * el modelo de datos de un usuario dentro del sistema.
 * 
 * Esta entidad generalmente incluye información como:
 * - Identificador numérico y UUID
 * - Nombre de usuario, correo electrónico, contraseña (encriptada)
 * - Roles, permisos u otra información relacionada al acceso
 * 
 * Se utiliza en esta interfaz para definir las operaciones
 * del DAO que manipulan objetos de tipo {@link Usuario}.
 */
import { Usuario } from "@entity/usuario.entity";

/**
 * Interfaz que define las operaciones de acceso a datos (DAO)
 * para la entidad {@link Usuario}.
 * 
 * Proporciona los métodos necesarios para:
 * - Consultar todos los usuarios
 * - Buscar usuarios por ID o UUID
 * - Agregar nuevos usuarios
 * - Actualizar la información de usuarios existentes
 * - Eliminar usuarios por su ID
 * 
 * Esta interfaz actúa como un contrato que deben implementar
 * las clases encargadas de interactuar con la fuente de datos,
 * como bases de datos SQL, NoSQL o servicios externos.
 */
export interface UsuarioIDAO {

  /**
   * Obtiene todos los usuarios registrados en la fuente de datos.
   * 
   * @returns {Usuario[]} Arreglo con todos los usuarios disponibles.
   */
  getUsuarios(): Usuario[];

  /**
   * Busca y devuelve un usuario específico según su identificador numérico.
   * 
   * @param {number} usuarioID - Identificador único del usuario.
   * @returns {Usuario} El usuario correspondiente al ID especificado.
   */
  getUsuarioByID(usuarioID: number): Usuario;

  /**
   * Busca y devuelve un usuario según su UUID.
   * 
   * @param {string} usuarioUUID - Identificador único universal (UUID) del usuario.
   * @returns {Usuario} El usuario correspondiente al UUID proporcionado.
   */
  getUsuarioByUUID(usuarioUUID: string): Usuario;

  /**
   * Agrega un nuevo usuario a la fuente de datos.
   * 
   * @param {Usuario} usuario - Objeto con los datos del usuario a registrar.
   * @returns {boolean} `true` si la inserción fue exitosa, `false` si ocurrió un error.
   */
  agregarUsuario(usuario: Usuario): boolean;

  /**
   * Actualiza la información de un usuario existente.
   * 
   * @param {Usuario} usuario - Objeto con los datos actualizados del usuario.
   * @returns {boolean} `true` si la actualización fue exitosa, `false` si falló.
   */
  actualizarUsuario(usuario: Usuario): boolean;

  /**
   * Elimina un usuario de la fuente de datos usando su identificador numérico.
   * 
   * @param {number} usuarioID - Identificador único del usuario a eliminar.
   * @returns {boolean} `true` si la eliminación fue exitosa, `false` en caso contrario.
   */
  eliminarUsuarioByID(usuarioID: number): boolean;
}
