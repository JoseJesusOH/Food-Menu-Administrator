import { CompraIDAO } from "@data.dao/compra.dao";
import { Compra } from "@entity/compra.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class CompraDAO implements CompraIDAO {
    compraRepositorio = Conexion.getRepository(Compra)
    async getCompras(): Promise<Compra[]> {
        try {
            let compras = await this.compraRepositorio.find({ relations: ["sucursal"] });
            if (compras.length > 0) {
                LoggerAPI.info("Se obtuvieron todas las compras", { total: compras.length });
                return compras;
            } else {
                LoggerAPI.info("No se obtuvieron compras", { total: compras.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener las compras", error);
            throw error;
        }
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