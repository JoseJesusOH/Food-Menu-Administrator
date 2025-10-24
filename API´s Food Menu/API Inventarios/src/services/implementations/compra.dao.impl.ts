import { CompraDTO } from "@dto/compra.dto"
interface CompraIServicio {
    getCompras(): Promise<CompraDTO[]>;
    agregarCompra(compra: CompraDTO): Promise<Boolean>;
    actualizarCompra(compra: CompraDTO): Promise<Boolean>;
    eliminarCompra(compraUuid: string): Promise<Boolean>;
    getCompraByUuid(compraUuid: string): Promise<CompraDTO>;
}

export { CompraIServicio };
