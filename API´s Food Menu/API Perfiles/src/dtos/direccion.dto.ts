import { PersonaDTO } from "@dto/persona.dto";
export class DireccionDTO {
     direccionUuid: String;
     calle: String;
     numero: String;
     asentamiento: String;
     persona: PersonaDTO;
}