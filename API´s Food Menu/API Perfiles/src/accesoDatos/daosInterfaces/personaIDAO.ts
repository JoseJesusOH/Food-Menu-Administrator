import {Persona} from "../../modelos/persona"
export interface PersonaIDAO{
    getPersonas():Persona[];
    getPersonaByID(personaID:Number):Persona;
    agregarPersona(persona:Persona):Boolean;
    eliminarPersonaByID(personaID:Number):Boolean;
    actualizarPersona(persona:Persona):Boolean;
}
