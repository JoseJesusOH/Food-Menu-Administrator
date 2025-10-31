/**
 * Importación de la entidad {@link Producto}, que representa
 * los datos y estructura de los productos en el sistema.
 * 
 * Esta entidad suele contener atributos como:
 * - ID numérico del producto
 * - UUID único
 * - Nombre, descripción, precio, existencia, etc.
 * 
 * Se utiliza en esta interfaz para definir los métodos del DAO
 * que manipulan objetos de tipo {@link Producto}.
 */
import { Producto } from "@entity/producto.entity";

/**
 * Interfaz que define las operaciones de acceso a datos (DAO)
 * para la entidad {@link Producto}.
 * 
 * Proporciona los métodos básicos para:
 * - Consultar productos
 * - Buscar productos por Id o UUID
 * - Agregar nuevos productos
 * - Actualizar productos existentes
 * - Eliminar productos por su Id
 * 
 * Esta interfaz establece el contrato que deben cumplir todas las
 * implementaciones del acceso a datos (por ejemplo: acceso a una base
 * de datos relacional, NoSQL o fuente de datos remota).
 */
export interface ProductoIDAO {

  /**
   * Obtiene todos los productos registrados en la fuente de datos.
   * 
   * @returns {Promise<Producto[]>} Promesa que resuelve con un arreglo
   * de todos los productos existentes.
   */
  getProductos(): Promise<Producto[]>;

  /**
   * Busca y devuelve un producto específico según su identificador numérico.
   * 
   * @param {Number} productoId - Identificador único del producto.
   * @returns {Promise<Producto>} Promesa que resuelve con el producto correspondiente al Id especificado.
   */
  getProductoById(productoId: Number): Promise<Producto>;

  /**
   * Busca y devuelve un producto según su UUID.
   * 
   * @param {String} productoUuid - Identificador único universal (UUID) del producto.
   * @returns {Promise<Producto>} Promesa que resuelve con el producto correspondiente al UUID proporcionado.
   */
  getProductoByUuid(productoUuid: String): Promise<Producto>;

  /**
   * Inserta un nuevo producto en la fuente de datos.
   * 
   * @param {Producto} producto - Objeto con los datos del producto a registrar.
   * @returns {Promise<Boolean>} Promesa que indica si la operación fue exitosa (`true`) o falló (`false`).
   */
  agregarProducto(producto: Producto): Promise<Boolean>;

  /**
   * Actualiza la información de un producto existente.
   * 
   * @param {Producto} producto - Objeto con los datos actualizados del producto.
   * @returns {Promise<Boolean>} Promesa que indica si la actualización fue exitosa (`true`) o no (`false`).
   */
  actualizarProducto(producto: Producto): Promise<Boolean>;

  /**
   * Elimina un producto de la fuente de datos usando su identificador numérico.
   * 
   * @param {Number} productoId - Identificador único del producto a eliminar.
   * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o falló (`false`).
   */
  eliminarProductoById(productoId: Number): Promise<Boolean>;
}

