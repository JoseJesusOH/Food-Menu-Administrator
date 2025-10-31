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
  agregarProducto(producto: Producto): boolean {
    throw new Error("Method not implemented.");
  }
  actualizarProducto(producto: Producto): boolean {
    throw new Error("Method not implemented.");
  }
  eliminarProductoByID(productoID: number): boolean {
    throw new Error("Method not implemented.");
  }

}