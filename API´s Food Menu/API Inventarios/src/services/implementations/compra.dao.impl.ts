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
    async agregarCompra(compraDTO: CompraDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para agregar una nueva compra al sistema.");
        try {
            let compra = plainToInstance(Compra, compraDTO);
            const compraCreada = await this.compraDAO.agregarCompra(compra);
            if (compraCreada) {
                return true;
            } else {
                LoggerAPI.warn("No se pudo crear la compra en el sistema.");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al agregar una nueva compra: ${error}`);
            throw error;
        }
    }
  async actualizarCompra(compraDTO: CompraDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para actualizar una compra del sistema.");
        try {
            const compra = plainToInstance(Compra, compraDTO);
            const compraActualizada = await this.compraDAO.actualizarCompra(compra);
            if (compraActualizada) {
                return true;
            } else {
                LoggerAPI.warn("No se pudo actualizar la compra en el sistema.");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al actualizar la compra: ${error}`);
            throw error;
        }
    }
 async eliminarCompra(compraUuid: string): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para eliminar una compra del sistema.");
        try {
            const compra = await this.compraDAO.getCompraByUuid(compraUuid);
            if (!compra) {
                LoggerAPI.warn("No se pudo encontrar la compra en el sistema.");
                return false;
            }
            const compraEliminada = await this.compraDAO.eliminarCompraById(compra.compraId);
            if (compraEliminada) {
                LoggerAPI.info("Compra eliminada correctamente del sistema.");
                return true;
            } else {
                LoggerAPI.warn("No se pudo eliminar la compra en el sistema.");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al eliminar la compra: ${error}`);
            throw error;
        }
    }

async getCompraByUuid(compraUuid: string): Promise<CompraDTO> {
        LoggerAPI.info("Se inicia servicio para obtener una compra del sistema.");
        try {
            const compra = await this.compraDAO.getCompraByUuid(compraUuid);
            if (compra) {
                return plainToInstance(CompraDTO, compra);
            } else {
                LoggerAPI.warn("No se pudo encontrar la compra en el sistema.");
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al obtener la compra: ${error}`);
            throw error;
        }
    }
}