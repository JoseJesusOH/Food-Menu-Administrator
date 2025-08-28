import {Categoria} from "../../modelos/categoria"
export interface CategoriaIDAO{
    getCategoria():Categoria[];
  getCategoriaByID(categoriaID:Number):Categoria;
  getCategoriaByUUID(categoriaUUID:String):Categoria;
  agregarCategoria(categoria:Categoria):Boolean;
  eliminarCategoriaByID(categoriaID:Number):Boolean;
  actualizarCategoria(categoria:Categoria):Boolean;
} 