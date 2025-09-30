import {CategoriaDTO} from "@dto/categoria.dto"
interface CategoriaIServicio{
    getCategorias():CategoriaDTO;
    agregarCategoria():Boolean;
    eliminarCategoria(): Boolean;
    obtenerCategoriaByID():CategoriaDTO;
}
export {CategoriaIServicio}