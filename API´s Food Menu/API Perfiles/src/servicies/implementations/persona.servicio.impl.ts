import { PersonaIDAO } from "@data.dao/persona.dao";
import { PersonaDAO } from "@data.impl/persona.dao.impl";
import { PersonaDTO } from "@dto/persona.dto";
import { PersonaIServicio } from "servicies/interfaces/persona.servicio";
import { LoggerAPI } from "@utility/logger";
export class PersonaServicio implements PersonaIServicio{
    personaDAO: PersonaIDAO = new PersonaDAO();
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