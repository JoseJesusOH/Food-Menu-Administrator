/**
 * Importa la clase o entidad {@link Producto}, la cual representa
 * el modelo de datos de un producto dentro del sistema.
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
 * - Buscar productos por ID o UUID
 * - Agregar nuevos productos
 * - Actualizar productos existentes
 * - Eliminar productos por su ID
 * 
 * Esta interfaz establece el contrato que deben cumplir todas las
 * implementaciones del acceso a datos (por ejemplo: acceso a una base
 * de datos relacional, NoSQL o fuente de datos remota).
 */
export interface ProductoIDAO {

  /**
   * Obtiene todos los productos registrados en la fuente de datos.
   * 
   * @returns {Producto[]} Arreglo que contiene todos los productos existentes.
   */
  getProductos(): Promise<Producto[]>;

  /**
   * Busca y devuelve un producto específico según su identificador numérico.
   * 
   * @param {number} productoID - Identificador único del producto.
   * @returns {Producto} El producto correspondiente al ID especificado.
   */
  getProductoByID(productoID: number): Producto;

  /**
   * Busca y devuelve un producto según su UUID.
   * 
   * @param {string} productoUUID - Identificador único universal (UUID) del producto.
   * @returns {Producto} El producto correspondiente al UUID proporcionado.
   */
  getProductoByUUID(productoUUID: string): Producto;

  /**
   * Inserta un nuevo producto en la fuente de datos.
   * 
   * @param {Producto} producto - Objeto con los datos del producto a registrar.
   * @returns {boolean} `true` si la operación fue exitosa, `false` si falló.
   */
  agregarProducto(producto: Producto): boolean;

  /**
   * Actualiza la información de un producto existente.
   * 
   * @param {Producto} producto - Objeto con los datos actualizados del producto.
   * @returns {boolean} `true` si la actualización fue exitosa, `false` en caso contrario.
   */
  actualizarProducto(producto: Producto): boolean;

  /**
   * Elimina un producto de la fuente de datos usando su identificador numérico.
   * 
   * @param {number} productoID - Identificador único del producto a eliminar.
   * @returns {boolean} `true` si la eliminación fue exitosa, `false` si falló.
   */
  eliminarProductoByID(productoID: number): boolean;
}
