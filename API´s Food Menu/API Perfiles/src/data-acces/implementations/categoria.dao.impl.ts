import { Categoria } from "@entity/categoria.entity";
import {CategoriaIDAO} from "@data.dao/categoria.dao"
export class CategoriaDAO implements CategoriaIDAO{
    getCategorias(): Categoria[] {
        throw new Error("Method not implemented.");
    }
    getCategoriaByID(categoriaID: Number): Categoria {
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