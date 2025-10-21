import { CompraIDAO } from "@data.dao/compra.dao";
import { Compra } from "@entity/compra.entity";

class CompraDAO implements CompraIDAO{
    getCompras(): Promise<Compra[]> {
        throw new Error("Method not implemented.");
    }
    getCompraById(compraId: Number): Promise<Compra> {
        throw new Error("Method not implemented.");
    }
    getCompraByUuid(compraUuid: String): Promise<Compra> {
        throw new Error("Method not implemented.");
    }
    eliminarCompraById(compraId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarCompra(compra: Compra): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarCompra(compra: Compra): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}