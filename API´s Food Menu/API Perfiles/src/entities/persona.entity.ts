import { Direccion } from "./direccion.entity"

import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn,
    ForeignKey
} from "typeorm"

@Entity("personas")
export class Persona {
    @PrimaryGeneratedColumn({
        name: "persona_id"
    })
    private personaID: Number;

    @Column({
        name: "persona_uuid"
    })
    @Generated("uuid")
    private personaUUID: String;

    @Column({
        name: "nombre",
        length: 100
    })
    private nombre: String;

    @Column({
        name: "apellido_paterno",
        length: 100
    })
    private apellidoPaterno: String;

    @Column({
        name: "apellido_materno",
        length: 100
    })
    private apellidoMaterno: String;

    @Column({
        name: "curp",
        length: 20
    })
    private CURP: String;

    @Column({
        name: "nss",
        length: 20
    })
    private NSS: String;

    @Column({
        name: "rfc",
        length: 20
    })
    private RFC: String;

  @OneToMany(() => Direccion, (Direccion) => Direccion.getPersona)
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
