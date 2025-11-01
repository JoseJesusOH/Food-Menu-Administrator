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
    async getVentaProductoByIdVenta(ventaId: Number): Promise<VentaProducto[]> {
        return null;
        /*
        LoggerAPI.info(`Se inicia la búsqueda de productos asociados a la venta con ID: ${ventaId}`);

        try {
            const ventaProductos = await this.ventaProductoRepositorio.findBy({
                ventaId: ventaId.valueOf(),
            });

            if (!ventaProductos || ventaProductos.length === 0) {
                LoggerAPI.warn(`No se encontraron productos asociados a la venta con ID ${ventaId}`);
                return [];
            } else {
                LoggerAPI.info(`Se obtuvieron correctamente ${ventaProductos.length} productos asociados a la venta con ID ${ventaId}`);
                return ventaProductos;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al obtener los productos asociados a la venta con ID ${ventaId}. Detalle del error: ${error}`);
            throw error;
        }
        */
    }
    async agregarVentaProducto(ventaProducto: VentaProducto): Promise<Boolean> {
        LoggerAPI.info("Se inicia el proceso de registro de un nuevo VentaProducto en la base de datos");

        try {
            const resultado = await this.ventaProductoRepositorio.insert(ventaProducto);

            if (resultado.identifiers.length > 0) {
                LoggerAPI.info(`El registro VentaProducto fue insertado exitosamente con ID ${resultado.identifiers[0].id}`);
                return true;
            } else {
                LoggerAPI.warn("La inserción de VentaProducto no devolvió un identificador, podría no haberse completado correctamente");
                return false;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al registrar VentaProducto en la base de datos: ${error}`);
            throw error;
        }
    }

    actualizarVentaProducto(ventaProducto: VentaProducto): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarVentaProductoByID(ventaProductoID: number): boolean {
        throw new Error("Method not implemented.");
    }

}