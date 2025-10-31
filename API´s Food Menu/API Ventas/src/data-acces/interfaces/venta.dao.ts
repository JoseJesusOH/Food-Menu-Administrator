/**
 * Importa la clase o entidad {@link Venta}, que representa
 * el modelo de datos de una venta dentro del sistema.
 * 
 * Esta entidad generalmente incluye información como:
 * - Identificador numérico y UUID
 * - Fecha de la venta
 * - Cliente asociado
 * - Productos vendidos, totales, IVA, etc.
 * 
 * Se utiliza en esta interfaz para definir las operaciones
 * del DAO que manipulan objetos de tipo {@link Venta}.
 */
import { Venta } from "@entity/venta.entity";

/**
 * Interfaz que define las operaciones de acceso a datos (DAO)
 * para la entidad {@link Venta}.
 * 
 * Proporciona métodos para:
 * - Consultar todas las ventas
 * - Buscar ventas por Id o UUID
 * - Registrar nuevas ventas
 * - Actualizar ventas existentes
 * - Eliminar ventas por su Id
 * 
 * Esta interfaz establece el contrato que deben cumplir las
 * implementaciones concretas encargadas de interactuar con la
 * base de datos o la fuente de datos correspondiente.
 */
export interface VentaIDAO {

  /**
   * Obtiene todas las ventas registradas en la fuente de datos.
   * 
   * @returns {Promise<Venta[]>} Promesa que resuelve con un arreglo
   * que contiene todas las ventas disponibles.
   */
  getVentas(): Promise<Venta[]>;

  /**
   * Busca y devuelve una venta específica según su identificador numérico.
   * 
   * @param {Number} ventaId - Identificador único de la venta.
   * @returns {Promise<Venta>} Promesa que resuelve con la venta correspondiente al Id especificado.
   */
  getVentaById(ventaId: Number): Promise<Venta>;

  /**
   * Busca y devuelve una venta según su UUID.
   * 
   * @param {String} ventaUuid - Identificador único universal (UUID) de la venta.
   * @returns {Promise<Venta>} Promesa que resuelve con la venta correspondiente al UUID proporcionado.
   */
  getVentaByUuid(ventaUuid: String): Promise<Venta>;

  /**
   * Registra una nueva venta en la fuente de datos.
   * 
   * @param {Venta} venta - Objeto que contiene los datos de la venta a registrar.
   * @returns {Promise<Boolean>} Promesa que indica si la operación fue exitosa (`true`) o falló (`false`).
   */
  agregarVenta(venta: Venta): Promise<Boolean>;

  /**
   * Actualiza la información de una venta existente.
   * 
   * @param {Venta} venta - Objeto con los datos actualizados de la venta.
   * @returns {Promise<Boolean>} Promesa que indica si la actualización fue exitosa (`true`) o falló (`false`).
   */
  actualizarVenta(venta: Venta): Promise<Boolean>;

  /**
   * Elimina una venta de la fuente de datos usando su identificador numérico.
   * 
   * @param {Number} ventaId - Identificador único de la venta a eliminar.
   * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o falló (`false`).
   */
  eliminarVentaById(ventaId: Number): Promise<Boolean>;
}
