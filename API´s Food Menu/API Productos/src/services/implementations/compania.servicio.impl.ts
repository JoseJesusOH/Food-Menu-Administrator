// Importa el DTO de compañía
import { CompaniaIDAO } from "@data.dao/compania.dao";
import { CompaniaDAO } from "@data.impl/compania.dao.impl";
import { CompaniaDTO } from "@dto/compania.dto";
import { Compania } from "@entity/compania.entity";

// Importa la interfaz del servicio de compañía
import { CompaniaIServicio } from "@service.dao/compania.servicio";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";
/**
 * Servicio para manejar operaciones de compañías.
 * Actualmente los métodos no están implementados.
 */
class CompaniaServicio implements CompaniaIServicio {
  companiaDAO: CompaniaIDAO =new CompaniaDAO();
  // Método para obtener todas las compañías
  async getCompanias(): Promise<CompaniaDTO[]> {
      LoggerAPI.info("Se inicia la consulta de todas las compañías en servicio compañía");
      try {
           let companias= await this.companiaDAO.getCompanias();
           if(companias.length>0){
               let companiaDTOS=[]
                companiaDTOS=plainToInstance(CompaniaDTO,companias);
               LoggerAPI.info("Se encontraron compañías en la base de datos");
               return companiaDTOS;
           }else {
            LoggerAPI.warn("No se encontraron compañías en la base de datos");
            return [];
           }
      } catch (error) {
          LoggerAPI.error("Error al consultar todas las compañías en servicio compañía", error);
          throw error;
      }
  }

  // Método para agregar una nueva compañía
 async agregarCompania(companiaDTO: CompaniaDTO): Promise<Boolean> {
      LoggerAPI.info("Se inicia el proceso para agregar una nueva compañía en servicio compañía");
      try {
            let compania=plainToInstance(Compania,companiaDTO);
            let result= await this.companiaDAO.agregarCompania(compania);
            if(result){
                LoggerAPI.info("Compañía agregada exitosamente en servicio compañía");
                return true;
            }else {
                LoggerAPI.warn("No se pudo agregar la compañía en servicio compañía");
                return false;
            }
      } catch (error) {
          LoggerAPI.error("Error al agregar una nueva compañía en servicio compañía", error);
          throw error;
      }
  } 

  // Método para actualizar los datos de una compañía existente
  async actualizarCompania(companiaDTO: CompaniaDTO): Promise<boolean> {
        LoggerAPI.info("Se inicia el proceso para actualizar una compañía en servicio compañía");
         try {
            let compania=plainToInstance(Compania,companiaDTO);
            let result= await this.companiaDAO.actualizarCompania(compania);
            if(result){
                LoggerAPI.info("Compañía actualizada exitosamente en servicio compañía");
                return true;
            }
            else {
                LoggerAPI.warn("No se pudo actualizar la compañía en servicio compañía");
                return false;
            }
            } catch (error) { 
                  LoggerAPI.error("Error al actualizar una compañía en servicio compañía", error);
                  throw error;
            }     
  }

  // Método para eliminar una compañía por su UUID
  async eliminarCompania(companiaUuid: string): Promise<boolean> {
      LoggerAPI.info("Se inicia el proceso para eliminar una compañía en servicio compañía");
      try{  
            let compania= await this.companiaDAO.getCompaniaByUuid(companiaUuid);
            if(!compania){
                LoggerAPI.warn("No se encontró la compañía con el UUID proporcionado en servicio compañía");
                return false;
            }
            let result= await this.companiaDAO.eliminarCompaniaById(compania.companiaId);
            if(result){
                LoggerAPI.info("Compañía eliminada exitosamente en servicio compañía");
                return true;
            }else {
                LoggerAPI.warn("No se pudo eliminar la compañía en servicio compañía");
                return false;
            }
      } catch (error) {
          LoggerAPI.error("Error al eliminar una compañía en servicio compañía", error);
          throw error;
      }
            
  }

  // Método para obtener los datos de una compañía por su UUID
  getCompaniaByUuid(companiaUuid: string): Promise<CompaniaDTO> {
        throw new Error("Method not implemented.");
  }
}

export { CompaniaServicio };
