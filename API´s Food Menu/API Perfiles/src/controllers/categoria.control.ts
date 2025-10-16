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

}

export { CategoriaControl }
