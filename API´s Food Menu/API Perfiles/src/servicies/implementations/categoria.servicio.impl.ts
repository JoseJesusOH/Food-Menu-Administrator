import { CategoriaDTO } from "@dto/categoria.dto";
import { Categoria } from "@entity/categoria.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
import { CategoriaIServicio } from "servicies/interfaces/categoria.servicio";

export class CategoriaServicio implements CategoriaIServicio{
    categoriaRepositorio=Conexion.getRepository(Categoria);
    async getCategorias(): Promise<CategoriaDTO[]> {
        LoggerAPI.info("Se inicia metodo para obtener categorias en ServicioCategoria")
        try{
              let resultado= await this.categoriaRepositorio.find();
              if(resultado.length>0){
                LoggerAPI.info(`Se han encontrado un total de ${resultado.length} categorias`)
                 return resultado;
              }
              else{
                LoggerAPI.warn(`No se han encontrado categorias.`)
                return []
              }
        }catch(error){
            LoggerAPI.warn(`Se ha producido error al obtener categorias error; ${error}`)
        }
    }
async getCategoriaById(categoriaId: Number): Promise<CategoriaDTO> {
    LoggerAPI.info(`Se inicia metodo para obtener categoria por ID: ${categoriaId} en ServicioCategoria`);
    try {
        let resultado = await this.categoriaRepositorio.findOne({
            where: { categoriaId }
        });

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
    getCategoriaByUuid(categoriaUuid: String): Promise<CategoriaDTO> {
        throw new Error("Method not implemented.");
    }
    agregarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarCategoriaById(categoriaId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}