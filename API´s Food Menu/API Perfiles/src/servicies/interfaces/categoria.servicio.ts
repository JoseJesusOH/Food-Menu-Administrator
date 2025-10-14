import { CategoriaDTO } from "@dto/categoria.dto";

export interface CategoriaIServicio {
    getCategorias():Promise<CategoriaDTO[]>;
    getCategoriaById(categoriaId:Number):Promise<CategoriaDTO>;
    getCategoriaByUuid(categoriaUuid:String):Promise<CategoriaDTO>;
    agregarCategoria(categoriaDTO:CategoriaDTO):Promise<Boolean>;
    actualizarCategoria(categoriaDTO:CategoriaDTO):Promise<Boolean>;
    eliminarCategoriaById(categoriaId:Number):Promise<CategoriaDTO>;
}