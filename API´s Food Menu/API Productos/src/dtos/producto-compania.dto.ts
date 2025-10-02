import {CompaniaDTO} from "@dto/compania.dto"
import { ProductoDTO} from "@dto/producto.dto";
export class ProductoCompaniaDTO {
     productoCompaniaUuid: String;
     compania: CompaniaDTO;
     producto: ProductoDTO;
}