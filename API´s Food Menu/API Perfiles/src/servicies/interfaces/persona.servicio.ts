import { PersonaDTO } from "@dto/persona.dto";

export interface PersonaIServicio{
    getPersonas():Promise<PersonaDTO[]>;
    getPersonaById(personaId:Number):Promise<Boolean>;
    getPersonaByUuid(personaUuid:String):Promise<Boolean>;
    agregarPersona(personaDTO:PersonaDTO):Promise<Boolean>;
    actualizarPersona(personaDTO:PersonaDTO):Promise<Boolean>;
    eliminarPersonaById(personaId:Number):Promise<Boolean>;
}