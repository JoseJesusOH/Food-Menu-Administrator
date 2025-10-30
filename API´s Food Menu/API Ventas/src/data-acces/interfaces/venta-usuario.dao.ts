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
 * - Buscar asociaciones por ID o UUID
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
   * @param {number} ventaID - Identificador único de la venta.
   * @returns {VentaUsuario[]} Arreglo con todos los usuarios relacionados a la venta indicada.
   */
  getVentasUsuarioByIDVenta(ventaID: number): VentaUsuario[];

  /**
   * Obtiene una única relación {@link VentaUsuario} asociada a una venta específica.
   * 
   * @param {number} ventaID - Identificador único de la venta.
   * @returns {VentaUsuario} La relación correspondiente a la venta especificada.
   */
  getVentaUsuarioByIDVenta(ventaID: number): VentaUsuario;

  /**
   * Busca una relación {@link VentaUsuario} por su identificador numérico.
   * 
   * @param {number} ventaUsuarioID - Identificador único del registro venta-usuario.
   * @returns {VentaUsuario} El registro correspondiente al ID especificado.
   */
  getVentaUsuarioByID(ventaUsuarioID: number): VentaUsuario;

  /**
   * Busca una relación {@link VentaUsuario} por su UUID.
   * 
   * @param {string} ventaUsuarioUUID - Identificador único universal (UUID) del registro.
   * @returns {VentaUsuario} El registro correspondiente al UUID proporcionado.
   */
  getVentaUsuarioByUUID(ventaUsuarioUUID: string): VentaUsuario;

  /**
   * Agrega una nueva relación {@link VentaUsuario} a la fuente de datos.
   * 
   * @param {VentaUsuario} ventaUsuario - Objeto con los datos de la relación venta-usuario a registrar.
   * @returns {boolean} `true` si la inserción fue exitosa, `false` en caso contrario.
   */
  agregarVentaUsuario(ventaUsuario: VentaUsuario): boolean;

  /**
   * Elimina una relación {@link VentaUsuario} de la fuente de datos usando su identificador numérico.
   * 
   * @param {number} ventaUsuarioID - Identificador único del registro venta-usuario a eliminar.
   * @returns {boolean} `true` si la eliminación fue exitosa, `false` si falló.
   */
  eliminarVentaUsuarioByID(ventaUsuarioID: number): boolean;
}
