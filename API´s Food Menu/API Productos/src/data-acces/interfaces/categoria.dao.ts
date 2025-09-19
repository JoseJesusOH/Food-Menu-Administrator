/**
 * Import correspondiente de la Entidad Categoria requerido para la interfaz CategoriaIDAO.
 */
import { Categoria } from "@entity/categoria.entity"
/**
 * Interface de Acceso a datos para el modelo Categoria
 */
export interface CategoriaIDAO {
  /** 1
   * Devuelve todas las categorias existentes en la base de datos
   * @returns Arreglo con todas las categorias
   */
  getCategorias(): Promise<Categoria[]>;
  /** 2
   * Devuelve la categoria encontrada con respecto al ID especificado.
   * @param categoriaID ID de la categoria a buscar
   * @returns Categoria Obtenida
   */
  getCategoriaById(categoriaID: Number): Promise<Categoria>;
  /** 3
   * Devuelve la categoria encontrada con respecto al UUID proporcionado
   * @param categoriaUuid UUID de la categoria a buscar
   * @returns Categoria encontrada
   */
  getCategoriaByUuid(categoriaUuid: String): Promise<Categoria>;
  /** 4
   *  Agrega una nueva categoria a la base de datos
   * @param categoria Categoria a agregar
   * @returns Boolean indicando si se agrego o no la categoria
   */
  agregarCategoria(categoria: Categoria): Promise<Boolean>;
  /** 5
   * Elimina una categoria de la base de datos
   * @param categoriaId ID de la categoria a eliminar
   * @returns Boolean indicando si se elimino o no la categoria
   */
  eliminarCategoriaById(categoriaId: Number): Promise<Boolean>;
  /** 6
   * Actualiza una categoria existente en la base de datos
   * @param categoria Categoria a actualizar
   * @returns Boolean indicando si se actualizo o no la categoria
   */
  actualizarCategoria(categoria: Categoria): Promise<Boolean>;
} 