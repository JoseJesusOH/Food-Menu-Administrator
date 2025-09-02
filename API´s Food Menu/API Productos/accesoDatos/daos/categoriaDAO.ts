import { Categoria } from "../../modelos/categoria";
import { CategoriaIDAO } from "../daoInterfaces/categoriaIDAO";
export class CategoriaDAO implements CategoriaIDAO{
    getCategoria(): Categoria[] {
        throw new Error("Method not implemented.");
    }
    getCategoriaByID(categoriaID: Number): Categoria {
        throw new Error("Method not implemented.");
    }
    getCategoriaByUUID(categoriaUUID: String): Categoria {
        throw new Error("Method not implemented.");
    }
    agregarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarCategoriaByID(categoriaID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }
}