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

    async getSucursalByUuid(sucursalUuid: String): Promise<Sucursal> {
        try {
            const sucursal = await this.sucursalRepositorio.findOne({
                where: { sucursalUuid }
            });

            if (sucursal) {
                LoggerAPI.info("Sucursal encontrada por UUID", { uuid: sucursalUuid });
                return sucursal;
            } else {
                LoggerAPI.info("No se encontró la sucursal con el UUID especificado", { uuid: sucursalUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener la sucursal por UUID", error);
            throw error;
        }
    }

    async eliminarSucursalById(sucursalId: Number): Promise<Boolean> {
        try {
            const resultado = await this.sucursalRepositorio.delete({ sucursalId });

            if (resultado.affected && resultado.affected > 0) {
                LoggerAPI.info("Sucursal eliminada correctamente", { id: sucursalId });
                return true;
            } else {
                LoggerAPI.info("No se encontró la sucursal para eliminar", { id: sucursalId });
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar la sucursal por ID", error);
            throw error;
        }
    }

    async actualizarSucursal(sucursal: Sucursal): Promise<Boolean> {
        try {
            const existe = await this.sucursalRepositorio.findOne({ where: { sucursalId: sucursal.sucursalId } });

            if (!existe) {
                LoggerAPI.info("No se encontró la sucursal para actualizar", { id: sucursal.sucursalId });
                return false;
            }

            await this.sucursalRepositorio.save(sucursal);
            LoggerAPI.info("Sucursal actualizada correctamente", { id: sucursal.sucursalId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al actualizar la sucursal", error);
            throw error;
        }
    }

    async agregarSucursal(sucursal: Sucursal): Promise<Boolean> {
        try {
            const nuevaSucursal = await this.sucursalRepositorio.save(sucursal);
            LoggerAPI.info("Sucursal agregada correctamente", { id: nuevaSucursal.sucursalId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al agregar la sucursal", error);
            throw error;
        }
    }

}