// Interfaz del DAO que define las operaciones de acceso a datos de personas
import { PersonaIDAO } from "@data.dao/persona.dao";

// Implementación concreta del DAO de personas
import { PersonaDAO } from "@data.impl/persona.dao.impl";

// DTO que representa la estructura de una persona
import { PersonaDTO } from "@dto/persona.dto";

// Interfaz del servicio que define los métodos de negocio de personas
import { PersonaIServicio } from "servicies/interfaces/persona.servicio";

// Logger para registrar información, advertencias y errores
import { LoggerAPI } from "@utility/logger";

// Utilidad para convertir objetos planos en instancias de clase
import { plainToInstance } from "class-transformer";

// Entidad Persona para persistencia en base de datos
import { Persona } from "@entity/persona.entity";

/** 
 * Servicio encargado de gestionar la lógica de negocio relacionada con las personas.
 * Implementa las operaciones definidas en PersonaIServicio.
 */
export class PersonaServicio implements PersonaIServicio {

    // DAO utilizado para interactuar con la base de datos de personas
    personaDAO: PersonaIDAO = new PersonaDAO();

    // Obtiene todas las personas registradas en el sistema
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

    // Obtiene una persona por su ID
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

    // Obtiene una persona por su UUID
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

    // Agrega una nueva persona al sistema
    async agregarPersona(personaDTO: PersonaDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el método para agregar una persona en PersonaServicio");
        try {
            let persona = plainToInstance(Persona, personaDTO);
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

    // Actualiza la información de una persona existente
    async actualizarPersona(personaDTO: PersonaDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia el método para actualizar una persona en PersonaServicio");
        try {
            let persona = plainToInstance(Persona, personaDTO);
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

    // Elimina una persona por su UUID
    async eliminarPersonaByUuid(personaUuid: String): Promise<Boolean> {
        LoggerAPI.info(`Se inicia el método para eliminar la persona con UUID: ${personaUuid} en PersonaServicio`);
        try {
            let result = await this.personaDAO.getPersonaByUuid(personaUuid);
            if (result === null) {
                LoggerAPI.warn(`No se ha encontrado persona UUID ${personaUuid}`)
                return null;
            }
            let resultado = await this.personaDAO.eliminarPersonaById(result.personaId);

            if (resultado) {
                LoggerAPI.info(`La persona con UUID ${personaUuid} ha sido eliminada correctamente.`);
                return true;
            } else {
                LoggerAPI.warn(`No se encontró o no se pudo eliminar la persona con UUID ${personaUuid}.`);
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se produjo un error al eliminar la persona con UUID ${personaUuid} en PersonaServicio: ${error}`);
            throw error;
        }
    }
}
