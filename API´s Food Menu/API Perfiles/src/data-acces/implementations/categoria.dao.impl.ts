/**
 * Importaciones requeridas del sistema modelo Categoria e interface CategoriaIDAO
 */
import { Categoria } from "@entity/categoria.entity";
import {CategoriaIDAO} from "@data.dao/categoria.dao"

/**
 * Implementaccion correspondiente a la categoria
 */
export class CategoriaDAO implements CategoriaIDAO{

    /**
     * Metodo para obtener todas las categorias del sistema
     */
    getCategorias(): Categoria[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener una categoria del sistema por su id
     */
    getCategoriaByID(categoriaID: Number): Categoria {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar una categoria
     */
    agregarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar una categoria por id
     */
    eliminarCategoriaByID(categoriaID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar una categoria del sistema. 
     */
    actualizarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }

}