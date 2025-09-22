/**
 * Implementacion de los metodos de la interfaz CategoriaIDAO
 */
import { Categoria } from "@entity/categoria.entity";
import { CategoriaIDAO } from "@data.dao/categoria.dao";
import { Conexion } from "@utility/conexion"
import { LoggerAPI } from "@utility/logger"
import e = require("express");

/**
 * Implementacion de los metodos de la interfaz CategoriaIDAO
 */
export class CategoriaDAO implements CategoriaIDAO {
  categoriaRepositorio = Conexion.getRepository(Categoria);
  /** 1
     * Metodo para obtener todas las categorias
     */
  async getCategorias(): Promise<Categoria[]> {
    LoggerAPI.info("Iniciando obtención de categorías desde DB");
    try {
      const categorias = await this.categoriaRepositorio.find();
      if (!categorias || categorias.length === 0) {
        LoggerAPI.warn("No se encontraron categorías en la base de datos");
        // throw new Error("No se encontraron categorías");
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
  /** 2
   * Metodo para obtener una categoria por su ID
   */
  async getCategoriaById(categoriaId: Number): Promise<Categoria> {
    LoggerAPI.info("Iniciando obtención de categoría por id desde DB");
    try {
      const categoria = await this.categoriaRepositorio.findOneBy({ categoriaId: categoriaId });
      if (categoria !== null) {
        LoggerAPI.info(`Se encontro la categoria buscada con id ${categoriaId}`)
        return categoria;
      }
      else {
        LoggerAPI.warn("No se encontro la categoria buscada")
        // throw new Error("No se encontro la categoria buscada")
        return null;
      }
    } catch (error) {
      LoggerAPI.warn(`Error presentado en la busqueda por id: ${error}`)
      throw error;
    }
  }
  /** 3
   * Metodo para obtener una categoria por su UUID
   */
  async getCategoriaByUuid(categoriaUuid: String): Promise<Categoria> {
    LoggerAPI.info("Iniciando la busqueda de categoria por UUID")
    try {
      const categoria = await this.categoriaRepositorio.findOneBy({ categoriaUuid: categoriaUuid });
      if (categoria !== null) {
        LoggerAPI.info(`Se obtuvo correctamente la categoria con UUID ${categoriaUuid}`)
        return categoria;
      } else {
        LoggerAPI.warn("No se encontro la categoria con el UUID proporcionado")
        return null;
      }
    } catch (error) {
      LoggerAPI.warn(`Error presentado durante la busqueda por UUID: ${error}`)
      throw error;
    }
  }
  /** 4
   * Metodo para agregar una nueva categoria
   */
  async agregarCategoria(categoria: Categoria): Promise<Boolean> {
    LoggerAPI.info("Se realiza la operacion de agregar categoria en DB")
    try {
      const resultado = await this.categoriaRepositorio.insert(categoria)
      if (resultado.identifiers.length) {
        LoggerAPI.info(`Se ha registrado la categoria existosamente`)
        return new Boolean(true);
      } else {
        LoggerAPI.warn("No se ha registrado la categoria")
        return new Boolean(false)
      }
    } catch (error) {
      LoggerAPI.warn(`Error presenrtado durante la inserccion de categoria: ${error}`)
      throw error;
    }
  }
  /** 5
   * Metodo para eliminar una categoria por su ID
   */
  async eliminarCategoriaById(categoriaId: Number): Promise<Boolean> {
    LoggerAPI.info("Se inicia el metodo para eliminar una categoria por id en DB")
    try {
      const resultado = await this.categoriaRepositorio.delete({ categoriaId: categoriaId.valueOf() })
      if (resultado.affected > 0) {
        LoggerAPI.info(`Se ha eliminado una categoria con id ${categoriaId}`)
        return new Boolean(true)
      } else {
        LoggerAPI.warn(`No se ha eliminado la categoria con ID ${categoriaId}`)
        return new Boolean(false)
      }
    } catch (error) {
      LoggerAPI.warn(`Se bha producido un error en la eliminacion de categoria por ID error: ${error}`)
      throw error;
    }
  }
  /** 8
   * Metodo para actualizar una categoria
   * 
   */
  async actualizarCategoria(categoria: Categoria): Promise<Boolean> {
    LoggerAPI.info("Se ha iniciado el proceso para actualizar una categoria con respecto al ID")
    try {
      const resultado = await this.categoriaRepositorio.update({ categoriaId: categoria.getCategoriaId() }, categoria);
      if (resultado.affected > 0) {
        LoggerAPI.info("Se ha actualizado la categoria correctamente")
        return new Boolean(true)
      } else {
        LoggerAPI.warn("No se ha actualizado la categoria")
        return new Boolean(false)
      }
    } catch (error) {
      LoggerAPI.warn(`Se ha producido un error al actualizar la categoria `)
      throw error;
    }
  }
}
