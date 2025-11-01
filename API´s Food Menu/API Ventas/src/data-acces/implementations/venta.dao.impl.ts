import { VentaIDAO } from "@data.dao/venta.dao";
import { Venta } from "@entity/venta.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class VentaDAO implements VentaIDAO {
    ventaRepositorio = Conexion.getRepository(Venta)
    async getVentas(): Promise<Venta[]> {
        LoggerAPI.info("Se inicia la búsqueda de todas las ventas en la base de datos");


        try {
            const ventas = await this.ventaRepositorio.find();

            if (!ventas || ventas.length === 0) {
                LoggerAPI.warn("No se encontraron ventas registradas en el sistema");
                return [];
            } else {
                LoggerAPI.info(`Se obtuvieron correctamente ${ventas.length} ventas`);
                return ventas;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al obtener las ventas. Detalle del error: ${error}`);
            throw error;
        }
    }

    async getVentaById(ventaId: number): Promise<Venta> {
        LoggerAPI.info(`Se inicia la búsqueda de la venta con ID: ${ventaId}`);

        try {
            const venta = await this.ventaRepositorio.findOneBy({ ventaId });

            if (venta !== null) {
                LoggerAPI.info(`Se obtuvo correctamente la venta con ID ${ventaId}`);
                return venta;
            } else {
                LoggerAPI.warn(`No se encontró ninguna venta con ID ${ventaId}`);
                return null;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al buscar la venta por ID ${ventaId}. Detalle del error: ${error}`);
            throw error;
        }
    }

    async getVentaByUuid(ventaUuid: string): Promise<Venta> {
        LoggerAPI.info(`Se inicia la búsqueda de la venta con UUID: ${ventaUuid}`);

        try {
            const venta = await this.ventaRepositorio.findOneBy({ ventaUuid });

            if (venta !== null) {
                LoggerAPI.info(`Se obtuvo correctamente la venta con UUID ${ventaUuid}`);
                return venta;
            } else {
                LoggerAPI.warn(`No se encontró ninguna venta con UUID ${ventaUuid}`);
                return null;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al buscar la venta por UUID ${ventaUuid}. Detalle del error: ${error}`);
            throw error;
        }
    }

    agregarVenta(venta: Venta): boolean {
        throw new Error("Method not implemented.");
    }
    actualizarVenta(venta: Venta): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarVentaByID(ventaID: number): boolean {
        throw new Error("Method not implemented.");
    }

}