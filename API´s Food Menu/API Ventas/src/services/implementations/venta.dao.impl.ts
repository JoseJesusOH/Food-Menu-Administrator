import { VentaDTO } from "@dto/venta.dto";
import { VentaIService } from "@service.dao/venta.dao";
import { VentaIDAO } from "@data.dao/venta.dao";
import { Venta } from "@entity/venta.entity";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";
import { VentaDAO } from "@data.impl/venta.dao.impl";

class VentaService implements VentaIService {
    ventaDAO: VentaIDAO = new VentaDAO
    async getVentas(): Promise<VentaDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener las ventas.");
        try {
            const ventas = await this.ventaDAO.getVentas();

            if (ventas && ventas.length > 0) {
                // Convertir entidades a DTOs
                const ventasDTO = plainToInstance(VentaDTO, ventas);
                LoggerAPI.info(`Se obtuvieron ${ventasDTO.length} ventas del sistema.`);
                return ventasDTO;
            } else {
                LoggerAPI.warn("No se encontraron ventas en el sistema.");
                return [];
            }
        } catch (error) {
            LoggerAPI.warn(`Error al obtener las ventas en el servicio: ${error}`);
            throw error;
        }
    }
 async getVentaByUuid(ventaUuid: String): Promise<VentaDTO> {
        LoggerAPI.info(`Se inicia servicio para obtener la venta con UUID: ${ventaUuid}`);
        try {
            const venta = await this.ventaDAO.getVentaByUuid(ventaUuid);

            if (venta) {
                const ventaDTO = plainToInstance(VentaDTO, venta);
                LoggerAPI.info(`Venta encontrada con UUID: ${ventaUuid}`);
                return ventaDTO;
            } else {
                LoggerAPI.warn(`No se encontró una venta con UUID: ${ventaUuid}`);
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Error al obtener la venta con UUID ${ventaUuid}: ${error}`);
            throw error;
        }
    }
    agregarVenta(ventaDTO: VentaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarVenta(ventaUuid: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarVenta(ventaDTO: VentaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}