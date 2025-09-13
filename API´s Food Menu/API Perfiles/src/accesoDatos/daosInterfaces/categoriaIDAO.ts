import {Categoria} from "../../modelos/categoria"
export interface CategoriaIDAO {
    getCategorias():Categoria[];
    getCategoriaByID(categoriaID:Number): Categoria;
    agregarCategoria(categoria:Categoria):Boolean;
    eliminarCategoriaByID(categoriaID:Number):Boolean;
    actualizarCategoria(categoria:Categoria):Boolean;
}