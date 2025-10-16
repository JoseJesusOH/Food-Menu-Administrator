// Importa la interfaz del DAO que define las operaciones de acceso a datos de personas
import { PersonaIDAO } from "@data.dao/persona.dao";

// Importa la implementación concreta del DAO de personas
import { PersonaDAO } from "@data.impl/persona.dao.impl";

// Importa el DTO que representa la estructura de una persona para la capa de servicio
import { PersonaDTO } from "@dto/persona.dto";

// Importa la interfaz que define las operaciones del servicio de personas
import { PersonaIServicio } from "servicies/interfaces/persona.servicio";

// Importa la utilidad para el registro de logs e información del sistema
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

/** 
 * Servicio encargado de gestionar la lógica de negocio relacionada con las personas.
 * Implementa las operaciones definidas en la interfaz PersonaIServicio.
 */
export class PersonaServicio implements PersonaIServicio {

    /** Instancia del DAO utilizada para interactuar con la base de datos de personas */
    personaDAO: PersonaIDAO = new PersonaDAO();

    /** Obtiene todas las personas registradas en el sistema */
    async getPersonas(): Promise<PersonaDTO[]> {
        LoggerAPI.info("Se inicia el método para obtener las personas en PersonaServicio");
        try {
            let resultado = await this.personaDAO.getPersonas();

            if (resultado.length > 0) {
                LoggerAPI.info(`Se han encontrado un total de ${resultado.length} personas`);
                return resultado;
            } else {
                LoggerAPI.warn("No se han encontrado personas registradas");
                return [];
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener las personas en PersonaServicio; ${error}`);
            return [];
        }
    }


    async getPersonaById(personaId: Number): Promise<PersonaDTO> {
        LoggerAPI.info(`Se inicia el método para obtener la persona con ID: ${personaId} en PersonaServicio`);
        try {
            let resultado = await this.personaDAO.getPersonaById(personaId);
            if (resultado) {
                LoggerAPI.info(`Se ha encontrado la persona con ID ${personaId}`);
                return resultado;
            } else {
                LoggerAPI.warn(`No se ha encontrado ninguna persona con el ID ${personaId}`);
                return new PersonaDTO();
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener la persona con ID ${personaId} en PersonaServicio; ${error}`);
            return new PersonaDTO();
        }
    }
    async getPersonaByUuid(personaUuid: String): Promise<PersonaDTO> {
        LoggerAPI.info(`Se inicia el método para obtener la persona con UUID: ${personaUuid} en PersonaServicio`);
        try {
            let resultado = await this.personaDAO.getPersonaByUuid(personaUuid);

            if (resultado) {
                LoggerAPI.info(`Se ha encontrado la persona con UUID ${personaUuid}`);
                return resultado;
            } else {
                LoggerAPI.warn(`No se ha encontrado ninguna persona con el UUID ${personaUuid}`);
                return new PersonaDTO();
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener la persona con UUID ${personaUuid} en PersonaServicio; ${error}`);
            return new PersonaDTO();
        }
    }

    agregarPersona(personaDTO: PersonaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarPersona(personaDTO: PersonaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarPersonaById(personaId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}