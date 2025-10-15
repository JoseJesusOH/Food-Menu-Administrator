import { DireccionDTO } from "@dto/direccion.dto";
import { DireccionIServicio } from "servicies/interfaces/direccion.servicio";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";
import { DireccionDAO } from "@data.impl/direccion.dao.impl";

import { DireccionIDAO } from "@data.dao/direccion.dao";
export class DireccionServicio implements DireccionIServicio {
    direcionDAO: DireccionIDAO = new DireccionDAO
    async getDirecciones(): Promise<DireccionDTO[]> {
        LoggerAPI.info("Se inicia el metodo para obtener las direcciones en DireccionServicio");
        try {
            let resultado = await this.direcionDAO.getDirecciones();
            if (resultado.length > 0) {
                LoggerAPI.info(`Se han encontrado un total de ${resultado.length} direcciones`);
                return resultado;
            } else {
                LoggerAPI.warn("No se han encontrado direcciones.");
                return [];
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener las direcciones en DireccionServicio; ${error}`);
            return [];
        }
    }

    getDireccionById(direcionId: Number): Promise<DireccionDTO> {
        throw new Error("Method not implemented.");
    }
    getDireccionByUuid(direccionUuid: String): Promise<DireccionDTO> {
        throw new Error("Method not implemented.");
    }
    agregarDireccion(direccionDTO: DireccionDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarDireccionById(direccionId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarDireccion(direccionDTO: DireccionDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}