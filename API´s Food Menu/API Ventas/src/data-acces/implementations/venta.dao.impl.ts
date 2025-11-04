import { VentaIDAO } from "@data.dao/venta.dao";
import { Venta } from "@entity/venta.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Clase encargada de gestionar las operaciones de acceso a datos (DAO) 
 * relacionadas con la entidad Venta. Implementa la interfaz VentaIDAO.
 */
class VentaDAO implements VentaIDAO {
  ventaRepositorio = Conexion.getRepository(Venta);

  /**
   * Obtiene todas las ventas registradas en la base de datos.
   * 
   * @returns {Promise<Venta[]>} Lista de ventas encontradas. 
   * Devuelve un arreglo vacío si no existen registros.
   * @throws {Error} Lanza una excepción si ocurre un error al consultar la base de datos.
   */
  async getVentas(): Promise<Venta[]> {
    LoggerAPI.info("Se inicia la búsqueda de todas las ventas en la base de datos");

    try {
      const ventas = await this.ventaRepositorio.find();

      if (!ventas || ventas.length === 0) {
        LoggerAPI.warn("No se encontraron ventas registradas en el sistema");
        return [];
      } else {
        LoggerAPI.info(`Se obtuvieron correctamente ${ventas.length} ventas`);
        return ventas;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al obtener las ventas. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Busca una venta específica por su ID.
   * 
   * @param {number} ventaId - Identificador único de la venta.
   * @returns {Promise<Venta | null>} La venta encontrada o `null` si no existe.
   * @throws {Error} Lanza una excepción si ocurre un error durante la búsqueda.
   */
  async getVentaById(ventaId: number): Promise<Venta> {
    LoggerAPI.info(`Se inicia la búsqueda de la venta con ID: ${ventaId}`);

    try {
      const venta = await this.ventaRepositorio.findOneBy({ ventaId });

      if (venta !== null) {
        LoggerAPI.info(`Se obtuvo correctamente la venta con ID ${ventaId}`);
        return venta;
      } else {
        LoggerAPI.warn(`No se encontró ninguna venta con ID ${ventaId}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar la venta por ID ${ventaId}. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Busca una venta específica utilizando su UUID.
   * 
   * @param {string} ventaUuid - Identificador UUID único de la venta.
   * @returns {Promise<Venta | null>} La venta encontrada o `null` si no existe.
   * @throws {Error} Lanza una excepción si ocurre un error durante la búsqueda.
   */
  async getVentaByUuid(ventaUuid: string): Promise<Venta> {
    LoggerAPI.info(`Se inicia la búsqueda de la venta con UUID: ${ventaUuid}`);

    try {
      const venta = await this.ventaRepositorio.findOneBy({ ventaUuid });

      if (venta !== null) {
        LoggerAPI.info(`Se obtuvo correctamente la venta con UUID ${ventaUuid}`);
        return venta;
      } else {
        LoggerAPI.warn(`No se encontró ninguna venta con UUID ${ventaUuid}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar la venta por UUID ${ventaUuid}. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Inserta una nueva venta en la base de datos.
   * 
   * @param {Venta} venta - Objeto de tipo Venta a registrar.
   * @returns {Promise<boolean>} `true` si la inserción fue exitosa, `false` en caso contrario.
   * @throws {Error} Lanza una excepción si ocurre un error durante el registro.
   */
  async agregarVenta(venta: Venta): Promise<boolean> {
    LoggerAPI.info("Se inicia el proceso de registro de una nueva venta en la base de datos");

    try {
      const resultado = await this.ventaRepositorio.insert(venta);

      if (resultado.identifiers.length > 0) {
        LoggerAPI.info(`La venta fue registrada exitosamente con ID ${resultado.identifiers[0].id}`);
        return true;
      } else {
        LoggerAPI.warn("La inserción de la venta no devolvió un identificador, podría no haberse completado correctamente");
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al registrar la venta en la base de datos: ${error}`);
      throw error;
    }
  }

  /**
   * Actualiza una venta existente en la base de datos.
   * 
   * @param {Venta} venta - Objeto de tipo Venta con los datos actualizados.
   * @returns {Promise<boolean>} `true` si la actualización fue exitosa, `false` si no se encontró el registro.
   * @throws {Error} Lanza una excepción si ocurre un error durante la actualización.
   */
  async actualizarVenta(venta: Venta): Promise<boolean> {
    LoggerAPI.info(`Se inicia la actualización de la venta con ID: ${venta.ventaId}`);

    try {
      const resultado = await this.ventaRepositorio.update(
        { ventaId: venta.ventaId },
        venta
      );

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`La venta con ID ${venta.ventaId} fue actualizada exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se encontró una venta con ID ${venta.ventaId} para actualizar`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al actualizar la venta con ID ${venta.ventaId}. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Elimina una venta existente según su ID.
   * 
   * @param {number} ventaId - Identificador único de la venta a eliminar.
   * @returns {Promise<boolean>} `true` si la eliminación fue exitosa, `false` si no se encontró el registro.
   * @throws {Error} Lanza una excepción si ocurre un error durante la eliminación.
   */
  async eliminarVentaById(ventaId: number): Promise<boolean> {
    LoggerAPI.info(`Se inicia la eliminación de la venta con ID: ${ventaId}`);

    try {
      const resultado = await this.ventaRepositorio.delete({ ventaId });

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`La venta con ID ${ventaId} fue eliminada exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se encontró una venta con ID ${ventaId} para eliminar`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al eliminar la venta con ID ${ventaId}. Detalle del error: ${error}`);
      throw error;
    }
  }
}

export {VentaDAO}