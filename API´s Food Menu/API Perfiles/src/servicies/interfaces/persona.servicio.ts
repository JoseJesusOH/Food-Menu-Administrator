import { PersonaDTO } from "@dto/persona.dto";

export interface PersonaIServicio{
    getPersonas():Promise<PersonaDTO[]>;
    getPersonaById(personaId:Number):Promise<PersonaDTO>;
    getPersonaByUuid(personaUuid:String):Promise<PersonaDTO>;
    agregarPersona(personaDTO:PersonaDTO):Promise<Boolean>;
    actualizarPersona(personaDTO:PersonaDTO):Promise<Boolean>;
    eliminarPersonaById(personaId:Number):Promise<Boolean>;
}