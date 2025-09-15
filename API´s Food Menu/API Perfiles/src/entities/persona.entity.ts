/**
 * Importaciones TypeORM 
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
     OneToMany,
} from "typeorm"

/**
 * Importaciones de Entidad Direccion requerida para la relación
 */
import { Direccion } from "./direccion.entity"

/**
 * Entidad Persona que representa la tabla personas en la base de datos
 */
@Entity("personas")
export class Persona {
    /**
     * Identificador único de la persona
     */
    @PrimaryGeneratedColumn({
        name: "persona_id"
    })
    private personaId: Number;

    /**
     * UUID de la persona
     */
    @Column({
        name: "persona_uuid"
    })
    @Generated("uuid")
    private personaUuid: String;

    /**
     * Nombre de la persona
     */
    @Column({
        name: "nombre",
        length: 100
    })
    private nombre: String;

    /**
     * Apellido paterno de la persona
     */
    @Column({
        name: "apellido_paterno",
        length: 100
    })
    private apellidoPaterno: String;

    /**
     * Apellido materno de la persona
     */
    @Column({
        name: "apellido_materno",
        length: 100
    })
    private apellidoMaterno: String;

    /** 
     * CURP de la persona
     */
    @Column({
        name: "curp",
        length: 20
    })
    private CURP: String;

    /**
     * NSS de la persona
     */
    @Column({
        name: "nss",
        length: 20
    })
    private NSS: String;

    /**
     * RFC de la persona
     */
    @Column({
        name: "rfc",
        length: 20
    })
    private RFC: String;

    /**
     * Relación uno a muchos con la entidad Direccion
     */
  @OneToMany(() => Direccion, (Direccion) => Direccion.getPersona)
    private direcciones: Direccion[];

    /**
     *  Asigna el id de la persona
     * @param personaId ID de la persona
     */
    setPersonaId(personaId: Number): void {
        this.personaId = personaId
    }

    /**
     * Devuelve el id de la persona
     * @returns El id de la persona
     */
    getPersonaId(): Number {
        return this.personaId
    }

    /** 
     * Asigna el UUID de la persona
     * @param personaUuid UUID de la persona
     */
    setPersonaUuid(personaUuid: String): void {
        this.personaUuid = personaUuid
    }

    /**
     * Devuelve el UUID de la persona
     * @returns El UUID de la persona
     */
    getPersonaUuid(): String {
        return this.personaUuid
    }
    
    /** 
     *  Asigna el nombre de la persona
     * @param nombre Nombre de la persona
     */
    setNombre(nombre: String): void {
        this.nombre = nombre
    }

    /**
     * Devuelve el nombre de la persona
     * @returns El nombre de la persona
     */
    getNombre(): String {
        return this.nombre
    }

    /** 
     *  Asigna el apellido paterno de la persona
     * @param apellidoPaterno Apellido paterno de la persona
     */
    setApellidoPaterno(apellidoPaterno: String): void {
        this.apellidoPaterno = apellidoPaterno
    }

    /** 
     *  Asigna el apellido materno de la persona
     * @param apellidoMaterno Apellido materno de la persona
     */
    setApellidoMaterno(apellidoMaterno: String): void {
        this.apellidoMaterno = apellidoMaterno
    }

    /**
     * Asigna el CURP de la persona
     * @param CURP CURP de la persona
     */
    setCURP(CURP: String): void {
        this.CURP = CURP
    }

    /**
     * Asigna el NSS de la persona
     * @param NSS NSS de la persona
     */
    setNSS(NSS: String): void {
        this.NSS = NSS
    }

    /**
     * Asigna el RFC de la persona
     * @param RFC RFC de la persona
     */
    setRFC(RFC: String): void {
        this.RFC = RFC
    }

    /**
     * Asigna las direcciones asociadas a la persona
     * @param direcciones Direcciones asociadas a la persona
     */
    setDirecciones(direcciones: Direccion[]): void {
        this.direcciones = direcciones
    }

    /**
     *  Devuelve el apellido paterno de la persona
     * @returns Apellido paterno de la persona
     */
    getApellidoPaterno(): String {
        return this.apellidoPaterno
    }

    /** 
     *  Devuelve el apellido materno de la persona
     * @returns Apellido materno de la persona
     */
    getApellidoMaterno(): String {
        return this.apellidoMaterno
    }

  /** 
   *  Devuelve el CURP de la persona
   * @returns CURP de la persona
   */
    getCURP(): String {
        return this.CURP
    }

  /**
   *  Devuelve el NSS de la persona
   * @returns NSS de la persona
   */
    getNSS(): String {
        return this.NSS
    }

    /** 
     * Devuelve el RFC de la persona
     * @returns RFC de la persona
     */
    getRFC(): String {
        return this.RFC
    }

    /**
     * Devuelve las direcciones asociadas a la persona
     * @returns Direcciones asociadas a la persona
     */
    getDirecciones(): Direccion[] {
        return this.direcciones
    }

}
