import { CategoriaIServicio } from "@service.dao/categoria.servicio"
import { CategoriaServicio } from "@service.impl/categoria.servicio.impl"
import { LoggerAPI } from "@utility/logger"
class CategoriaControl {

     categoriaServicio: CategoriaIServicio = new CategoriaServicio()
    /**
     * 
     * Crea una nueva categoría.
     * Normalmente toma los datos de la categoría desde req.body
     * y responde con la categoría creada o un mensaje de éxito.
     */
    agregarCategoria = async (req, res, next) => {
    }

    /**
     * Elimina una categoría existente.
     * El id de la categoría se recibe en req.params.id.
     */
    eliminarCategoria = async (req, res, next) => {
    }

    /**
     * Obtiene todas las categorías.
     * Suele responder con un array de categorías.
     * Puede aceptar filtros opcionales desde req.query.
     */
    obtenerCategorias = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para el retorno de categorias");
        try {
            const categorias=await this.categoriaServicio.getCategorias();
            if(categorias.length>0){
                res.status(200).send({categorias})
            }else{
                res.status(401).send({message:"No hay categorias existentes"})
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presenrtado un error en la obtencion de categorias ${error}`)
        }
    }

    /**
     * Obtiene una categoría específica por su id.
     * El id vendría en req.params.id.
     */
    obtenerCategoriaById = async (req, res, next) => {
    }

    /**
     * Actualiza una categoría existente.
     * Suele recibir el id de la categoría en req.params.id
     * y los nuevos datos en req.body.
     */
    actualizarCategoria = async (req, res, next) => {
    }
}

export { CategoriaControl }
