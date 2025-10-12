 import { DireccionDTO } from "@dto/direccion.dto";
export class PersonaDTO {
     personaUuid: String;
     nombre: String;
     apellidoPaterno: String;
     apellidoMaterno: String;
     CURP: String;
     NSS: String;
     RFC: String;
     direcciones: DireccionDTO[];

}
