/**
 * Importa la clase o entidad {@link VentaProducto}, la cual representa
 * la relación entre una venta y los productos asociados a ella.
 * 
 * Esta entidad generalmente incluye información como:
 * - Identificador numérico y UUID del registro
 * - Referencia a la venta (`Venta`)
 * - Producto vendido (`Producto`)
 * - Cantidad, subtotal, IVA y total por producto
 * 
 * Se utiliza en esta interfaz para definir las operaciones del DAO
 * que gestionan los objetos de tipo {@link VentaProducto}.
 */
import { VentaProducto } from "@entity/venta-producto.entity";

/**
 * Interfaz que define las operaciones de acceso a datos (DAO)
 * para la entidad {@link VentaProducto}.
 * 
 * Proporciona métodos para:
 * - Consultar productos asociados a una venta
 * - Buscar relaciones por ID o UUID
 * - Registrar nuevos productos en una venta
 * - Actualizar información de productos en una venta
 * - Eliminar registros de productos asociados a una venta
 * 
 * Esta interfaz actúa como contrato que deben implementar las clases
 * que gestionen la persistencia de los datos (por ejemplo, conexión a
 * bases de datos SQL, NoSQL o APIs externas).
 */
export interface VentaProductoIDAO {

  /**
   * Busca una relación {@link VentaProducto} por su identificador numérico.
   * 
   * @param {number} ventaProductoID - Identificador único del registro venta-producto.
   * @returns {VentaProducto} El registro correspondiente al ID especificado.
   */
  getVentaProductoByID(ventaProductoID: number): VentaProducto;

  /**
   * Busca una relación {@link VentaProducto} por su UUID.
   * 
   * @param {string} ventaProductoUUID - Identificador único universal (UUID) del registro.
   * @returns {VentaProducto} El registro correspondiente al UUID proporcionado.
   */
  getVentaProductoByUUID(ventaProductoUUID: string): VentaProducto;

  /**
   * Obtiene todos los productos asociados a una venta específica.
   * 
   * @param {number} ventaID - Identificador único de la venta.
   * @returns {VentaProducto[]} Arreglo con todos los productos asociados a la venta.
   */
  getVentaProductoByIDVenta(ventaID: number): VentaProducto[];

  /**
   * Registra un nuevo producto dentro de una venta en la fuente de datos.
   * 
   * @param {VentaProducto} ventaProducto - Objeto con los datos del producto vendido.
   * @returns {boolean} `true` si la inserción fue exitosa, `false` en caso contrario.
   */
  agregarVentaProducto(ventaProducto: VentaProducto): boolean;

  /**
   * Actualiza la información de un producto asociado a una venta.
   * 
   * @param {VentaProducto} ventaProducto - Objeto con los datos actualizados del producto vendido.
   * @returns {boolean} `true` si la actualización fue exitosa, `false` si falló.
   */
  actualizarVentaProducto(ventaProducto: VentaProducto): boolean;

  /**
   * Elimina una relación {@link VentaProducto} de la fuente de datos
   * usando su identificador numérico.
   * 
   * @param {number} ventaProductoID - Identificador único del registro venta-producto a eliminar.
   * @returns {boolean} `true` si la eliminación fue exitosa, `false` en caso contrario.
   */
  eliminarVentaProductoByID(ventaProductoID: number): boolean;
}
