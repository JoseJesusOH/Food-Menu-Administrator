import { Persona } from "@entity/persona.entity";
import {PersonaIDAO} from "@data.dao/persona.dao"
export class PersonaDAO implements PersonaIDAO{
    getPersonas(): Persona[] {
        throw new Error("Method not implemented.");
    }
    getPersonaByID(personaID: Number): Persona {
        throw new Error("Method not implemented.");
    }
    agregarPersona(persona: Persona): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarPersonaByID(personaID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarPersona(persona: Persona): Boolean {
        throw new Error("Method not implemented.");
    }
    
}