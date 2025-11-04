// Importaciones necesarias para la capa de servicio
import { VentaDTO } from "@dto/venta.dto";
import { VentaIService } from "@service.dao/venta.dao";
import { VentaIDAO } from "@data.dao/venta.dao";
import { VentaDAO } from "@data.impl/venta.dao.impl";
import { Venta } from "@entity/venta.entity";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

/**
 * Clase que implementa la interfaz {@link VentaIService}.
 * 
 * Esta clase actúa como una capa intermedia entre el controlador y la capa DAO.
 * Contiene la lógica de negocio para gestionar las operaciones relacionadas con
 * las ventas, incluyendo la obtención, creación, actualización y eliminación de registros.
 * 
 * Cada método utiliza {@link LoggerAPI} para registrar eventos e incidencias relevantes.
 */
class VentaService implements VentaIService {
    
    /** Instancia del DAO utilizada para interactuar con la base de datos de ventas. */
    ventaDAO: VentaIDAO = new VentaDAO();

    /**
     * Obtiene todas las ventas registradas en el sistema.
     * 
     * @returns Una promesa que resuelve con un arreglo de objetos {@link VentaDTO}.
     */
    async getVentas(): Promise<VentaDTO[]> {
        LoggerAPI.info("Se inicia servicio para obtener las ventas.");
        try {
            const ventas = await this.ventaDAO.getVentas();

            if (ventas && ventas.length > 0) {
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

    /**
     * Obtiene una venta específica a partir de su UUID.
     * 
     * @param ventaUuid UUID único que identifica la venta.
     * @returns Una promesa que resuelve con un objeto {@link VentaDTO} si se encuentra, o `null` en caso contrario.
     */
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

    /**
     * Agrega una nueva venta al sistema.
     * 
     * @param ventaDTO Objeto {@link VentaDTO} con los datos de la venta a registrar.
     * @returns Una promesa que resuelve con `true` si la venta fue agregada correctamente.
     */
    async agregarVenta(ventaDTO: VentaDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para agregar una nueva venta al sistema.");
        try {
            const venta = plainToInstance(Venta, ventaDTO);
            const ventaCreada = await this.ventaDAO.agregarVenta(venta);

            if (ventaCreada) {
                LoggerAPI.info(`Venta agregada correctamente con UUID: ${ventaDTO.ventaUuid}`);
                return true;
            } else {
                LoggerAPI.warn("No se pudo registrar la venta en el sistema.");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Error al agregar la venta en el servicio: ${error}`);
            throw error;
        }
    }

    /**
     * Elimina una venta del sistema utilizando su UUID.
     * 
     * @param ventaUuid UUID único que identifica la venta a eliminar.
     * @returns Una promesa que resuelve con `true` si la venta fue eliminada correctamente.
     */
    async eliminarVenta(ventaUuid: String): Promise<Boolean> {
        LoggerAPI.info(`Se inicia servicio para eliminar la venta con UUID: ${ventaUuid}`);
        try {
            const venta = await this.ventaDAO.getVentaByUuid(ventaUuid);

            if (!venta || !venta.ventaId) {
                LoggerAPI.warn(`No se encontró una venta con UUID: ${ventaUuid}`);
                return false;
            }

            const ventaEliminada = await this.ventaDAO.eliminarVentaById(venta.ventaId);

            if (ventaEliminada) {
                LoggerAPI.info(`Venta con ID ${venta.ventaId} (UUID: ${ventaUuid}) eliminada correctamente.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo eliminar la venta con ID ${venta.ventaId} (UUID: ${ventaUuid}).`);
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Error al eliminar la venta con UUID ${ventaUuid}: ${error}`);
            throw error;
        }
    }

    /**
     * Actualiza los datos de una venta existente en el sistema.
     * 
     * @param ventaDTO Objeto {@link VentaDTO} con los datos actualizados de la venta.
     * @returns Una promesa que resuelve con `true` si la venta fue actualizada correctamente.
     */
    async actualizarVenta(ventaDTO: VentaDTO): Promise<Boolean> {
        LoggerAPI.info(`Se inicia servicio para actualizar la venta con UUID: ${ventaDTO.ventaUuid}`);
        try {
            const ventaExistente = await this.ventaDAO.getVentaByUuid(ventaDTO.ventaUuid);

            if (!ventaExistente || !ventaExistente.ventaId) {
                LoggerAPI.warn(`No se encontró la venta con UUID: ${ventaDTO.ventaUuid} para actualizar.`);
                return false;
            }

            ventaDTO.ventaUuid = ventaExistente.ventaUuid;

            const venta = plainToInstance(Venta, ventaDTO);
            const ventaActualizada = await this.ventaDAO.actualizarVenta(venta);

            if (ventaActualizada) {
                LoggerAPI.info(`Venta con ID ${venta.ventaId} (UUID: ${ventaDTO.ventaUuid}) actualizada correctamente.`);
                return true;
            } else {
                LoggerAPI.warn(`No se pudo actualizar la venta con ID ${venta.ventaId} (UUID: ${ventaDTO.ventaUuid}).`);
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Error al actualizar la venta con UUID ${ventaDTO.ventaUuid}: ${error}`);
            throw error;
        }
    }
}

export { VentaService };
