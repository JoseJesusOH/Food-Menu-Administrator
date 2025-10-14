import { PersonaDTO } from "@dto/persona.dto";
import { PersonaIServicio } from "servicies/interfaces/persona.servicio";

export class PersonaServicio implements PersonaIServicio{
    getPersonas(): Promise<PersonaDTO[]> {
        throw new Error("Method not implemented.");
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