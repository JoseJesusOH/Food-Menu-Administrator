import { Persona } from "../../modelos/persona";
import {PersonaIDAO} from "../interfaces/personaIDAO"
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