/**
 * Importamos la entidad Categoria desde el módulo de entidades.
 */
import { Categoria } from "@entity/categoria.entity"

/**
 * Interfaz CategoriaIDAO, que define las operaciones de acceso a datos para la entidad Categoria.
 */
export interface CategoriaIDAO {
    /**
     * Método para obtener todas las categorías.
     * @return Un arreglo de objetos Categoria.
     */
    getCategorias(): Categoria[];

    /**
     * Método para obtener una categoría por su ID.
     * @param categoriaID ID de la categoría a buscar.
     * @return Un objeto Categoria si se encuentra, de lo contrario retorna null.
     */
    getCategoriaByID(categoriaID: Number): Categoria;

    /**
     * Método para agregar una nueva categoría.
     * @param categoria Objeto Categoria a agregar.
     * @return true si la operación fue exitosa, de lo contrario false.
     */
    agregarCategoria(categoria: Categoria): Boolean;

    /**
     * Método para eliminar una categoría por su ID.
     * @param categoriaID ID de la categoría a eliminar.
     * @return true si la operación fue exitosa, de lo contrario false.
     */
    eliminarCategoriaByID(categoriaID: Number): Boolean;

    /**
     * Método para actualizar una categoría existente.
     * @param categoria Objeto Categoria con los datos actualizados.
     * @return true si la operación fue exitosa, de lo contrario false.
     */
    actualizarCategoria(categoria: Categoria): Boolean;
}