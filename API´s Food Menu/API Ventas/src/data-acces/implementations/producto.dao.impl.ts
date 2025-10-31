import { ProductoIDAO } from "@data.dao/producto.dao";
import { Producto } from "@entity/producto.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class ProductoDAO implements ProductoIDAO {
  productoRepositorio = Conexion.getRepository(Producto);

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
  actualizarProducto(producto: Producto): boolean {
    throw new Error("Method not implemented.");
  }
  eliminarProductoByID(productoID: number): boolean {
    throw new Error("Method not implemented.");
  }

}