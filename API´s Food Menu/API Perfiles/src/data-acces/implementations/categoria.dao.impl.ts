/**
 * Importaciones requeridas del sistema modelo Categoria e interface CategoriaIDAO
 */
import { Categoria } from "@entity/categoria.entity";
import {CategoriaIDAO} from "@data.dao/categoria.dao"
import { LoggerAPI } from "@utility/logger";
import { Conexion  } from "@utility/conexion";

/**
 * Implementaccion correspondiente a la categoria
 */
export class CategoriaDAO implements CategoriaIDAO{
   categoriaRepositorio = Conexion.getRepository(Categoria);
  /** 1
     * Metodo para obtener todas las categorias
     */
  async getCategorias(): Promise<Categoria[]> {
    LoggerAPI.info("Iniciando obtención de categorías en DB");
    try {
      const categorias = await this.categoriaRepositorio.find();
      if (!categorias || categorias.length === 0) {
        LoggerAPI.warn("No se encontraron categorías en la base de datos");
        return [];
      } else {
        LoggerAPI.info(
          `Se han obtenido ${categorias.length} categorías exitosamente`
        );
        return categorias;
      }
    } catch (error) {
      LoggerAPI.error("Error al obtener categorías", { error });
      throw error; 
    }
  }

    /**
     * Metodo para obtener una categoria del sistema por su id
     */
    getCategoriaByID(categoriaID: Number): Categoria {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar una categoria
     */
    agregarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar una categoria por id
     */
    eliminarCategoriaByID(categoriaID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar una categoria del sistema. 
     */
    actualizarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }

}