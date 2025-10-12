
/**
 * Importaciones TypeORM requeridas
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
    JoinColumn, ManyToOne
} from "typeorm"
  /**
 * Expose expe las propiedades para la transformacion en classs transformer mientras
 * Exclude excluye esos parametros.
 */
import { Exclude, Expose, ClassTransformOptions } from "class-transformer";
/**
 * Importaciones de la entidad Persona requerida para la relacion
 */
import { Persona } from "@entity/persona.entity"
/**
 * Entidad Direccion     
 *  
 */
@Entity("direcciones")
export class Direccion {

    /**
     *   Identificador de la direccion
     * 
     */
    @PrimaryGeneratedColumn({
        name: "direccion_id"
    }) 
     @Exclude()
     direccionId: Number;

    /**
     * Identificador UUID de la direccion
     */
    @Column({
        name: "direccion_uuid"
    })
    @Generated("uuid")
     direccionUuid: String;

    /**
     * Calle de la direccion
     */
    @Column({
        name: "calle",
        length: 100
    })
     calle: String;

    /**
     * Numero de la direccion
     */
    @Column({
        name: "numero",
        length: 100
    })
     numero: String;

    /**
     * Colonia Direccion
     */
    @Column({
        name: "asentamiento",
        length: 100
    })
     asentamiento: String;

    /**
     * Persona asociada a la dirección
     */
    @ManyToOne(() => Persona, (Persona) => Persona.getDirecciones)
    @JoinColumn({ name: "persona_id", foreignKeyConstraintName: "persona_direccion_idfk" })
     persona: Persona;

    /**
     *  Establece el identificador de la direccion
     * @param direccionId Identificador de la direccion
     * 
     */
    setDireccionId(direccionId: Number): void {
        this.direccionId = direccionId
    }
    /**
     *  Obtiene el identificador de la direccion
     * @returns Identificador de la direccion
     */
    getDireccionId(): Number {
        return this.direccionId
    }

    /**
     * Asigna el UUID de la direccion
     * @param direccionUuid UUID de la direccion
     */
    setDireccionUuid(direccionUuid: String): void {
        this.direccionUuid = direccionUuid
    }
    /**
     * Devuelve el identificador UUID de la direccion
     * @returns UUID de la direccion
     */
    getDireccionUuid(): String {
        return this.direccionUuid
    }
    /**
     * Asigna la calle donde esta la direccion o domicilio de la persona
     * @param calle Calle de la direccion
     */
    setCalle(calle: String): void {
        this.calle = calle
    }
    /**
     * Devuelve la calle de la direccion
     * @returns Calle de la direccion
     */
    getCalle(): String {
        return this.calle
    }
    /**
     * Asigna el numero de la direccion
     * @param numero Numero de la calle 
     */
    setNumero(numero: String): void {
        this.numero = numero
    }

    /**
     * 
     * @returns Devuelve el numero de la direccion
     */
    getNumero(): String {
        return this.numero
    }

    /**
     * Asigna el asentamiento de la direccion
     * @param asentamiento Asentamiento de la direccion
     */
    setAsentamiento(asentamiento: String): void {
        this.asentamiento = asentamiento
    }

    /**
     * Devuelve el asentamiento de la direccion
     * @returns Devuelve el asentamiento de la direccion
     */
    getAsentamiento(): String {
        return this.asentamiento
    }

    /**
     * Asigna la persona a la direccion
     * @param persona Asigna la persona a la direccion
     */
    setPersona(persona: Persona): void {
        this.persona = persona
    }

    /**
     * Devuelve la persona asociada a la direccion
     * @returns Devuelve la persona asociada a la direccion
     */
    getPersona(): Persona {
        return this.persona
    }
}