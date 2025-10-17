// Importa la entidad Categoria que representa la estructura del modelo en la capa de persistencia
import { Categoria } from "@entity/categoria.entity"

// Importa la utilidad LoggerAPI para registrar logs e información del sistema
import { LoggerAPI } from "@utility/logger"

// Importa funciones de class-transformer para convertir objetos planos en instancias de clases y viceversa
import { instanceToInstance, instanceToPlain, plainToInstance } from "class-transformer"

// Importa la implementación del servicio de categorías que contiene la lógica de negocio
import { CategoriaServicio } from "servicies/implementations/categoria.servicio.impl"

// Importa la interfaz que define las operaciones del servicio de categorías
import { CategoriaIServicio } from "servicies/interfaces/categoria.servicio"

/**
 * Controlador encargado de gestionar las solicitudes HTTP relacionadas con las categorías.
 * Se comunica con la capa de servicio (CategoriaServicio) para ejecutar la lógica de negocio
 * correspondiente a crear, leer, actualizar y eliminar categorías.
 */
class CategoriaControl {

    /** Instancia del servicio de categorías que contiene la lógica de negocio */
    categoriaServicio: CategoriaIServicio = new CategoriaServicio();

    /**
     * Crea una nueva categoría.
     * Normalmente toma los datos de la categoría desde req.body
     * y responde con un mensaje indicando si la creación fue exitosa o no.
     */
    agregarCategoria = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para agregar una categoría");
        try {
            // Convierte los datos del cuerpo en una instancia de la entidad Categoria
            let categoria = plainToInstance(Categoria, req.body);

            // Llama al servicio para agregar la nueva categoría
            const categoriaResult = await this.categoriaServicio.agregarCategoria(categoria);

            if (categoriaResult) {
                return res.status(200).send({ message: `La categoría ha sido registrada` });
            } else {
                return res.status(404).send({ message: "No se ha ingresado la categoría" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al agregar la categoría: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    /**
     * Obtiene todas las categorías existentes en el sistema.
     * Suele responder con un arreglo de categorías, y puede aceptar filtros opcionales mediante req.query.
     */
    obtenerCategorias = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para el retorno de categorías");
        try {
            // Llama al servicio para obtener la lista de categorías
            const categorias = await this.categoriaServicio.getCategorias();

            if (categorias.length > 0) {
                return res.status(200).send({ categorias });
            } else {
                return res.status(404).send({ message: "No hay categorías existentes" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al obtener las categorías: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    /**
     * Obtiene una categoría específica por su UUID.
     * El UUID se recibe en los parámetros de la solicitud (req.params.categoriaUuid).
     */
    obtenerCategoriaByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para el retorno de categoría por UUID");
        try {
            const { categoriaUuid } = req.params;

            // Llama al servicio para obtener la categoría correspondiente
            const categoria = await this.categoriaServicio.getCategoriaByUuid(categoriaUuid);

            if (categoria) {
                return res.status(200).send({ categoria });
            } else {
                return res.status(404).send({ message: "No existe una categoría con el UUID proporcionado" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al obtener la categoría por UUID: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    /**
     * Elimina una categoría existente.
     * El UUID de la categoría se recibe en req.params.categoriaUuid.
     */
    eliminarCategoria = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para eliminar una categoría");
        try {
            const { categoriaUuid } = req.params;

            // Llama al servicio para eliminar la categoría
            const categoriaResult = await this.categoriaServicio.eliminarCategoriaByUuid(categoriaUuid);

            if (categoriaResult) {
                return res.status(200).send({ message: `La categoría ha sido eliminada` });
            } else {
                return res.status(404).send({ message: "No se ha eliminado la categoría" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al eliminar la categoría: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    /**
     * Actualiza una categoría existente.
     * Recibe los datos actualizados desde req.body.
     * Retorna un mensaje indicando si la actualización fue exitosa.
     */
    actualizarCategoria = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para actualizar una categoría");
        try {
            // Convierte los datos del cuerpo en una instancia de la entidad Categoria
            let categoria = plainToInstance(Categoria, req.body);

            // Llama al servicio para actualizar la categoría
            const categoriaResult = await this.categoriaServicio.actualizarCategoria(categoria);

            if (categoriaResult) {
                return res.status(200).send({ message: `La categoría ha sido actualizada` });
            } else {
                return res.status(404).send({ message: "No se ha actualizado la categoría" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al actualizar la categoría: ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }
}

// Exporta la clase para ser utilizada en las rutas correspondientes
export { CategoriaControl }
