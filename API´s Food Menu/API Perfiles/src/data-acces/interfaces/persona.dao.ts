/**
 * Importación de la entidad Persona
 */
import {Persona} from "@entity/persona.entity"
/**
 * Interfaz de PersonaIDAO
 */
export interface PersonaIDAO{
   /**
    * Metodo para obtener todas las personas
    * @return {Persona[]} Retorna un arreglo de personas
    */
    getPersonas():Persona[];
    /**
     * Metodo para obtener una persona por su ID
     * @param personaID ID de la persona
     * @return {Persona} Retorna la persona que coincide con el ID
     */
    getPersonaByID(personaID:Number):Persona;
    
        /** 
         * Metodo para agregar una nueva persona
         * @param persona Persona a agregar
         * @return {Boolean} Retorna true si se agrego correctamente, false si no
         */
    agregarPersona(persona:Persona):Boolean;
    
    /**
     * Metodo para eliminar una persona por su ID
     * @param personaID ID de la persona a eliminar
     * @return {Boolean} Retorna true si se elimino correctamente, false si no
     */
    eliminarPersonaByID(personaID:Number):Boolean;
    
    /**
     * Metodo para actualizar una persona
     * @param persona Persona a actualizar
     * @return {Boolean} Retorna true si se actualizo correctamente, false si no
     */
    actualizarPersona(persona:Persona):Boolean;
}
