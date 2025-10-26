import { SucursalDTO } from "@dto/sucursal.dto";

export class CompraDTO {
    compraUuid: String;
    fecha: Date;
    hora: Date;
    total: Number;
    sucursal: SucursalDTO;
}
