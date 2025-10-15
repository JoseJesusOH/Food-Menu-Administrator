import { DireccionDTO } from "@dto/direccion.dto";
import { DireccionIServicio } from "servicies/interfaces/direccion.servicio";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";
import { DireccionDAO } from "@data.impl/direccion.dao.impl";

import { DireccionIDAO } from "@data.dao/direccion.dao";
import { dir } from "console";
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

    async getDireccionById(direcionId: Number): Promise<DireccionDTO> {
        LoggerAPI.info("Se ha iniciado el metodo en DireccionServicio para obtener Direccion por ID")
        try {
             let result=await this.direcionDAO.getDireccionById(direcionId)
             if(result){
                LoggerAPI.info(`Se ha encontrado la direccion con ID ${direcionId}`)
                return result;
             }else{
                LoggerAPI.info(`No se ha encontrado la direccion con ID ${direcionId}`)
                return null;
             }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en DireccionServicio metodo GetDireccionById error; ${error}`)
            throw error;
        }
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