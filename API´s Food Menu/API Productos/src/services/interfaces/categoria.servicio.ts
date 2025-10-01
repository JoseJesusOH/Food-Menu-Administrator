/**
 * Importación del DTO de Categoría.
 * Representa la estructura de datos que se transfiere entre capas.
 */
import { CategoriaDTO } from "@dto/categoria.dto";

/**
 * Interfaz que define los métodos del servicio de Categorías.
 * Todos los servicios que implementen esta interfaz deben cumplir con estas operaciones.
 */
interface CategoriaIServicio {

    /**
     * Obtiene todas las categorías registradas en el sistema.
     * @return Objeto CategoriaDTO que representa todas las categorías.
     */
    getCategorias(): CategoriaDTO;

    /**
     * Crea una nueva categoría a partir de los datos proporcionados.
     * @param categoria Datos de la categoría a registrar.
     * @return Boolean indicando si la operación fue exitosa o no.
     */
    agregarCategoria(categoria: CategoriaDTO): Boolean;

    /**
     * Elimina una categoría utilizando su identificador único (UUID).
     * @param uuid Identificador único de la categoría.
     * @return Boolean indicando si la operación de eliminación fue exitosa o no.
     */
    eliminarCategoria(categoriaUuid: string): Boolean;

    /**
     * Obtiene una categoría específica a partir de su UUID.
     * @param uuid Identificador único de la categoría.
     * @return Objeto CategoriaDTO correspondiente a la categoría buscada.
     */
    getCategoriaByUuid(uuid: string): CategoriaDTO;
}

export { CategoriaIServicio };
