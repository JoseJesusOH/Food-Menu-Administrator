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

    getVentaUsuarioByIDVenta(ventaID: number): VentaUsuario {
        throw new Error("Method not implemented.");
    }
    getVentaUsuarioByID(ventaUsuarioID: number): VentaUsuario {
        throw new Error("Method not implemented.");
    }
    getVentaUsuarioByUUID(ventaUsuarioUUID: string): VentaUsuario {
        throw new Error("Method not implemented.");
    }
    agregarVentaUsuario(ventaUsuario: VentaUsuario): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarVentaUsuarioByID(ventaUsuarioID: number): boolean {
        throw new Error("Method not implemented.");
    }

}