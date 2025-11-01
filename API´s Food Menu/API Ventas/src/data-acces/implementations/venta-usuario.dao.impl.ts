import { VentaUsuarioIDAO } from "@data.dao/venta-usuario.dao";
import { VentaUsuario } from "@entity/venta-usuario.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class VentaUsuarioDAO implements VentaUsuarioIDAO {
    ventaUsuarioRepositorio = Conexion.getRepository(VentaUsuario)
    async getVentasUsuarioByIdVenta(ventaId: number): Promise<VentaUsuario[]> {
        return null;
        /* LoggerAPI.info(`Se inicia la búsqueda de usuarios asociados a la venta con ID: ${ventaId}`);
 
         try {
             const ventaUsuarios = await this.ventaUsuarioRepositorio.findBy({
                 ventaId: ventaId,
             });
 
             if (!ventaUsuarios || ventaUsuarios.length === 0) {
                 LoggerAPI.warn(`No se encontraron usuarios asociados a la venta con ID ${ventaId}`);
                 return [];
             } else {
                 LoggerAPI.info(`Se obtuvieron correctamente ${ventaUsuarios.length} usuarios asociados a la venta con ID ${ventaId}`);
                 return ventaUsuarios;
             }
 
         } catch (error) {
             LoggerAPI.warn(`Error al obtener los usuarios asociados a la venta con ID ${ventaId}. Detalle del error: ${error}`);
             throw error;
         }
         */
    }

    async getVentaUsuarioById(ventaUsuarioId: number): Promise<VentaUsuario> {
        LoggerAPI.info(`Se inicia la búsqueda de VentaUsuario con ID: ${ventaUsuarioId}`);

        try {
            const ventaUsuario = await this.ventaUsuarioRepositorio.findOneBy({
                ventaUsuarioId: ventaUsuarioId,
            });

            if (ventaUsuario !== null) {
                LoggerAPI.info(`Se obtuvo correctamente el registro VentaUsuario con ID ${ventaUsuarioId}`);
                return ventaUsuario;
            } else {
                LoggerAPI.warn(`No se encontró un registro VentaUsuario con ID ${ventaUsuarioId}`);
                return null;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al buscar VentaUsuario por ID ${ventaUsuarioId}. Detalle del error: ${error}`);
            throw error;
        }
    }

    async getVentaUsuarioByUuid(ventaUsuarioUuid: string): Promise<VentaUsuario> {
        LoggerAPI.info(`Se inicia la búsqueda de VentaUsuario con UUID: ${ventaUsuarioUuid}`);

        try {
            const ventaUsuario = await this.ventaUsuarioRepositorio.findOneBy({
                ventaUsuarioUuid: ventaUsuarioUuid,
            });

            if (ventaUsuario !== null) {
                LoggerAPI.info(`Se obtuvo correctamente el registro VentaUsuario con UUID ${ventaUsuarioUuid}`);
                return ventaUsuario;
            } else {
                LoggerAPI.warn(`No se encontró un registro VentaUsuario con UUID ${ventaUsuarioUuid}`);
                return null;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al buscar VentaUsuario por UUID ${ventaUsuarioUuid}. Detalle del error: ${error}`);
            throw error;
        }
    }
    async agregarVentaUsuario(ventaUsuario: VentaUsuario): Promise<boolean> {
        LoggerAPI.info("Se inicia el proceso de registro de un nuevo VentaUsuario en la base de datos");

        try {
            const resultado = await this.ventaUsuarioRepositorio.insert(ventaUsuario);

            if (resultado.identifiers.length > 0) {
                LoggerAPI.info(`El registro VentaUsuario fue insertado exitosamente con ID ${resultado.identifiers[0].id}`);
                return true;
            } else {
                LoggerAPI.warn("La inserción de VentaUsuario no devolvió un identificador, podría no haberse completado correctamente");
                return false;
            }

        } catch (error) {
            LoggerAPI.warn(`Error al registrar VentaUsuario en la base de datos: ${error}`);
            throw error;
        }
    }

    eliminarVentaUsuarioByID(ventaUsuarioID: number): boolean {
        throw new Error("Method not implemented.");
    }

}