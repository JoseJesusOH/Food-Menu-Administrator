import { Categoria } from "../../modelos/categoria";
import { CategoriaIDAO } from "../interfaces/categoria.dao";
export class CategoriaDAO implements CategoriaIDAO{
    getCategorias(): Categoria[] {
        throw new Error("Method not implemented.");
    }
    getCategoriaById(categoriaID: Number): Categoria {
        throw new Error("Method not implemented.");
    }
    getCategoriaByUuid(categoriaUuid: String): Categoria {
        throw new Error("Method not implemented.");
    }
    agregarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarCategoriaById(categoriaId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }
}