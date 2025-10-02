import { CentroProductivoDTO } from "@dto/centro-productivo.dto";
import { ProductoCompaniaDTO } from "@dto/producto-compania.dto";
export class CompaniaDTO {
     companiaUuid: String;
     nombre: String;
     centroProductivos: CentroProductivoDTO[];
     productoCompanias: ProductoCompaniaDTO[];
}