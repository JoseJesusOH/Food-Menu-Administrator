import { CategoriaDTO } from "@dto/categoria.dto";
import {CategoriaIServicio} from "@service.dao/categoria.servicio"
class CategoriaServicio implements CategoriaIServicio{
    getCategorias(): CategoriaDTO {
        throw new Error("Method not implemented.");
    }
    agregarCategoria(): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarCategoria(): Boolean {
        throw new Error("Method not implemented.");
    }
    getCategoriaByUuid(): CategoriaDTO {
        throw new Error("Method not implemented.");
    }
    
    
}