import {CategoriaDTO} from "@dto/categoria.dto"
import {ProductoAlimentoDTO} from "@dto/producto-alimento.dto"
import {ProductoCompaniaDTO} from "@dto/producto-compania.dto"
export class ProductoDTO {
   nombre: String;
   categoria: CategoriaDTO;
   productoUuid: String
   productoAlimentos: ProductoAlimentoDTO[];
   productoCompanias: ProductoCompaniaDTO[];
}