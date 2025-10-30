import { ProductoIDAO } from "@data.dao/producto.dao";
import { Producto } from "@entity/producto.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class ProductoDAO implements ProductoIDAO{
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
    getProductoByID(productoID: number): Producto {
        throw new Error("Method not implemented.");
    }
    getProductoByUUID(productoUUID: string): Producto {
        throw new Error("Method not implemented.");
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