import { Categoria } from "@entity/categoria.entity"
import { CategoriaIServicio } from "@service.dao/categoria.servicio"
import { CategoriaServicio } from "@service.impl/categoria.servicio.impl"
import { LoggerAPI } from "@utility/logger"
import { instanceToInstance, instanceToPlain, plainToInstance } from "class-transformer"
class CategoriaControl {

    categoriaServicio: CategoriaIServicio = new CategoriaServicio()
    /**
     * 
     * Crea una nueva categoría.
     * Normalmente toma los datos de la categoría desde req.body
     * y responde con la categoría creada o un mensaje de éxito.
     */
    agregarCategoria = async (req, res, next) => {
               LoggerAPI.info("Se inicia el control respectivo para agregar una categoria");
        try {
            let categoria=plainToInstance(Categoria, req.body);
            const categoriaResult = await this.categoriaServicio.agregarCategoria(categoria)
            if (categoriaResult) {
                return res.status(200).send({ message: `La categoria ha sido registrada` })
            } else {
                return res.status(404).send({ message: "No se ha ingresado la categoria" })
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en agregar la categoria  ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    /**
     * Elimina una categoría existente.
     * El id de la categoría se recibe en req.params.id.
     */
    eliminarCategoria = async (req, res, next) => {
                    LoggerAPI.info("Se inicia el control respectivo para eliminar una categoria");
        try {
            const {categoriaUuid} = req.params;

            const categoriaResult = await this.categoriaServicio.eliminarCategoria(categoriaUuid)
            if (categoriaResult) {
                return res.status(200).send({ message: `La categoria ha sido eliminada` })
            } else {
                return res.status(404).send({ message: "No se ha eliminado la categoria" })
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en eliminar la categoria  ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    /**
     * Obtiene todas las categorías.
     * Suele responder con un array de categorías.
     * Puede aceptar filtros opcionales desde req.query.
     */
    obtenerCategorias = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para el retorno de categorias");
        try {
            const categorias = await this.categoriaServicio.getCategorias();
            if (categorias.length > 0) {
                return res.status(200).send({ categorias })
            } else {
                return res.status(404).send({ message: "No hay categorias existentes" })
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en la obtencion de categorias ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    /**
     * Obtiene una categoría específica por su UUID.
     * El uuid vendría en req.params.uuid.
     */
    obtenerCategoriaByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para el retorno de categoria por uuid");
        try {
            const { categoriaUuid } = req.params;
            const categoria = await this.categoriaServicio.getCategoriaByUuid(categoriaUuid);
            if (!categoria) {
                return res.status(200).send({ categoria })
            } else {
                return res.status(4004).send({ message: "No hay categoria con ese  uuid" })
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en la obtencion de categoria por UUID ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    /**
     * Actualiza una categoría existente.
     * Suele recibir el id de la categoría en req.params.id
     * y los nuevos datos en req.body.
     */
    actualizarCategoria = async (req, res, next) => {
           LoggerAPI.info("Se inicia el control respectivo para actualizar una categoria");
        try {
            let  categoria=plainToInstance(Categoria, req.body);
            const categoriaResult = await this.categoriaServicio.actualizarCategoria(categoria)
            if (categoriaResult) {
                return res.status(200).send({ message: `La categoria ha sido actualizada` })
            } else {
                return res.status(404).send({ message: "No se ha actualizado la categoria" })
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en actualizar la categoria  ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }
}

export { CategoriaControl }
