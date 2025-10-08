// Importación del Data Transfer Object (DTO) para la entidad Alimento
import { AlimentoIDAO } from "@data.dao/alimento.dao";
import { AlimentoDAO } from "@data.impl/alimento.dao.impl";
import { AlimentoDTO } from "@dto/alimento.dto";
import { Alimento } from "@entity/alimento.entity";

// Importación de la interfaz que define los métodos del servicio de Alimento
import { AlimentoIServicio } from "@service.dao/alimento.servicio";
import { LoggerAPI } from "@utility/logger";
import { instanceToInstance, instanceToPlain, plainToInstance } from "class-transformer";

/**
 * Clase que implementa la interfaz AlimentoIServicio.
 * Contiene los métodos necesarios para la gestión de alimentos,
 * incluyendo operaciones de consulta, inserción, eliminación y búsqueda.
 * 
 * Actualmente los métodos no están implementados.
 */
class AlimentoServicio implements AlimentoIServicio {
    alimentoDAO: AlimentoIDAO =new AlimentoDAO();
    /** Obtiene la lista de todos los alimentos registrados. */
    async obtenerAlimentos(): Promise<AlimentoDTO[]> {
       LoggerAPI.info("Se inica serfvicio para obtener los alimentos")
       try {
         const alimentos= await this.alimentoDAO.getAlimentos();
         if(alimentos.length>0){
            let alimentosDTO =[];
            alimentosDTO=plainToInstance(AlimentoDTO,alimentos);
            return alimentosDTO;
         }else{
            LoggerAPI.warn(`No se han encontrado alimentos en el sistema.`)
            return []
         }
       } catch (error) {
        LoggerAPI.warn(`Se produjo un error al obtener los alimentos en el servicio errror; ${error}`)
        throw error;
       }
    }

    /** Agrega un nuevo alimento al sistema. */
    async agregarAlimento(alimentoDTO: AlimentoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para agregar un nuevo alimento al sistema.")
        try {
            let alimento  = new Alimento();
            alimento=plainToInstance(Alimento,alimentoDTO);
            const alimentoCreado= await this.alimentoDAO.agregarAlimento(alimento);
            if(alimentoCreado){
                return true;
            }else{
                LoggerAPI.warn(`No se pudo crear el alimento en el sistema.`)
                return null;
            }   
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al agregar un nuevo alimento en el servicio errror; ${error}`)
            throw error;
        }
     }

    async actualizarAlimento(alimentoDTO: AlimentoDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para actualizar un alimento del sistema.")
        try {
            let alimento  = new Alimento();
            alimento=plainToInstance(Alimento,alimentoDTO);
            const alimentoActualizado= await this.alimentoDAO.actualizarAlimento(alimento);
            if(alimentoActualizado){
                return true;
            }else{
                LoggerAPI.warn(`No se pudo actualizar el alimento en el sistema.`)
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al actualizar el alimento en el servicio errror; ${error}`)
            throw error;
        }
     }

    /** Elimina un alimento según su identificador único. */
    async eliminarAlimentoByUuid(alimentoUuid: String): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para eliminar un alimento del sistema.")
        try {
            let alimento=await this.alimentoDAO.getAlimentByUuid(alimentoUuid);
            if(!alimento){
                LoggerAPI.warn(`No se pudo encontrar el alimento en el sistema.`)
                return null;
            }
            const alimentoEliminado= this.alimentoDAO.eliminarAlimentoById(alimento.alimentoId);
            if(alimentoEliminado){
                LoggerAPI.info(`Alimento eliminado correctamente del sistema.`)
                return true;
            }else{
                LoggerAPI.warn(`No se pudo eliminar el alimento en el sistema.`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al eliminar el alimento en el servicio errror; ${error}`)
            throw error;
        }
    }

    /** Busca un alimento específico a partir de su identificador. */
   async  obtenerAlimentoByUuid(alimentoUuid: String): Promise<AlimentoDTO> {
        LoggerAPI.info("Se inicia servicio para obtener un alimento del sistema.")
        try {
            const alimento= await  this.alimentoDAO.getAlimentByUuid(alimentoUuid);
            if(alimento){
                return alimento;
            }else{
                LoggerAPI.warn(`No se pudo encontrar el alimento en el sistema.`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al obtener el alimento en el servicio errror; ${error}`)
            throw error;
        }
    }
}

export { AlimentoServicio }
