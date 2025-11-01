/**
 * Importaciones necesarias para el DAO de VentaUsuario:
 * - {@link VentaUsuarioIDAO}: interfaz que define los métodos del DAO.
 * - {@link VentaUsuario}: entidad que representa la relación entre ventas y usuarios.
 * - {@link Conexion}: utilidad para obtener el repositorio de TypeORM.
 * - {@link LoggerAPI}: utilidad para registrar logs de información, advertencia y error.
 */
import { VentaUsuarioIDAO } from "@data.dao/venta-usuario.dao";
import { VentaUsuario } from "@entity/venta-usuario.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Clase que implementa la interfaz {@link VentaUsuarioIDAO} para gestionar
 * la persistencia de los usuarios asociados a las ventas en la base de datos.
 *
 * Proporciona métodos para:
 * - Consultar registros de usuarios asociados a ventas.
 * - Buscar relaciones por Id o UUID.
 * - Registrar y eliminar usuarios asociados a ventas.
 */
class VentaUsuarioDAO implements VentaUsuarioIDAO {

  /** Repositorio de VentaUsuario obtenido a través de la conexión */
  ventaUsuarioRepositorio = Conexion.getRepository(VentaUsuario);

  /**
   * Obtiene todos los usuarios asociados a una venta específica.
   *
   * @param {number} ventaId - Identificador de la venta.
   * @returns {Promise<VentaUsuario[]>} Lista de usuarios asociados a la venta.
   */
  async getVentasUsuarioByIdVenta(ventaId: number): Promise<VentaUsuario[]> {
    /* LoggerAPI.info(`Se inicia la búsqueda de usuarios asociados a la venta con ID: ${ventaId}`);

    try {
      const ventaUsuarios = await this.ventaUsuarioRepositorio.findBy({ ventaId });

      if (!ventaUsuarios || ventaUsuarios.length === 0) {
        LoggerAPI.warn(`No se encontraron usuarios asociados a la venta con ID ${ventaId}`);
        return [];
      } else {
        LoggerAPI.info(`Se obtuvieron correctamente ${ventaUsuarios.length} usuarios asociados a la venta con ID ${ventaId}`);
        return ventaUsuarios;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al obtener los usuarios asociados a la venta con ID ${ventaId}. Detalle del error: ${error}`);
      throw error;
    }
      */
     return null;
  }

  /**
   * Obtiene un solo usuario asociado a una venta por el ID de la venta.
   *
   * @param {number} ventaId - Identificador de la venta.
   * @returns {Promise<VentaUsuario>} Usuario asociado a la venta o null si no existe.
   */
  async getVentaUsuarioByIdVenta(ventaId: number): Promise<VentaUsuario> {
    /*
    LoggerAPI.info(`Se inicia la búsqueda del registro VentaUsuario asociado a la venta con ID: ${ventaId}`);

    try {
      const ventaUsuario = await this.ventaUsuarioRepositorio.findOneBy({ ventaId });

      if (ventaUsuario !== null) {
        LoggerAPI.info(`Se obtuvo correctamente el registro VentaUsuario asociado a la venta con ID ${ventaId}`);
        return ventaUsuario;
      } else {
        LoggerAPI.warn(`No se encontró un registro VentaUsuario asociado a la venta con ID ${ventaId}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar el registro VentaUsuario por ID de venta ${ventaId}. Detalle del error: ${error}`);
      throw error;
    }
    */
   return null;
  }

  /**
   * Busca un usuario por su ID único.
   *
   * @param {number} ventaUsuarioId - Identificador del registro.
   * @returns {Promise<VentaUsuario>} Registro encontrado o null si no existe.
   */
  async getVentaUsuarioById(ventaUsuarioId: number): Promise<VentaUsuario> {
    LoggerAPI.info(`Se inicia la búsqueda de VentaUsuario con ID: ${ventaUsuarioId}`);

    try {
      const ventaUsuario = await this.ventaUsuarioRepositorio.findOneBy({ ventaUsuarioId });

      if (ventaUsuario !== null) {
        LoggerAPI.info(`Se obtuvo correctamente el registro VentaUsuario con ID ${ventaUsuarioId}`);
        return ventaUsuario;
      } else {
        LoggerAPI.warn(`No se encontró un registro VentaUsuario con ID ${ventaUsuarioId}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar VentaUsuario por ID ${ventaUsuarioId}. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Busca un usuario por su UUID.
   *
   * @param {string} ventaUsuarioUuid - UUID del registro.
   * @returns {Promise<VentaUsuario>} Registro encontrado o null si no existe.
   */
  async getVentaUsuarioByUuid(ventaUsuarioUuid: string): Promise<VentaUsuario> {
    LoggerAPI.info(`Se inicia la búsqueda de VentaUsuario con UUID: ${ventaUsuarioUuid}`);

    try {
      const ventaUsuario = await this.ventaUsuarioRepositorio.findOneBy({ ventaUsuarioUuid });

      if (ventaUsuario !== null) {
        LoggerAPI.info(`Se obtuvo correctamente el registro VentaUsuario con UUID ${ventaUsuarioUuid}`);
        return ventaUsuario;
      } else {
        LoggerAPI.warn(`No se encontró un registro VentaUsuario con UUID ${ventaUsuarioUuid}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar VentaUsuario por UUID ${ventaUsuarioUuid}. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Agrega un nuevo usuario asociado a una venta.
   *
   * @param {VentaUsuario} ventaUsuario - Objeto con los datos del usuario.
   * @returns {Promise<boolean>} Indica si la inserción fue exitosa.
   */
  async agregarVentaUsuario(ventaUsuario: VentaUsuario): Promise<boolean> {
    LoggerAPI.info("Se inicia el proceso de registro de un nuevo VentaUsuario en la base de datos");

    try {
      const resultado = await this.ventaUsuarioRepositorio.insert(ventaUsuario);

      if (resultado.identifiers.length > 0) {
        LoggerAPI.info(`El registro VentaUsuario fue insertado exitosamente con ID ${resultado.identifiers[0].id}`);
        return true;
      } else {
        LoggerAPI.warn("La inserción de VentaUsuario no devolvió un identificador, podría no haberse completado correctamente");
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al registrar VentaUsuario en la base de datos: ${error}`);
      throw error;
    }
  }

  /**
   * Elimina un usuario asociado a una venta por su ID.
   *
   * @param {number} ventaUsuarioId - Identificador del registro a eliminar.
   * @returns {Promise<boolean>} Indica si la eliminación fue exitosa.
   */
  async eliminarVentaUsuarioById(ventaUsuarioId: number): Promise<boolean> {
    LoggerAPI.info(`Se inicia la eliminación del registro VentaUsuario con ID: ${ventaUsuarioId}`);

    try {
      const resultado = await this.ventaUsuarioRepositorio.delete({ ventaUsuarioId });

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`El registro VentaUsuario con ID ${ventaUsuarioId} fue eliminado exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se encontró un registro VentaUsuario con ID ${ventaUsuarioId} para eliminar`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al eliminar el registro VentaUsuario con ID ${ventaUsuarioId}. Detalle del error: ${error}`);
      throw error;
    }
  }
}
