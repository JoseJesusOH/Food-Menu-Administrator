/**
 * Implementacion de los metodos de la interfaz CategoriaIDAO
 */
import { Categoria } from "@entity/categoria.entity";
import { CategoriaIDAO } from "@data.dao/categoria.dao";
import { Conexion } from "@utility/conexion"
import { LoggerAPI } from "@utility/logger"

/**
 * Implementacion de los metodos de la interfaz CategoriaIDAO
 */
export class CategoriaDAO implements CategoriaIDAO {
    /** 1
     * Metodo para obtener todas las categorias
     */
 async getCategorias(): Promise<Categoria[]> {
    LoggerAPI.info("Iniciando obtención de categorías desde DB");
    try {
      const categoriaRepositorio = Conexion.getRepository(Categoria);
      const categorias = await categoriaRepositorio.find();
      if (!categorias || categorias.length === 0) {
        LoggerAPI.warn("No se encontraron categorías en la base de datos");
        // throw new Error("No se encontraron categorías");
        return [];
      }
      LoggerAPI.info(
        `Se han obtenido ${categorias.length} categorías exitosamente`
      );
      return categorias;
    } catch (error) {
      LoggerAPI.error("Error al obtener categorías", { error });
      throw error;
    }
  }
    /** 2
     * Metodo para obtener una categoria por su ID
     */
    async getCategoriaById(categoriaId: Number): Promise<Categoria> {
        const categoriaRepositorio = Conexion.getRepository(Categoria);
        return categoriaRepositorio.findOneBy({ categoriaId: categoriaId })
    }
    /** 3
     * Metodo para obtener una categoria por su UUID
     */
    async getCategoriaByUuid(categoriaUuid: String): Promise<Categoria> {
        const categoriaRepositorio = Conexion.getRepository(Categoria);
        return categoriaRepositorio.findOneBy({ categoriaUuid: categoriaUuid })
    }
    /** 4
     * Metodo para agregar una nueva categoria
     */
    async agregarCategoria(categoria: Categoria): Promise<Boolean> {
        const categoriaRepositorio = Conexion.getRepository(Categoria);
        return (await categoriaRepositorio.insert(categoria)).identifiers.length > 0
    }
    /** 5
     * Metodo para eliminar una categoria por su ID
     */
    async eliminarCategoriaById(categoriaId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 8
     * Metodo para actualizar una categoria
     * 
     */
    async actualizarCategoria(categoria: Categoria): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}
