import {Direccion} from "./dirección"
export class Persona {
    private personaID:Number;
    private personaUUID:String;
    private nombre: String;
    private apellidoPaterno: String;
    private apellidoMaterno: String;
    private CURP: String;
    private NSS: String;
    private RFC: String;
    private direcciones:Direccion[];
}