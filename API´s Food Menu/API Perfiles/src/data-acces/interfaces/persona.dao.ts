/**
 * Importación de la entidad Persona
 */
import { Persona } from "@entity/persona.entity"
/**
 * Interfaz de PersonaIDAO
 */
export interface PersonaIDAO {
    /**
     * Metodo para obtener todas las personas
     * @return {Persona[]} Retorna un arreglo de personas
     */
    getPersonas(): Promise<Persona[]>;
    /**
     * Metodo para obtener una persona por su ID
     * @param personaId ID de la persona
     * @return {Persona} Retorna la persona que coincide con el ID
     */
    getPersonaById(personaId: Number): Promise<Persona>;

    /**
     *     Metodo para obtener una persona por su UUID
     * @param personaUuid UUID de la persona
     * @return {Persona} Retorna la persona que coincide con el UUID
     */
    getPersonaByUuid(personaUuid: String): Promise<Persona>;
    /** 
     * Metodo para agregar una nueva persona
     * @param persona Persona a agregar
     * @return {Boolean} Retorna true si se agrego correctamente, false si no
     */
    agregarPersona(persona: Persona): Promise<Boolean>;

    /**
     * Metodo para eliminar una persona por su ID
     * @param personaId ID de la persona a eliminar
     * @return {Boolean} Retorna true si se elimino correctamente, false si no
     */
    eliminarPersonaById(personaId: Number): Promise<Boolean>;

    /**
     * Metodo para actualizar una persona
     * @param persona Persona a actualizar
     * @return {Boolean} Retorna true si se actualizo correctamente, false si no
     */
    actualizarPersona(persona: Persona): Promise<Boolean>;
}
