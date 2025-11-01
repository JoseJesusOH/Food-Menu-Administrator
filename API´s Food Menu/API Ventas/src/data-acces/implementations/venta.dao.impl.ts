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

    getVentaByID(ventaID: number): Venta {
        throw new Error("Method not implemented.");
    }
    getVentaByUUID(ventaUUID: string): Venta {
        throw new Error("Method not implemented.");
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