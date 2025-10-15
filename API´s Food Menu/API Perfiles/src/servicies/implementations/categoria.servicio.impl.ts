// Importa la interfaz del DAO que define las operaciones de acceso a datos de categorías
import { CategoriaIDAO } from "@data.dao/categoria.dao";

// Importa la implementación concreta del DAO de categorías
import { CategoriaDAO } from "@data.impl/categoria.dao.impl";

// Importa el DTO que representa la estructura de una categoría para la capa de servicio
import { CategoriaDTO } from "@dto/categoria.dto";

// Importa la entidad que mapea la tabla de categorías en la base de datos
import { Categoria } from "@entity/categoria.entity";

// Importa la utilidad de conexión a la base de datos
import { Conexion } from "@utility/conexion";

// Importa la utilidad para registrar mensajes de log e información del sistema
import { LoggerAPI } from "@utility/logger";

// Importa función de class-transformer para convertir objetos planos en instancias de clase
import { plainToInstance } from "class-transformer";

// Importa la interfaz del servicio que define las operaciones de negocio sobre categorías
import { CategoriaIServicio } from "servicies/interfaces/categoria.servicio";

/** 
 * Servicio encargado de gestionar la lógica de negocio relacionada con las categorías. 
 * Implementa las operaciones CRUD utilizando el DAO correspondiente. 
 */
export class CategoriaServicio implements CategoriaIServicio {

    /** Instancia del DAO para realizar operaciones sobre la base de datos */
    categoriaDAO: CategoriaIDAO = new CategoriaDAO();

    /** Obtiene todas las categorías registradas */
    async getCategorias(): Promise<CategoriaDTO[]> {
        LoggerAPI.info("Se inicia metodo para obtener categorias en ServicioCategoria");
        try {
            let resultado = await this.categoriaDAO.getCategorias();
            if (resultado.length > 0) {
                LoggerAPI.info(`Se han encontrado un total de ${resultado.length} categorias`);
                return resultado;
            } else {
                LoggerAPI.warn(`No se han encontrado categorias.`);
                return [];
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error al obtener categorias error; ${error}`);
            return [];
        }
    }

    /** Obtiene una categoría específica por su ID */
    async getCategoriaById(categoriaId: Number): Promise<CategoriaDTO> {
        LoggerAPI.info(`Se inicia metodo para obtener categoria por ID: ${categoriaId} en ServicioCategoria`);
        try {
            let resultado = await this.categoriaDAO.getCategoriaById(categoriaId);
            if (resultado) {
                LoggerAPI.info(`Categoría encontrada`);
                return resultado;
            } else {
                LoggerAPI.warn(`No se encontró ninguna categoría con el ID: ${categoriaId}`);
                return new CategoriaDTO();
            }
        } catch (error) {
            LoggerAPI.warn(`Error al obtener categoría por ID (${categoriaId}): ${error}`);
            return new CategoriaDTO();
        }
    }

    /** Obtiene una categoría específica por su UUID */
    async getCategoriaByUuid(categoriaUuid: String): Promise<CategoriaDTO> {
        LoggerAPI.info(`Se inicia metodo para obtener categoria por UUID: ${categoriaUuid} en ServicioCategoria`);
        try {
            let resultado = await this.categoriaDAO.getCategoriaByUuid(categoriaUuid);
            if (resultado) {
                LoggerAPI.info(`Categoría encontrada con UUID ${categoriaUuid}: ${resultado.nombre ?? "(sin nombre)"}`);
                return resultado;
            } else {
                LoggerAPI.warn(`No se encontró ninguna categoría con el UUID: ${categoriaUuid}`);
                return new CategoriaDTO();
            }
        } catch (error) {
            LoggerAPI.warn(`Error al obtener categoría por UUID (${categoriaUuid}): ${error}`);
            return new CategoriaDTO();
        }
    }

    /** Agrega una nueva categoría */
    async agregarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo para agregar una categoria en CategoriaServicio");
        try {
            let categoria: Categoria = plainToInstance(Categoria, categoriaDTO);
            let result = await this.categoriaDAO.agregarCategoria(categoria);
            if (result) {
                LoggerAPI.info("Se ha agregado la categoria exitosamente");
                return true;
            } else {
                LoggerAPI.warn("No se ha agregado la categoria.");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error al agregar categoria en CategoriaServicio; ${error}`);
            throw error;
        }
    }

    /** Actualiza una categoría existente */
    async actualizarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo para actualizar una categoria en CategoriaServicio");
        try {
            let categoria: Categoria = plainToInstance(Categoria, categoriaDTO);
            let result = await this.categoriaDAO.actualizarCategoria(categoria);
            if (result) {
                LoggerAPI.info("La categoria ha sido actualizada exitosamente");
                return true;
            } else {
                LoggerAPI.warn("No se ha podido actualizar la categoria");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al actualizar la categoria en CategoriaServicio; ${error}`);
            throw error;
        }
    }

    /** Elimina una categoría por su ID */
    async eliminarCategoriaById(categoriaId: Number): Promise<Boolean> {
        LoggerAPI.info(`Se inicia el metodo para eliminar la categoria con ID: ${categoriaId} en CategoriaServicio`);
        try {
            let result = await this.categoriaDAO.eliminarCategoriaById(categoriaId);
            if (result) {
                LoggerAPI.info(`La categoria con ID ${categoriaId} ha sido eliminada exitosamente`);
                return true;
            } else {
                LoggerAPI.warn(`No se ha podido eliminar la categoria con ID ${categoriaId}`);
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al eliminar la categoria con ID ${categoriaId} en CategoriaServicio; ${error}`);
            throw error;
        }
    }
}
