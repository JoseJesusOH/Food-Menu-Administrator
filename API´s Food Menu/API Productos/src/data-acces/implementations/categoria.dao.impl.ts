/**
 * Implementacion de los metodos de la interfaz CategoriaIDAO
 */
import { Categoria } from "@entity/categoria.entity";
import { CategoriaIDAO } from "@data.dao/categoria.dao";
/**
 * Implementacion de los metodos de la interfaz CategoriaIDAO
 */
export class CategoriaDAO implements CategoriaIDAO {
    /**
     * Metodo para obtener todas las categorias
     */
    getCategorias(): Categoria[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para obtener una categoria por su ID
     */
    getCategoriaById(categoriaID: Number): Categoria {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para obtener una categoria por su UUID
     */
    getCategoriaByUuid(categoriaUuid: String): Categoria {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para obtener una categoria por su nombre
     */
    getCategoriaByNombre(categoriaNombre: String): Categoria {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar una nueva categoria
     */
    agregarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar una categoria por su ID
     */
    eliminarCategoriaById(categoriaId: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar una categoria por su UUID
     */
    eliminarCategoriaByUuid(categoriaUuid: String): Boolean {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para actualizar una categoria
     * 
     */
    actualizarCategoria(categoria: Categoria): Boolean {
        throw new Error("Method not implemented.");
    }
}