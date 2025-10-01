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
import { CategoriaIDAO } from "@data.dao/categoria.dao";
import { CategoriaDAO } from "@data.impl/categoria.dao.impl";
import { LoggerAPI } from "@utility/logger";
import { instanceToInstance } from "class-transformer";
/**
 * Servicio encargado de la lógica de negocio relacionada con Categorías.
 * Implementa la interfaz CategoriaIServicio.
 */
class CategoriaServicio implements CategoriaIServicio {
    categoriaDao: CategoriaIDAO = new CategoriaDAO();
    /**
     * Obtiene todas las categorías disponibles en el sistema.
     */
    async getCategorias(): Promise<CategoriaDTO[]> {
        LoggerAPI.info("Se inicia metodo de servicio para obtener las Categoria")
        try {
            const categorias = await this.categoriaDao.getCategorias();
            if (categorias.length < 0) {
                LoggerAPI.warn(`No se han encontrado categorias en el sistema`)
                return [];
            } else {
                LoggerAPI.info(`Se han encontrado un total de ${categorias.length}`)
                let categoriasDTO = new CategoriaDTO[categorias.length];
                categoriasDTO=instanceToInstance(categorias)
                return categorias;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo error en la busqueda de categorias servicio error; ${error}`)
            throw error;
        }
    }

    /**
     * Agrega una nueva categoría al sistema.
     */
    agregarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /**
     * Actualiza una  categoría al sistema.
     */
    actualizarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /**
     * Elimina una categoría existente a partir de su UUID.
     */
    eliminarCategoria(categoriaUuid: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Busca y devuelve una categoría específica por su UUID.
     */
    getCategoriaByUuid(): Promise<CategoriaDTO> {
        throw new Error("Method not implemented.");
    }
}
