/**
 * Importaciones requeridas para el metodo el modelo Persona e interface PersonaIDAO
 */
import { Persona } from "@entity/persona.entity";
import {PersonaIDAO} from "@data.dao/persona.dao"
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";
/**
 * Clase correspondiente al acceso a datos de Persona
 */
export class PersonaDAO implements PersonaIDAO{
    personaRepositorio = Conexion.getRepository(Persona);
    /**
     * Metodo para obtener todas las personas del sistema
     */
    async getPersonas(): Promise<Persona[]> {
        LoggerAPI.info("Se inicia el metodo para obtener personas en PersonaDAO")
        try {
            let personas = await this.personaRepositorio.find();
            if (personas.length > 0) {
                LoggerAPI.info("Se encontraron personas en el sistema")
                return personas;
            }
            else {
                LoggerAPI.warn("No se encontraron personas en el sistema")
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error en la consulta de personas en el sistema: " + error)
            throw error;
        }
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