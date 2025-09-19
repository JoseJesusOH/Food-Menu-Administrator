/**
 * Implementacion de los metodos de la interfaz CategoriaIDAO
 */
import { Categoria } from "@entity/categoria.entity";
import { CategoriaIDAO } from "@data.dao/categoria.dao";
/**
 * Implementacion de los metodos de la interfaz CategoriaIDAO
 */
export class CategoriaDAO implements CategoriaIDAO {
    /** 1
     * Metodo para obtener todas las categorias
     */
    async getCategorias():  Promise<Categoria[]> {
        throw new Error("Method not implemented.");
    } 
    /** 2
     * Metodo para obtener una categoria por su ID
     */
    async getCategoriaById(categoriaID: Number):  Promise<Categoria> {
        throw new Error("Method not implemented.");
    }
    /** 3
     * Metodo para obtener una categoria por su UUID
     */
    async getCategoriaByUuid(categoriaUuid: String):  Promise<Categoria> {
        throw new Error("Method not implemented.");
    }
    /** 4
     * Metodo para agregar una nueva categoria
     */
    async agregarCategoria(categoria: Categoria):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Metodo para eliminar una categoria por su ID
     */
    async eliminarCategoriaById(categoriaId: Number):  Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 8
     * Metodo para actualizar una categoria
     * 
     */
    async actualizarCategoria(categoria: Categoria):  Promise<Boolean >{
        throw new Error("Method not implemented.");
    }
}