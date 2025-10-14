import { CategoriaDTO } from "@dto/categoria.dto";

/**
 * Interfaz que define las operaciones del servicio relacionadas con la entidad de Categoría.
 * 
 * Esta interfaz establece el contrato que debe cumplir cualquier implementación del servicio
 * encargado de la gestión de categorías, incluyendo las operaciones CRUD básicas.
 */
export interface CategoriaIServicio {

    /**
     * Obtiene la lista completa de categorías registradas en el sistema.
     *
     * @returns {Promise<CategoriaDTO[]>} 
     * Promesa que se resuelve con un arreglo de objetos {@link CategoriaDTO},
     * que representan las categorías existentes.
     */
    getCategorias(): Promise<CategoriaDTO[]>;

    /**
     * Obtiene una categoría específica a partir de su identificador numérico.
     *
     * @param {Number} categoriaId - Identificador único de la categoría.
     * @returns {Promise<CategoriaDTO>} 
     * Promesa que se resuelve con el objeto {@link CategoriaDTO} correspondiente a la categoría encontrada.
     */
    getCategoriaById(categoriaId: Number): Promise<CategoriaDTO>;

    /**
     * Obtiene una categoría específica a partir de su UUID (identificador universal único).
     *
     * @param {String} categoriaUuid - UUID de la categoría.
     * @returns {Promise<CategoriaDTO>} 
     * Promesa que se resuelve con el objeto {@link CategoriaDTO} correspondiente a la categoría encontrada.
     */
    getCategoriaByUuid(categoriaUuid: String): Promise<CategoriaDTO>;

    /**
     * Agrega una nueva categoría al sistema.
     *
     * @param {CategoriaDTO} categoriaDTO - Objeto que contiene los datos de la nueva categoría a registrar.
     * @returns {Promise<Boolean>} 
     * Promesa que se resuelve con `true` si la inserción fue exitosa, o `false` en caso contrario.
     */
    agregarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean>;

    /**
     * Actualiza la información de una categoría existente en el sistema.
     *
     * @param {CategoriaDTO} categoriaDTO - Objeto con los datos actualizados de la categoría.
     * @returns {Promise<Boolean>} 
     * Promesa que se resuelve con `true` si la actualización fue exitosa, o `false` si ocurrió algún error.
     */
    actualizarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean>;

    /**
     * Elimina una categoría del sistema usando su identificador numérico.
     *
     * @param {Number} categoriaId - Identificador único de la categoría que se desea eliminar.
     * @returns {Promise<Boolean>} 
     * Promesa que se resuelve con `true` si la eliminación fue exitosa, o `false` si no se pudo eliminar.
     */
    eliminarCategoriaById(categoriaId: Number): Promise<Boolean>;
}
