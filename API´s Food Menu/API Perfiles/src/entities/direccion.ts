import { Persona } from "./persona"
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn,ManyToOne,
    ForeignKey
} from "typeorm"

@Entity("direcciones")
export class Direccion {

    @PrimaryGeneratedColumn({
        name: "direccion_id"
    })
    private direccionID: Number;

    @Column({
        name: "direccion_uuid"
    })
    @Generated("uuid")
    private direccionUUID: String;

    @Column({
        name: "calle",
        length: 100
    })
    private calle: String;

    @Column({
        name: "numero",
        length: 100
    })
    private numero: String;

    @Column({
        name: "asentamiento",
        length: 100
    })
    private asentamiento: String;

 @ManyToOne(() => Persona, (Persona) => Persona.getDirecciones)
          @JoinColumn({name:"persona_id" ,foreignKeyConstraintName:"persona_direccion_idfk"})
    private persona: Persona;


    setDireccionID(direccionID: Number): void {
        this.direccionID = direccionID
    }
    getDireccionID(): Number {
        return this.direccionID
    }
    setDireccionUUID(direccionUUID: String): void {
        this.direccionUUID = direccionUUID
    }
    getDireccionUUID(): String {
        return this.direccionUUID
    }
    setCalle(calle: String): void {
        this.calle = calle
    }
    getCalle(): String {
        return this.calle
    }
    setNumero(numero: String): void {
        this.numero = numero
    }
    getNumero(): String {
        return this.numero
    }
    setAsentamiento(asentamiento: String): void {
        this.asentamiento = asentamiento
    }
    getAsentamiento(): String {
        return this.asentamiento
    }
    setPersona(persona: Persona): void {
        this.persona = persona
    }
    getPersona(): Persona {
        return this.persona
    }
}