/**
 * Importaciones necesarias para el DAO de Usuario:
 * - {@link UsuarioIDAO}: interfaz que define los métodos del DAO.
 * - {@link Usuario}: entidad que representa la tabla o colección de usuarios.
 * - {@link Conexion}: utilidad para obtener el repositorio de TypeORM.
 * - {@link LoggerAPI}: utilidad para registrar logs de información, advertencia y error.
 */
import { UsuarioIDAO } from "@data.dao/usuario.dao";
import { Usuario } from "@entity/usuario.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Clase que implementa la interfaz {@link UsuarioIDAO} para gestionar
 * la persistencia de usuarios en la base de datos.
 * 
 * Proporciona métodos para:
 * - Consultar todos los usuarios
 * - Buscar usuarios por Id o UUID
 * - Registrar nuevos usuarios
 * - Actualizar usuarios existentes
 * - Eliminar usuarios por su Id
 */
export class UsuarioDAO implements UsuarioIDAO {

  /** Repositorio de usuarios obtenido a través de la conexión */
  usuarioRepositorio = Conexion.getRepository(Usuario);

  /**
   * Obtiene todos los usuarios registrados en la base de datos.
   * 
   * @returns {Promise<Usuario[]>} Promesa que resuelve con un arreglo de usuarios.
   */
  async getUsuarios(): Promise<Usuario[]> {
    LoggerAPI.info("Se inicia la búsqueda de usuarios en la base de datos.");

    try {
      const usuarios = await this.usuarioRepositorio.find();

      if (!usuarios || usuarios.length === 0) {
        LoggerAPI.warn("No se han encontrado usuarios en el sistema.");
        return [];
      } else {
        LoggerAPI.info(`Se han obtenido los usuarios exitosamente. Total: ${usuarios.length}`);
        return usuarios;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al obtener los usuarios. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Busca un usuario por su identificador numérico.
   * 
   * @param {Number} usuarioId - Id del usuario a buscar.
   * @returns {Promise<Usuario>} Promesa que resuelve con el usuario encontrado o null si no existe.
   */
  async getUsuarioById(usuarioId: Number): Promise<Usuario> {
    LoggerAPI.info(`Se inicia la búsqueda del usuario con ID: ${usuarioId}`);

    try {
      const usuario = await this.usuarioRepositorio.findOneBy({ usuarioId: usuarioId.valueOf() });

      if (usuario !== null) {
        LoggerAPI.info(`Se ha obtenido correctamente el usuario con ID ${usuarioId}`);
        return usuario;
      } else {
        LoggerAPI.warn(`No se encontró un usuario con el ID ${usuarioId}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar el usuario por ID. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Busca un usuario por su UUID.
   * 
   * @param {String} usuarioUuid - UUID del usuario a buscar.
   * @returns {Promise<Usuario>} Promesa que resuelve con el usuario encontrado o null si no existe.
   */
  async getUsuarioByUuid(usuarioUuid: String): Promise<Usuario> {
    LoggerAPI.info(`Se inicia la búsqueda del usuario con UUID: ${usuarioUuid}`);

    try {
      const usuario = await this.usuarioRepositorio.findOneBy({ usuarioUuid: usuarioUuid.toString() });

      if (usuario !== null) {
        LoggerAPI.info(`Se ha obtenido correctamente el usuario con UUID ${usuarioUuid}`);
        return usuario;
      } else {
        LoggerAPI.warn(`No se encontró un usuario con el UUID ${usuarioUuid}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar el usuario por UUID. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Inserta un nuevo usuario en la base de datos.
   * 
   * @param {Usuario} usuario - Objeto con los datos del usuario a registrar.
   * @returns {Promise<Boolean>} Promesa que indica si la operación fue exitosa (`true`) o falló (`false`).
   */
  async agregarUsuario(usuario: Usuario): Promise<Boolean> {
    LoggerAPI.info("Se inicia el proceso de registro de un nuevo usuario en la base de datos");

    try {
      const resultado = await this.usuarioRepositorio.insert(usuario);

      if (resultado.identifiers.length > 0) {
        LoggerAPI.info(`El usuario '${usuario['nombre'] ?? 'sin nombre'}' fue registrado exitosamente con ID ${resultado.identifiers[0].id}`);
        return true;
      } else {
        LoggerAPI.warn("La inserción del usuario no devolvió un identificador, podría no haberse completado correctamente");
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al registrar el usuario en la base de datos: ${error}`);
      throw error;
    }
  }

  /**
   * Actualiza un usuario existente en la base de datos.
   * 
   * @param {Usuario} usuario - Objeto con los datos actualizados del usuario.
   * @returns {Promise<Boolean>} Promesa que indica si la actualización fue exitosa (`true`) o falló (`false`).
   */
  async actualizarUsuario(usuario: Usuario): Promise<Boolean> {
    LoggerAPI.info(`Se inicia la actualización del usuario con ID ${usuario['id'] ?? 'desconocido'}`);

    try {
      const resultado = await this.usuarioRepositorio.update(usuario['id'], usuario);

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`El usuario con ID ${usuario['id']} fue actualizado exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se actualizó ningún usuario con ID ${usuario['id']}`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al actualizar el usuario en la base de datos: ${error}`);
      throw error;
    }
  }

  /**
   * Elimina un usuario de la base de datos usando su identificador numérico.
   * 
   * @param {Number} usuarioId - Id del usuario a eliminar.
   * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o falló (`false`).
   */
  async eliminarUsuarioById(usuarioId: Number): Promise<Boolean> {
    LoggerAPI.info(`Se inicia la eliminación del usuario con ID ${usuarioId}`);

    try {
      const resultado = await this.usuarioRepositorio.delete(usuarioId.valueOf());

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`El usuario con ID ${usuarioId} fue eliminado exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se encontró ningún usuario con ID ${usuarioId} para eliminar`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al eliminar el usuario en la base de datos: ${error}`);
      throw error;
    }
  }
}
