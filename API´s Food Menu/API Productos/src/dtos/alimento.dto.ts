import { CategoriaDTO } from "@dto/categoria.dto";
import {ProductoAlimentoDTO} from "@dto/producto-alimento.dto"
export class AlimentoDTO {
    nombre: string;
    categoria: CategoriaDTO;
    alimentoUuid: string;
    productoAlimentoDTO: ProductoAlimentoDTO[];
}
