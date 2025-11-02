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

    async agregarVenta(venta: Venta): Promise<boolean> {
        LoggerAPI.info("Se inicia el proceso de registro de una nueva venta en la base de datos");

        try {
            const resultado = await this.ventaRepositorio.insert(venta);

            if (resultado.identifiers.length > 0) {
                LoggerAPI.info(`La venta fue registrada exitosamente con ID ${resultado.identifiers[0].id}`);
                return true;
            } else {
                LoggerAPI.warn("La inserción de la venta no devolvió un identificador, podría no haberse completado correctamente");
                return false;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al registrar la venta en la base de datos: ${error}`);
            throw error;
        }
    }

    async actualizarVenta(venta: Venta): Promise<boolean> {
        LoggerAPI.info(`Se inicia la actualización de la venta con ID: ${venta.ventaId}`);

        try {
            const resultado = await this.ventaRepositorio.update(
                { ventaId: venta.ventaId },
                venta
            );

            if (resultado.affected && resultado.affected > 0) {
                LoggerAPI.info(`La venta con ID ${venta.ventaId} fue actualizada exitosamente`);
                return true;
            } else {
                LoggerAPI.warn(`No se encontró una venta con ID ${venta.ventaId} para actualizar`);
                return false;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al actualizar la venta con ID ${venta.ventaId}. Detalle del error: ${error}`);
            throw error;
        }
    }

    async eliminarVentaById(ventaId: number): Promise<boolean> {
        LoggerAPI.info(`Se inicia la eliminación de la venta con ID: ${ventaId}`);

        try {
            const resultado = await this.ventaRepositorio.delete({ ventaId });

            if (resultado.affected && resultado.affected > 0) {
                LoggerAPI.info(`La venta con ID ${ventaId} fue eliminada exitosamente`);
                return true;
            } else {
                LoggerAPI.warn(`No se encontró una venta con ID ${ventaId} para eliminar`);
                return false;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al eliminar la venta con ID ${ventaId}. Detalle del error: ${error}`);
            throw error;
        }
    }


}