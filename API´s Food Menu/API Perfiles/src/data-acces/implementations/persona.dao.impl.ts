/**
 * Importaciones requeridas para el metodo el modelo Persona e interface PersonaIDAO
 */
import { Persona } from "@entity/persona.entity";
import {PersonaIDAO} from "@data.dao/persona.dao"

/**
 * Clase correspondiente al acceso a datos de Persona
 */
export class PersonaDAO implements PersonaIDAO{
    /**
     * Metodo para obtener todas las personas del sistema
     */
    getPersonas(): Persona[] {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo para obtener una persona del sistema por id 
     */
    getPersonaByID(personaID: Number): Persona {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para agregar una persona al sistema
     */
    agregarPersona(persona: Persona): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para eliminar una persona del sistema
     */
    eliminarPersonaByID(personaID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo para actualizar una persona del sistema
     */
    actualizarPersona(persona: Persona): Boolean {
        throw new Error("Method not implemented.");
    }
    
}