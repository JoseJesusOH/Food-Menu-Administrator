import { CategoriaDTO } from "@dto/categoria.dto";
import { CategoriaIServicio } from "servicies/interfaces/categoria.servicio";

export class CategoriaServicio implements CategoriaIServicio{
    getCategorias(): Promise<CategoriaDTO[]> {
        throw new Error("Method not implemented.");
    }
    getCategoriaById(categoriaId: Number): Promise<CategoriaDTO> {
        throw new Error("Method not implemented.");
    }
    getCategoriaByUuid(categoriaUuid: String): Promise<CategoriaDTO> {
        throw new Error("Method not implemented.");
    }
    agregarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarCategoria(categoriaDTO: CategoriaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarCategoriaById(categoriaId: Number): Promise<CategoriaDTO> {
        throw new Error("Method not implemented.");
    }
    
}