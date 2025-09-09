import { Categoria } from "../../modelos/categoria"
export interface CategoriaIDAO {
  getCategorias(): Categoria[];
  getCategoriaById(categoriaID: Number): Categoria;
  getCategoriaByUuid(categoriaUuid: String): Categoria;
  agregarCategoria(categoria: Categoria): Boolean;
  eliminarCategoriaById(categoriaId: Number): Boolean;
  actualizarCategoria(categoria: Categoria): Boolean;
} 