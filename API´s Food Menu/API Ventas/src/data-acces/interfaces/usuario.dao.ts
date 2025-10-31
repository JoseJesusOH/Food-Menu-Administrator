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
 * - Buscar usuarios por Id o UUID
 * - Agregar nuevos usuarios
 * - Actualizar la información de usuarios existentes
 * - Eliminar usuarios por su Id
 * 
 * Esta interfaz actúa como un contrato que deben implementar
 * las clases encargadas de interactuar con la fuente de datos,
 * como bases de datos SQL, NoSQL o servicios externos.
 */
export interface UsuarioIDAO {

  /**
   * Obtiene todos los usuarios registrados en la fuente de datos.
   * 
   * @returns {Promise<Usuario[]>} Promesa que resuelve con un arreglo
   * que contiene todos los usuarios disponibles.
   */
  getUsuarios(): Promise<Usuario[]>;

  /**
   * Busca y devuelve un usuario específico según su identificador numérico.
   * 
   * @param {Number} usuarioId - Identificador único del usuario.
   * @returns {Promise<Usuario>} Promesa que resuelve con el usuario correspondiente al Id especificado.
   */
  getUsuarioById(usuarioId: Number): Promise<Usuario>;

  /**
   * Busca y devuelve un usuario según su UUID.
   * 
   * @param {String} usuarioUuid - Identificador único universal (UUID) del usuario.
   * @returns {Promise<Usuario>} Promesa que resuelve con el usuario correspondiente al UUID proporcionado.
   */
  getUsuarioByUuid(usuarioUuid: String): Promise<Usuario>;

  /**
   * Agrega un nuevo usuario a la fuente de datos.
   * 
   * @param {Usuario} usuario - Objeto con los datos del usuario a registrar.
   * @returns {Promise<Boolean>} Promesa que indica si la inserción fue exitosa (`true`) o falló (`false`).
   */
  agregarUsuario(usuario: Usuario): Promise<Boolean>;

  /**
   * Actualiza la información de un usuario existente.
   * 
   * @param {Usuario} usuario - Objeto con los datos actualizados del usuario.
   * @returns {Promise<Boolean>} Promesa que indica si la actualización fue exitosa (`true`) o no (`false`).
   */
  actualizarUsuario(usuario: Usuario): Promise<Boolean>;

  /**
   * Elimina un usuario de la fuente de datos usando su identificador numérico.
   * 
   * @param {Number} usuarioId - Identificador único del usuario a eliminar.
   * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o falló (`false`).
   */
  eliminarUsuarioById(usuarioId: Number): Promise<Boolean>;
}
