import { CompraDTO } from "@dto/compra.dto";
import { CompraIServicio } from "@service.dao/compra.dao";

class CompraServicio implements CompraIServicio{
    getCompras(): Promise<CompraDTO[]> {
        throw new Error("Method not implemented.");
    }
    agregarCompra(compra: CompraDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarCompra(compra: CompraDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarCompra(compraUuid: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    getCompraByUuid(compraUuid: string): Promise<CompraDTO> {
        throw new Error("Method not implemented.");
    }
    
}