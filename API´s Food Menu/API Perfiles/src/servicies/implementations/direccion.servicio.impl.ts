import { DireccionDTO } from "@dto/direccion.dto";
import { DireccionIServicio } from "servicies/interfaces/direccion.servicio";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";
import { DireccionDAO } from "@data.impl/direccion.dao.impl";

import { DireccionIDAO } from "@data.dao/direccion.dao";
import { dir } from "console";
import { Direccion } from "@entity/direccion.entity";
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
    async getDireccionByUuid(direccionUuid: String): Promise<DireccionDTO> {
         LoggerAPI.info("Se ha iniciado el metodo en DireccionServicio para obtener Direccion por ID")
        try {
             let result=await this.direcionDAO.getDireccionByUuid(direccionUuid)
             if(result){
                LoggerAPI.info(`Se ha encontrado la direccion con UUID ${direccionUuid}`)
                return result;
             }else{
                LoggerAPI.info(`No se ha encontrado la direccion con UUID ${direccionUuid}`)
                return null;
             }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en DireccionServicio metodo GetDireccionByUuid error; ${error}`)
            throw error;
        }
    }
    async agregarDireccion(direccionDTO: DireccionDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia metodo de agregar Direccion en DireccionServicio")
        try {
            let direcion=new Direccion();
            direcion=plainToInstance(Direccion,direccionDTO)
             let result= await this.direcionDAO.agregarDireccion(direcion)
             if(result){
                LoggerAPI.info("Se ha agregado la direccion correctamente.")
                return true;
             }else{
                LoggerAPI.warn("No se ha agregado la direccion")
                return false;
             }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en agregar direccion en DireccionServicio error: ${error}`)
            throw error;
        }
    }
    async eliminarDireccionById(direccionId: Number): Promise<Boolean> {
        LoggerAPI.info("Se inicia metodo de agregar Direccion en DireccionServicio")
        try {
             let result= await this.direcionDAO.eliminarDireccion(direccionId)
             if(result){
                LoggerAPI.info("Se ha eliminado la direccion correctamente.")
                return true;
             }else{
                LoggerAPI.warn("No se ha eliminado la direccion")
                return false;
             }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en eliminar direccion en DireccionServicio error: ${error}`)
            throw error;
        }
    }
    actualizarDireccion(direccionDTO: DireccionDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}