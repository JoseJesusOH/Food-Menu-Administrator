/**
 * Importación del DTO de Categoría.
 * Representa la estructura de datos que se transfiere entre capas.
 */
import { CategoriaDTO } from "@dto/categoria.dto";

/**
 * Importación de la interfaz de servicio para Categoría.
 * Define los métodos que debe implementar la clase de servicio.
 */
import { CategoriaIServicio } from "@service.dao/categoria.servicio"

/**
 * Servicio encargado de la lógica de negocio relacionada con Categorías.
 * Implementa la interfaz CategoriaIServicio.
 */
class CategoriaServicio implements CategoriaIServicio {

    /**
     * Obtiene todas las categorías disponibles en el sistema.
     */
    getCategorias(): CategoriaDTO {
        throw new Error("Method not implemented.");
    }

    /**
     * Agrega una nueva categoría al sistema.
     */
    agregarCategoria(categoriaDTO:CategoriaDTO): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Elimina una categoría existente a partir de su UUID.
     */
    eliminarCategoria(categoriaUuid: String): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Busca y devuelve una categoría específica por su UUID.
     */
    getCategoriaByUuid(): CategoriaDTO {
        throw new Error("Method not implemented.");
    }
}
