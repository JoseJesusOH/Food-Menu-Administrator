import { Direccion } from "./dirección"
export class Persona {
    private personaID: Number;
    private personaUUID: String;
    private nombre: String;
    private apellidoPaterno: String;
    private apellidoMaterno: String;
    private CURP: String;
    private NSS: String;
    private RFC: String;
    private direcciones: Direccion[];

    setPersonaID(personaID: Number): void {
        this.personaID = personaID
    }
    getPersonaID(): Number {
        return this.personaID
    }
    setPersonaUUID(personaUUID: String): void {
        this.personaUUID = personaUUID
    }
    getPersonaUUID(): String {
        return this.personaUUID
    }
    setNombre(nombre: String): void {
        this.nombre = nombre
    }
    getNombre(): String {
        return this.nombre
    }
    setApellidoPaterno(apellidoPaterno: String): void {
        this.apellidoPaterno = apellidoPaterno
    }
    setApellidoMaterno(apellidoMaterno: String): void {
        this.apellidoMaterno = apellidoMaterno
    }

    setCURP(CURP: String): void {
        this.CURP = CURP
    }
    setNSS(NSS: String): void {
        this.NSS = NSS
    }
    setRFC(RFC: String): void {
        this.RFC = RFC
    }
    setDirecciones(direcciones: Direccion[]): void {
        this.direcciones = direcciones
    }

    getApellidoPaterno(): String {
        return this.apellidoPaterno
    }
    getApellidoMaterno(): String {
        return this.apellidoMaterno
    }

    getCURP(): String {
        return this.CURP
    }
    getNSS(): String {
        return this.NSS
    }
    getRFC(): String {
        return this.RFC
    }
    getDirecciones(): Direccion[] {
        return this.direcciones
    }

}
