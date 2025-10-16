import { Categoria } from "@entity/categoria.entity"
import { LoggerAPI } from "@utility/logger"
import { instanceToInstance, instanceToPlain, plainToInstance } from "class-transformer"
import { CategoriaServicio } from "servicies/implementations/categoria.servicio.impl"
import { CategoriaIServicio } from "servicies/interfaces/categoria.servicio"
class CategoriaControl {

    categoriaServicio: CategoriaIServicio=new  CategoriaServicio();
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

}

export { CategoriaControl }
