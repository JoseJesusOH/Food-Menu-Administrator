import { Compra } from "@entity/compra.entity"

export interface CompraIDAO {
    getCompras(): Promise<Compra[]>;
    getCompraById(compraId: Number): Promise<Compra>;
    getCompraByUuid(compraUuid: String): Promise<Compra>;
    eliminarCompraById(compraId: Number): Promise<Boolean>;
    actualizarCompra(compra: Compra): Promise<Boolean>;
    agregarCompra(compra: Compra): Promise<Boolean>;
}
