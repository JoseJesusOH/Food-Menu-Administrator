/**
 * Importaciones necesarias para el DAO de VentaProducto:
 * - {@link VentaProductoIDAO}: interfaz que define los métodos del DAO.
 * - {@link VentaProducto}: entidad que representa la relación entre una venta y los productos asociados.
 * - {@link Conexion}: utilidad para obtener el repositorio de TypeORM.
 * - {@link LoggerAPI}: utilidad para registrar logs de información, advertencia y error.
 */
import { VentaProductoIDAO } from "@data.dao/venta-producto.dao";
import { VentaProducto } from "@entity/venta-producto.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Clase que implementa la interfaz {@link VentaProductoIDAO} para gestionar
 * la persistencia de los productos asociados a las ventas en la base de datos.
 *
 * Proporciona métodos para:
 * - Consultar registros de productos asociados a ventas.
 * - Buscar relaciones por Id o UUID.
 * - Registrar, actualizar y eliminar productos asociados a ventas.
 */
class VentaProductoDAO implements VentaProductoIDAO {

  /** Repositorio de VentaProducto obtenido a través de la conexión */
  ventaProductoRepositorio = Conexion.getRepository(VentaProducto);

  /**
   * Busca una relación {@link VentaProducto} por su identificador numérico.
   *
   * @param {Number} ventaProductoId - Identificador único del registro venta-producto.
   * @returns {Promise<VentaProducto>} Promesa que resuelve con el registro encontrado o `null` si no existe.
   *
   * Registra logs de inicio, éxito o advertencia en caso de no encontrar resultados.
   */
  async getVentaProductoById(ventaProductoId: Number): Promise<VentaProducto> {
    LoggerAPI.info(`Se inicia la búsqueda de VentaProducto con ID: ${ventaProductoId}`);

    try {
      const ventaProducto = await this.ventaProductoRepositorio.findOneBy({
        ventaProductoId: ventaProductoId.valueOf(),
      });

      if (ventaProducto !== null) {
        LoggerAPI.info(`Se obtuvo correctamente el registro VentaProducto con ID ${ventaProductoId}`);
        return ventaProducto;
      } else {
        LoggerAPI.warn(`No se encontró un registro VentaProducto con ID ${ventaProductoId}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar VentaProducto por ID. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Busca una relación {@link VentaProducto} por su UUID.
   *
   * @param {String} ventaProductoUuid - Identificador único universal (UUID) del registro.
   * @returns {Promise<VentaProducto>} Promesa que resuelve con el registro encontrado o `null` si no existe.
   *
   * Registra logs de inicio, éxito o advertencia en caso de no encontrar resultados.
   */
  async getVentaProductoByUuid(ventaProductoUuid: String): Promise<VentaProducto> {
    LoggerAPI.info(`Se inicia la búsqueda de VentaProducto con UUID: ${ventaProductoUuid}`);

    try {
      const ventaProducto = await this.ventaProductoRepositorio.findOneBy({
        ventaProductoUuid: ventaProductoUuid.toString(),
      });

      if (ventaProducto !== null) {
        LoggerAPI.info(`Se obtuvo correctamente el registro VentaProducto con UUID ${ventaProductoUuid}`);
        return ventaProducto;
      } else {
        LoggerAPI.warn(`No se encontró un registro VentaProducto con UUID ${ventaProductoUuid}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar VentaProducto por UUID. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Obtiene todos los productos asociados a una venta específica.
   *
   * @param {Number} ventaId - Identificador único de la venta.
   * @returns {Promise<VentaProducto[]>} Promesa que resuelve con una lista de productos asociados o un arreglo vacío.
   *
   * Actualmente retorna `null` hasta implementar la consulta real.
   */
  async getVentaProductoByIdVenta(ventaId: Number): Promise<VentaProducto[]> {
    return null;
    /*
    LoggerAPI.info(`Se inicia la búsqueda de productos asociados a la venta con ID: ${ventaId}`);

    try {
      const ventaProductos = await this.ventaProductoRepositorio.findBy({
        ventaId: ventaId.valueOf(),
      });

      if (!ventaProductos || ventaProductos.length === 0) {
        LoggerAPI.warn(`No se encontraron productos asociados a la venta con ID ${ventaId}`);
        return [];
      } else {
        LoggerAPI.info(`Se obtuvieron correctamente ${ventaProductos.length} productos asociados a la venta con ID ${ventaId}`);
        return ventaProductos;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al obtener los productos asociados a la venta con ID ${ventaId}. Detalle del error: ${error}`);
      throw error;
    }
    */
  }

  /**
   * Registra un nuevo producto dentro de una venta en la base de datos.
   *
   * @param {VentaProducto} ventaProducto - Objeto con los datos del producto vendido.
   * @returns {Promise<Boolean>} Promesa que indica si la inserción fue exitosa (`true`) o falló (`false`).
   *
   * Utiliza el método `insert` de TypeORM e informa mediante logs el resultado de la operación.
   */
  async agregarVentaProducto(ventaProducto: VentaProducto): Promise<Boolean> {
    LoggerAPI.info("Se inicia el proceso de registro de un nuevo VentaProducto en la base de datos");

    try {
      const resultado = await this.ventaProductoRepositorio.insert(ventaProducto);

      if (resultado.identifiers.length > 0) {
        LoggerAPI.info(`El registro VentaProducto fue insertado exitosamente con ID ${resultado.identifiers[0].id}`);
        return true;
      } else {
        LoggerAPI.warn("La inserción de VentaProducto no devolvió un identificador, podría no haberse completado correctamente");
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al registrar VentaProducto en la base de datos: ${error}`);
      throw error;
    }
  }

  /**
   * Actualiza la información de un producto asociado a una venta.
   *
   * @param {VentaProducto} ventaProducto - Objeto con los datos actualizados del producto vendido.
   * @returns {Promise<Boolean>} Promesa que indica si la actualización fue exitosa (`true`) o no (`false`).
   *
   * Verifica si el registro fue afectado para determinar el éxito de la operación.
   */
  async actualizarVentaProducto(ventaProducto: VentaProducto): Promise<Boolean> {
    LoggerAPI.info(`Se inicia la actualización del registro VentaProducto con ID: ${ventaProducto.ventaProductoId}`);

    try {
      const resultado = await this.ventaProductoRepositorio.update(
        { ventaProductoId: ventaProducto.ventaProductoId },
        ventaProducto
      );

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`El registro VentaProducto con ID ${ventaProducto.ventaProductoId} fue actualizado exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se encontró un registro VentaProducto con ID ${ventaProducto.ventaProductoId} para actualizar`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al actualizar el registro VentaProducto con ID ${ventaProducto.ventaProductoId}. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Elimina una relación {@link VentaProducto} de la fuente de datos
   * usando su identificador numérico.
   *
   * @param {Number} ventaProductoId - Identificador único del registro venta-producto a eliminar.
   * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o falló (`false`).
   *
   * Utiliza el método `delete` del repositorio e informa el resultado mediante logs.
   */
  async eliminarVentaProductoById(ventaProductoId: Number): Promise<Boolean> {
    LoggerAPI.info(`Se inicia la eliminación del registro VentaProducto con ID: ${ventaProductoId}`);

    try {
      const resultado = await this.ventaProductoRepositorio.delete({
        ventaProductoId: ventaProductoId.valueOf(),
      });

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`El registro VentaProducto con ID ${ventaProductoId} fue eliminado exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se encontró un registro VentaProducto con ID ${ventaProductoId} para eliminar`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al eliminar el registro VentaProducto con ID ${ventaProductoId}. Detalle del error: ${error}`);
      throw error;
    }
  }
}
