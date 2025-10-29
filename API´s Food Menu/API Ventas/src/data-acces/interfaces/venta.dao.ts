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
 * - Buscar ventas por ID o UUID
 * - Registrar nuevas ventas
 * - Actualizar ventas existentes
 * - Eliminar ventas por su ID
 * 
 * Esta interfaz establece el contrato que deben cumplir las
 * implementaciones concretas encargadas de interactuar con la
 * base de datos o la fuente de datos correspondiente.
 */
export interface VentaIDAO {

  /**
   * Obtiene todas las ventas registradas en la fuente de datos.
   * 
   * @returns {Venta[]} Arreglo con todas las ventas disponibles.
   */
  getVentas(): Venta[];

  /**
   * Busca y devuelve una venta específica según su identificador numérico.
   * 
   * @param {number} ventaID - Identificador único de la venta.
   * @returns {Venta} La venta correspondiente al ID especificado.
   */
  getVentaByID(ventaID: number): Venta;

  /**
   * Busca y devuelve una venta según su UUID.
   * 
   * @param {string} ventaUUID - Identificador único universal (UUID) de la venta.
   * @returns {Venta} La venta correspondiente al UUID proporcionado.
   */
  getVentaByUUID(ventaUUID: string): Venta;

  /**
   * Registra una nueva venta en la fuente de datos.
   * 
   * @param {Venta} venta - Objeto que contiene los datos de la venta a registrar.
   * @returns {boolean} `true` si la operación fue exitosa, `false` en caso contrario.
   */
  agregarVenta(venta: Venta): boolean;

  /**
   * Actualiza la información de una venta existente.
   * 
   * @param {Venta} venta - Objeto con los datos actualizados de la venta.
   * @returns {boolean} `true` si la actualización fue exitosa, `false` si falló.
   */
  actualizarVenta(venta: Venta): boolean;

  /**
   * Elimina una venta de la fuente de datos usando su identificador numérico.
   * 
   * @param {number} ventaID - Identificador único de la venta a eliminar.
   * @returns {boolean} `true` si la eliminación fue exitosa, `false` en caso contrario.
   */
  eliminarVentaByID(ventaID: number): boolean;
}
