import { CategoriaDTO } from "@dto/categoria.dto";
import {ProductoAlimentoDTO} from "@dto/producto-alimento.dto"
export class AlimentoDTO {
    nombre: String;
    categoria: CategoriaDTO;
    alimentoUuid: String;
    productoAlimento: ProductoAlimentoDTO[];
}
