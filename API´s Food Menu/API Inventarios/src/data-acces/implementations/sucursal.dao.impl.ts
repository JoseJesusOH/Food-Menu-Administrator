import { SucursalIDAO } from "@data.dao/sucursal.dao";
import { Sucursal } from "@entity/sucursal.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

class SucursalDAO implements SucursalIDAO {
    sucursalRepositorio = Conexion.getRepository(Sucursal);
    async getSucursales(): Promise<Sucursal[]> {
        try {
            const sucursales = await this.sucursalRepositorio.find();
            if (sucursales.length > 0) {
                LoggerAPI.info("Se obtuvieron todas las sucursales", { total: sucursales.length });
                return sucursales;
            } else {
                LoggerAPI.info("No se obtuvieron sucursales", { total: sucursales.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener las sucursales", error);
            throw error;
        }
    }
    getSucursalById(sucursalId: Number): Promise<Sucursal> {
        throw new Error("Method not implemented.");
    }
    getSucursalByUuid(sucursalUuid: String): Promise<Sucursal> {
        throw new Error("Method not implemented.");
    }
    eliminarSucursalById(sucursalId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarSucursal(sucursal: Sucursal): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarSucursal(sucursal: Sucursal): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}