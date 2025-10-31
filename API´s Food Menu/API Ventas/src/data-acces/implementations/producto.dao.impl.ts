/**
 * Importaciones necesarias para el DAO de Producto:
 * - {@link ProductoIDAO}: interfaz que define los métodos del DAO.
 * - {@link Producto}: entidad que representa la tabla o colección de productos.
 * - {@link Conexion}: utilidad para obtener el repositorio de TypeORM.
 * - {@link LoggerAPI}: utilidad para registrar logs de información, advertencia y error.
 */
import { ProductoIDAO } from "@data.dao/producto.dao";
import { Producto } from "@entity/producto.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * Clase que implementa la interfaz {@link ProductoIDAO} para gestionar
 * la persistencia de productos en la base de datos.
 * 
 * Proporciona métodos para:
 * - Consultar todos los productos
 * - Buscar productos por Id o UUID
 * - Registrar nuevos productos
 * - Actualizar productos existentes
 * - Eliminar productos por su Id
 */
export class ProductoDAO implements ProductoIDAO {

  /** Repositorio de productos obtenido a través de la conexión */
  productoRepositorio = Conexion.getRepository(Producto);

  /**
   * Obtiene todos los productos registrados en la base de datos.
   * 
   * @returns {Promise<Producto[]>} Promesa que resuelve con un arreglo de productos.
   * 
   * Registra logs de inicio, éxito o advertencia en caso de no encontrar productos.
   */
  async getProductos(): Promise<Producto[]> {
    LoggerAPI.info("Se inicia la búsqueda de productos en la base de datos.");

    try {
      const productos = await this.productoRepositorio.find();

      if (!productos || productos.length === 0) {
        LoggerAPI.warn("No se han encontrado productos en el sistema.");
        return [];
      } else {
        LoggerAPI.info(`Se han obtenido los productos exitosamente. Total: ${productos.length}`);
        return productos;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al obtener los productos. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Busca un producto por su identificador numérico.
   * 
   * @param {Number} productoId - Id del producto a buscar.
   * @returns {Promise<Producto>} Promesa que resuelve con el producto o null si no se encuentra.
   */
  async getProductoById(productoId: Number): Promise<Producto> {
    LoggerAPI.info(`Se inicia la obtención del producto con ID: ${productoId}`);

    try {
      const producto = await this.productoRepositorio.findOneBy({ productoId: productoId.valueOf() });

      if (producto !== null) {
        LoggerAPI.info(`Se ha obtenido correctamente el producto con ID ${productoId}`);
        return producto;
      } else {
        LoggerAPI.warn(`No se encontró un producto con el ID ${productoId}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar el producto por ID. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Busca un producto por su UUID.
   * 
   * @param {String} productoUuid - UUID del producto a buscar.
   * @returns {Promise<Producto>} Promesa que resuelve con el producto o null si no se encuentra.
   */
  async getProductoByUuid(productoUuid: String): Promise<Producto> {
    LoggerAPI.info(`Se inicia la obtención del producto con UUID: ${productoUuid}`);

    try {
      const producto = await this.productoRepositorio.findOneBy({ productoUuid: productoUuid.toString() });

      if (producto !== null) {
        LoggerAPI.info(`Se ha obtenido correctamente el producto con UUID ${productoUuid}`);
        return producto;
      } else {
        LoggerAPI.warn(`No se encontró un producto con el UUID ${productoUuid}`);
        return null;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al buscar el producto por UUID. Detalle del error: ${error}`);
      throw error;
    }
  }

  /**
   * Inserta un nuevo producto en la base de datos.
   * 
   * @param {Producto} producto - Objeto con los datos del producto a registrar.
   * @returns {Promise<Boolean>} Promesa que indica si la operación fue exitosa (`true`) o falló (`false`).
   */
  async agregarProducto(producto: Producto): Promise<Boolean> {
    LoggerAPI.info("Se inicia el proceso de registro de un nuevo producto en la base de datos");

    try {
      const resultado = await this.productoRepositorio.insert(producto);

      if (resultado.identifiers.length > 0) {
        LoggerAPI.info(`El producto '${producto['nombre'] ?? 'sin nombre'}' fue registrado exitosamente con ID ${resultado.identifiers[0].id}`);
        return true;
      } else {
        LoggerAPI.warn("La inserción del producto no devolvió un identificador, podría no haberse completado correctamente");
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al registrar el producto en la base de datos: ${error}`);
      throw error;
    }
  }

  /**
   * Actualiza un producto existente en la base de datos.
   * 
   * @param {Producto} producto - Objeto con los datos actualizados del producto.
   * @returns {Promise<Boolean>} Promesa que indica si la actualización fue exitosa (`true`) o falló (`false`).
   */
  async actualizarProducto(producto: Producto): Promise<Boolean> {
    LoggerAPI.info(`Se inicia la actualización del producto con ID ${producto['id'] ?? 'desconocido'}`);

    try {
      const resultado = await this.productoRepositorio.update(producto['id'], producto);

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`El producto con ID ${producto['id']} fue actualizado exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se actualizó ningún producto con ID ${producto['id']}`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al actualizar el producto en la base de datos: ${error}`);
      throw error;
    }
  }

  /**
   * Elimina un producto de la base de datos usando su identificador numérico.
   * 
   * @param {Number} productoId - Id del producto a eliminar.
   * @returns {Promise<Boolean>} Promesa que indica si la eliminación fue exitosa (`true`) o falló (`false`).
   */
  async eliminarProductoById(productoId: Number): Promise<Boolean> {
    LoggerAPI.info(`Se inicia la eliminación del producto con ID ${productoId}`);

    try {
      const resultado = await this.productoRepositorio.delete(productoId.valueOf());

      if (resultado.affected && resultado.affected > 0) {
        LoggerAPI.info(`El producto con ID ${productoId} fue eliminado exitosamente`);
        return true;
      } else {
        LoggerAPI.warn(`No se encontró ningún producto con ID ${productoId} para eliminar`);
        return false;
      }

    } catch (error) {
      LoggerAPI.warn(`Error al eliminar el producto en la base de datos: ${error}`);
      throw error;
    }
  }

}
