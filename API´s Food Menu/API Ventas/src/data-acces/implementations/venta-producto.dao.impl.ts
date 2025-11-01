import { VentaProductoIDAO } from "@data.dao/venta-producto.dao";
import { VentaProducto } from "@entity/venta-producto.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class VentaProductoDAO implements VentaProductoIDAO {
    ventaProductoRepositorio = Conexion.getRepository(VentaProducto);

    async getVentaProductoById(ventaProductoId: Number): Promise<VentaProducto> {
        LoggerAPI.info(`Se inicia la búsqueda de VentaProducto con ID: ${ventaProductoId}`);

        try {
            const ventaProducto = await this.ventaProductoRepositorio.findOneBy({
                ventaProductoId: ventaProductoId.valueOf(),
            });

            if (ventaProducto !== null) {
                LoggerAPI.info(`Se obtuvo correctamente el registro VentaProducto con ID ${ventaProductoId}`);
                return ventaProducto;
            } else {
                LoggerAPI.warn(`No se encontró un registro VentaProducto con ID ${ventaProductoId}`);
                return null;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al buscar VentaProducto por ID. Detalle del error: ${error}`);
            throw error;
        }
    }
    async getVentaProductoByUuid(ventaProductoUuid: String): Promise<VentaProducto> {
        LoggerAPI.info(`Se inicia la búsqueda de VentaProducto con UUID: ${ventaProductoUuid}`);

        try {
            const ventaProducto = await this.ventaProductoRepositorio.findOneBy({
                ventaProductoUuid: ventaProductoUuid.toString(),
            });

            if (ventaProducto !== null) {
                LoggerAPI.info(`Se obtuvo correctamente el registro VentaProducto con UUID ${ventaProductoUuid}`);
                return ventaProducto;
            } else {
                LoggerAPI.warn(`No se encontró un registro VentaProducto con UUID ${ventaProductoUuid}`);
                return null;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al buscar VentaProducto por UUID. Detalle del error: ${error}`);
            throw error;
        }
    }
    getVentaProductoByIDVenta(ventaID: number): VentaProducto[] {
        throw new Error("Method not implemented.");
    }
    agregarVentaProducto(ventaProducto: VentaProducto): boolean {
        throw new Error("Method not implemented.");
    }
    actualizarVentaProducto(ventaProducto: VentaProducto): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarVentaProductoByID(ventaProductoID: number): boolean {
        throw new Error("Method not implemented.");
    }

}