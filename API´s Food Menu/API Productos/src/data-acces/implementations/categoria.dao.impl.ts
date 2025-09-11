// Update the import path to the correct module that exports 'Categoria'
import { Categoria } from "@entity/categoria.entity";
import { CategoriaIDAO } from "@data.dao/categoria.dao";
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