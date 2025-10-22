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
 async getSucursalById(sucursalId: Number): Promise<Sucursal> {
    try {
        const sucursal = await this.sucursalRepositorio.findOne({ 
            where: { sucursalId } 
        });

        if (sucursal) {
            LoggerAPI.info("Sucursal encontrada por ID", { id: sucursalId });
            return sucursal;
        } else {
            LoggerAPI.info("No se encontró la sucursal con el ID especificado", { id: sucursalId });
            return null;
        }
    } catch (error) {
        LoggerAPI.error("Error al obtener la sucursal por ID", error);
        throw error;
    }
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