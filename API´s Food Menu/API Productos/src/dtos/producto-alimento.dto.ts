import {ProductoDTO} from "@dto/producto.dto";
import { AlimentoDTO } from "@dto/alimento.dto";
import { UnidadMedida } from "@dto/unidad-medida.dto";

export class ProductoAlimentoDTO {
     productoAlimentoUuid: String;
     cantidadMinima: Number;
     cantidadMaxima: Number;
     producto: ProductoDTO;
     alimento: AlimentoDTO;
     unidadMedida: UnidadMedida;
}