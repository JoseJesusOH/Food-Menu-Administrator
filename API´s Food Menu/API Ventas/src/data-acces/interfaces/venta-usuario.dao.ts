/**
 * Importa la clase o entidad {@link VentaUsuario}, la cual representa
 * la relación entre una venta y los usuarios asociados a ella.
 * 
 * Esta entidad suele incluir información como:
 * - Identificador numérico y UUID del registro
 * - Referencia a la venta (`Venta`)
 * - Referencia al usuario (`Usuario`)
 * - Roles o acciones del usuario dentro de la venta (por ejemplo, vendedor, cajero, etc.)
 * 
 * Se utiliza en esta interfaz para definir las operaciones de acceso
 * a datos que manipulan objetos de tipo {@link VentaUsuario}.
 */
import { VentaUsuario } from "@entity/venta-usuario.entity";

/**
 * Interfaz que define las operaciones de acceso a datos (DAO)
 * para la entidad {@link VentaUsuario}.
 * 
 * Proporciona métodos para:
 * - Consultar usuarios asociados a una venta
 * - Buscar asociaciones por Id o UUID
 * - Agregar nuevas relaciones entre ventas y usuarios
 * - Eliminar registros de relaciones existentes
 * 
 * Esta interfaz actúa como contrato que deben cumplir las implementaciones
 * concretas encargadas de interactuar con la base de datos o la fuente de datos.
 */
export interface VentaUsuarioIDAO {

  /**
   * Obtiene todas las relaciones {@link VentaUsuario} asociadas a una venta específica.
   * 
   * @param {Number} ventaId - Identificador único de la venta.
   * @returns {Promise<VentaUsuario[]>} Promesa que resuelve con todos los usuarios relacionados a la venta indicada.
   */
  getVentasUsuarioByIdVenta(ventaId: Number): Promise<VentaUsuario[]>;

  /**
   * Obtiene una única relación {@link VentaUsuario} asociada a una venta específica.
   * 
   * @param {Number} ventaId - Identificador único de la venta.
   * @returns {Promise<VentaUsuario>} Promesa que resuelve con la relación correspondiente a la venta especificada.
   */
  getVentaUsuarioByIdVenta(ventaId: Number): Promise<VentaUsuario>;

  /**
   * Busca una relación {@link VentaUsuario} por su identificador numérico.
   * 
   * @param {Number} ventaUsuarioId - Identificador único del registro venta-usuario.
   * @returns {Promise<VentaUsuario>} Promesa que resuelve con el registro correspondiente al Id especificado.
   */
  getVentaUsuarioById(ventaUsuarioId: Number): Promise<VentaUsuario>;

  /**
   * Busca una relación {@link VentaUsuario} por su UUID.
   * 
   * @param {String} ventaUsuarioUuid - Identificador único universal (UUID) del registro.
   * @returns {Promise<VentaUsuario>} Promesa que resuelve con el registro correspondiente al UUID proporcionado.
   */
  getVentaUsuarioByUuid(ventaUsuarioUuid: String): Promise<VentaUsuario>;

  /**
   * Agrega una nueva relación {@link VentaUsuario} a la fuente de datos.
   * 
   * @param {VentaUsuario} ventaUsuario - Objeto con los datos de la relación venta-usuario a registrar.
   * @returns {Promise<Boolean>} Promesa que indica si la inserción fue exitosa (`true`) o falló (`false`).
   */
  agregarVentaUsuario(ventaUsuario: VentaUsuario): Promise<Boolean>;

  /**
   * Elimina una relación {@link VentaUsuario} de la fuente de datos usando su identificador numérico.
   * 
   * @param {Number} ventaUsuarioId - Identificador único del registro venta-usuario a eliminar.
   * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o falló (`false`).
   */
  eliminarVentaUsuarioById(ventaUsuarioId: Number): Promise<Boolean>;
}
