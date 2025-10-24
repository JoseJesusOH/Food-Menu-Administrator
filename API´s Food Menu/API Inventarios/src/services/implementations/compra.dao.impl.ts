import { CompraIDAO } from "@data.dao/compra.dao";
import { CompraDAO } from "@data.impl/compra.dao.impl";
import { CompraDTO } from "@dto/compra.dto";
import { Compra } from "@entity/compra.entity";
import { CompraIServicio } from "@service.dao/compra.dao";
import { LoggerAPI } from "@utility/logger";
import { instanceToInstance, instanceToPlain, plainToInstance } from "class-transformer";

class CompraServicio implements CompraIServicio {
    compraDAO: CompraIDAO = new CompraDAO();
    async getCompras(): Promise<CompraDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener las compras");
        try {
            const compras = await this.compraDAO.getCompras();
            if (compras.length > 0) {
                const comprasDTO = plainToInstance(CompraDTO, compras);
                return comprasDTO;
            } else {
                LoggerAPI.warn("No se han encontrado compras en el sistema.");
                return [];
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al obtener las compras: ${error}`);
            throw error;
        }
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