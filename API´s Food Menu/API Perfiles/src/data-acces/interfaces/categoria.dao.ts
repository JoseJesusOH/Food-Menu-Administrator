import {Categoria} from "@entity/categoria.entity"
export interface CategoriaIDAO {
    getCategorias():Categoria[];
    getCategoriaByID(categoriaID:Number): Categoria;
    agregarCategoria(categoria:Categoria):Boolean;
    eliminarCategoriaByID(categoriaID:Number):Boolean;
    actualizarCategoria(categoria:Categoria):Boolean;
}