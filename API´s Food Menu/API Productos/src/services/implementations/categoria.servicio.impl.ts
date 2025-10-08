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
import { instanceToInstance,ClassTransformOptions, plainToInstance } from "class-transformer";
import { Categoria } from "@entity/categoria.entity";
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
                let categoriasDTO=[];
                categoriasDTO=plainToInstance(CategoriaDTO,categorias)
                return categoriasDTO;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo error en la busqueda de categorias servicio error; ${error}`)
            throw error;
        }
    }

    /**
     * Agrega una nueva categoría al sistema.
     */
   async agregarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el metodo para agregar una nueva categoria");
        try {
            let categoria=new Categoria ();
            categoria=plainToInstance(Categoria,categoriaDTO)
            let resultado= await this.categoriaDao.agregarCategoria(categoria);
            if(resultado){
                LoggerAPI.info(`Se ha agregado una nueva categoria con exito`);
                return true;
            }
            else{
                LoggerAPI.warn(`No se ha podido agregar la nueva categoria`);
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al agregar una nueva categoria: ${error}`);
            throw error;
        }
    }
    /**
     * Actualiza una  categoría al sistema.
     */
    async actualizarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
         LoggerAPI.info("Se inicia el metodo para actualizar una nueva categoria"); 
          try {
            let categoria=new Categoria ();
            categoria=plainToInstance(Categoria,categoriaDTO)
            let resultado= await this.categoriaDao.actualizarCategoria(categoria);
            if(resultado){
                LoggerAPI.info(`Se ha actualizado una nueva categoria con exito`);
                return true;
            }
            else{
                LoggerAPI.warn(`No se ha podido actualizar la nueva categoria`);
                return false;
            }
        } catch (error) {
            LoggerAPI.error(`Error al actualizar una nueva categoria: ${error}`);
            throw error;
        }
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
    async getCategoriaByUuid(categoriaUuid:String): Promise<CategoriaDTO> {
              LoggerAPI.info("Se inicia metodo de servicio para obtener las Categoria")
        try {
            const categoria = await this.categoriaDao.getCategoriaByUuid(categoriaUuid)
            if (!categoria) {
                LoggerAPI.warn(`No se han encontrado categorias en el sistema`)
                return null;
            } else {
                LoggerAPI.info(`Se han encontrado una categoria con el UUID  ${categoriaUuid}`)
                let categoriaDTO =new CategoriaDTO();
                categoriaDTO=plainToInstance(CategoriaDTO,categoria)
                return categoriaDTO;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo error en la busqueda de categoria por UUID servicio error; ${error}`)
            throw error;
        }
    }
}

export {CategoriaServicio}
