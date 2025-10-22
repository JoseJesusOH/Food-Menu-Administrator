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
    async getCompraById(compraId: Number): Promise<Compra> {
        try {
            const compra = await this.compraRepositorio.findOne({
                where: { compraId: compraId },
                relations: ["sucursal"]
            });

            if (compra) {
                LoggerAPI.info("Compra encontrada por ID", { id: compraId });
                return compra;
            } else {
                LoggerAPI.info("No se encontró la compra con el ID especificado", { id: compraId });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener la compra por ID", error);
            throw error;
        }
    }

    async getCompraByUuid(compraUuid: String): Promise<Compra> {
        try {
            const compra = await this.compraRepositorio.findOne({
                where: { compraUuid: compraUuid },
                relations: ["sucursal"]
            });

            if (compra) {
                LoggerAPI.info("Compra encontrada por UUID", { uuid: compraUuid });
                return compra;
            } else {
                LoggerAPI.info("No se encontró la compra con el UUID especificado", { uuid: compraUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener la compra por UUID", error);
            throw error;
        }
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