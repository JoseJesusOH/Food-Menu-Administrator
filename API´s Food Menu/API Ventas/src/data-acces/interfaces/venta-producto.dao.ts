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
 * - Buscar relaciones por Id o UUID
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
   * @param {Number} ventaProductoId - Identificador único del registro venta-producto.
   * @returns {Promise<VentaProducto>} Promesa que resuelve con el registro correspondiente al Id especificado.
   */
  getVentaProductoById(ventaProductoId: Number): Promise<VentaProducto>;

  /**
   * Busca una relación {@link VentaProducto} por su UUID.
   * 
   * @param {String} ventaProductoUuid - Identificador único universal (UUID) del registro.
   * @returns {Promise<VentaProducto>} Promesa que resuelve con el registro correspondiente al UUID proporcionado.
   */
  getVentaProductoByUuid(ventaProductoUuid: String): Promise<VentaProducto>;

  /**
   * Obtiene todos los productos asociados a una venta específica.
   * 
   * @param {Number} ventaId - Identificador único de la venta.
   * @returns {Promise<VentaProducto[]>} Promesa que resuelve con todos los productos asociados a la venta.
   */
  getVentaProductoByIdVenta(ventaId: Number): Promise<VentaProducto[]>;

  /**
   * Registra un nuevo producto dentro de una venta en la fuente de datos.
   * 
   * @param {VentaProducto} ventaProducto - Objeto con los datos del producto vendido.
   * @returns {Promise<Boolean>} Promesa que indica si la inserción fue exitosa (`true`) o falló (`false`).
   */
  agregarVentaProducto(ventaProducto: VentaProducto): Promise<Boolean>;

  /**
   * Actualiza la información de un producto asociado a una venta.
   * 
   * @param {VentaProducto} ventaProducto - Objeto con los datos actualizados del producto vendido.
   * @returns {Promise<Boolean>} Promesa que indica si la actualización fue exitosa (`true`) o no (`false`).
   */
  actualizarVentaProducto(ventaProducto: VentaProducto): Promise<Boolean>;

  /**
   * Elimina una relación {@link VentaProducto} de la fuente de datos
   * usando su identificador numérico.
   * 
   * @param {Number} ventaProductoId - Identificador único del registro venta-producto a eliminar.
   * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o falló (`false`).
   */
  eliminarVentaProductoById(ventaProductoId: Number): Promise<Boolean>;
}
