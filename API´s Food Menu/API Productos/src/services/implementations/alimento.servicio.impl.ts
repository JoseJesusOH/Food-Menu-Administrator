// Importación del Data Transfer Object (DTO) para la entidad Alimento
import { AlimentoIDAO } from "@data.dao/alimento.dao";
import { AlimentoDAO } from "@data.impl/alimento.dao.impl";
import { AlimentoDTO } from "@dto/alimento.dto";

// Importación de la interfaz que define los métodos del servicio de Alimento
import { AlimentoIServicio } from "@service.dao/alimento.servicio";
import { LoggerAPI } from "@utility/logger";
import { instanceToInstance } from "class-transformer";

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
            let alimentosDTO :AlimentoDTO[]=[];
            alimentosDTO=instanceToInstance(alimentos);
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
    agregarAlimento(alimentoDTO: AlimentoDTO): Promise<AlimentoDTO> {
        LoggerAPI.info("Se inicia servicio para agregar un nuevo alimento al sistema.")
        try {
            const alimentoCreado= this.alimentoDAO.crearAlimento(alimentoDTO);
            if(alimentoCreado){
                return alimentoCreado;
            }else{
                LoggerAPI.warn(`No se pudo crear el alimento en el sistema.`)
                return null;
            }   
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al agregar un nuevo alimento en el servicio errror; ${error}`)
            throw error;
        }
     }

     actuaLizarAlimento(alimentoDTO: AlimentoDTO): Promise<AlimentoDTO> {
        LoggerAPI.info("Se inicia servicio para actualizar un alimento del sistema.")
        try {
            const alimentoActualizado= this.alimentoDAO.actualizarAlimento(nuevosDatos);
            if(alimentoActualizado){
                return alimentoActualizado;
            }else{
                LoggerAPI.warn(`No se pudo actualizar el alimento en el sistema.`)
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al actualizar el alimento en el servicio errror; ${error}`)
            throw error;
        }
     }

    /** Elimina un alimento según su identificador único. */
    eliminar(alimentoUuid: Number): Promise<Boolean> {
        LoggerAPI.info("Se inicia servicio para eliminar un alimento del sistema.")
        try {
            const alimentoEliminado= this.alimentoDAO.eliminarAlimento(alimentoUuid);
            if(alimentoEliminado){
                return alimentoEliminado;
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
    obtenerAlimentoByUuid(alimentoUuid: Number): Promise<AlimentoDTO> {
        LoggerAPI.info("Se inicia servicio para obtener un alimento del sistema.")
        try {
            const alimento= this.alimentoDAO.obtenerAlimentoByUuid(alimentoUuid);
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
