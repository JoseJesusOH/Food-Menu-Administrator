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
import { Persona } from "@entity/persona.entity";

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

    async agregarPersona(personaDTO: PersonaDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el método para agregar una persona en PersonaServicio");
        try {
            // Convertimos el DTO en una entidad Persona para su persistencia
            let persona = plainToInstance(Persona, personaDTO);

            // Llamada al DAO para agregar la persona en la base de datos
            let resultado = await this.personaDAO.agregarPersona(persona);

            if (resultado) {
                LoggerAPI.info("La persona ha sido agregada exitosamente");
                return true;
            } else {
                LoggerAPI.warn("No se ha podido agregar la persona");
                return false;
            }

        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al agregar la persona en PersonaServicio; ${error}`);
            throw error;
        }
    }
    async actualizarPersona(personaDTO: PersonaDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el método para actualizar una persona en PersonaServicio");
        try {
            // Convertimos el DTO a la entidad Persona
            let persona = plainToInstance(Persona, personaDTO);

            // Llamamos al DAO para actualizar la persona
            let resultado = await this.personaDAO.actualizarPersona(persona);

            if (resultado) {
                LoggerAPI.info("La persona ha sido actualizada exitosamente");
                return true;
            } else {
                LoggerAPI.warn("No se ha podido actualizar la persona");
                return false;
            }

        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al actualizar la persona en PersonaServicio; ${error}`);
            throw error;
        }
    }
async eliminarPersonaById(personaId: Number): Promise<Boolean> {
    LoggerAPI.info(`Se inicia el método para eliminar la persona con ID: ${personaId} en PersonaServicio`);
    try {
        // Se invoca el DAO para eliminar la persona por su ID
        let resultado = await this.personaDAO.eliminarPersonaById(personaId);

        if (resultado) {
            LoggerAPI.info(`La persona con ID ${personaId} ha sido eliminada correctamente.`);
            return true;
        } else {
            LoggerAPI.warn(`No se encontró o no se pudo eliminar la persona con ID ${personaId}.`);
            return false;
        }
    } catch (error) {
        LoggerAPI.warn(`Se produjo un error al eliminar la persona con ID ${personaId} en PersonaServicio: ${error}`);
        throw error;
    }
}
}