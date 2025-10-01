import {CategoriaDTO} from "@dto/categoria.dto"
interface CategoriaIServicio{
    getCategorias():CategoriaDTO;
    agregarCategoria():Boolean;
    eliminarCategoria(): Boolean;
    getCategoriaByUuid():CategoriaDTO;
}
export {CategoriaIServicio}