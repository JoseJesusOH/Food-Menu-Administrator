import { SucursalDTO } from "@dto/sucursal.entity";

export class CompraDTO {
    compraUuid: String;
    fecha: Date;
    hora: Date;
    total: Number;
    sucursal: SucursalDTO;
}
