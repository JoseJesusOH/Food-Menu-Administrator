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
    getCategorias(): Promise<Categoria[]>;

    /**
     * Método para obtener una categoría por su ID.
     * @param categoriaId ID de la categoría a buscar.
     * @return Un objeto Categoria si se encuentra, de lo contrario retorna null.
     */
    getCategoriaById(categoriaId: Number): Promise<Categoria>;

    /**
     * Método para agregar una nueva categoría.
     * @param categoria Objeto Categoria a agregar.
     * @return true si la operación fue exitosa, de lo contrario false.
     */
    agregarCategoria(categoria: Categoria): Promise<Boolean>;

    /**
     * Método para eliminar una categoría por su ID.
     * @param categoriaId ID de la categoría a eliminar.
     * @return true si la operación fue exitosa, de lo contrario false.
     */
    eliminarCategoriaById(categoriaId: Number): Promise<Boolean>;

    /**
     * Método para actualizar una categoría existente.
     * @param categoria Objeto Categoria con los datos actualizados.
     * @return true si la operación fue exitosa, de lo contrario false.
     */
    actualizarCategoria(categoria: Categoria): Promise<Boolean>;
}