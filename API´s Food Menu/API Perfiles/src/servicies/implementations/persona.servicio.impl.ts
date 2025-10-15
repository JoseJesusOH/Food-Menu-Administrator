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

    getPersonaById(personaId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    getPersonaByUuid(personaUuid: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
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