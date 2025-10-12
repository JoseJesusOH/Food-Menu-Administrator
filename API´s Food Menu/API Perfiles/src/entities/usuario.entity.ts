/**
 * Importaciones TypeORM
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
    JoinColumn,
} from "typeorm"

/**
 * Importacion de Entidad Persona requeridas para la relacion
 */
import { Persona } from "@entity/persona.entity"
/**
 * Expose expe las propiedades para la transformacion en classs transformer mientras
 * Exclude excluye esos parametros.
 */
import { Exclude, Expose, ClassTransformOptions } from "class-transformer";
/**
 * Entidad Usuario que mapea la tabla usuarios de la base de datos
 */
@Entity("usuarios")
export class Usuario {

    /**
     * ID del usuario
     */
    @PrimaryGeneratedColumn({
        name: "usuario_id"
    })
    @Exclude()
     usuarioId: Number;

    /**
     * UUID del usuario
     */
    @Column({
        name: "usuario_uuid"
    })
    @Generated("uuid")
     usuarioUuid: String;

    /**
     * Nombre del usuario
     */
    @Column({
        name: "usuario",
        length: 100
    })
     usuario: String;

    /** 
     * Contraseña del usuario
     */
    @Column({
        name: "password",
        length: 100
    })
     password: String;

    /**
     * Correo del usuario   
     */
    @Column({
        name: "correo",
        length: 100
    })
     correo: String;

    /**
     * Relacion uno a uno con la entidad Persona
     */
    @OneToOne(() => Persona)
    @JoinColumn({ name: "persona_id", foreignKeyConstraintName: "usuario_persona_IDFK" })
     persona: Persona;


    /**
     *  Asigna un ID al usuario
     * @param usuarioId ID a asignar al usuario
     */
    setUsuarioId(usuarioId: Number): void {
        this.usuarioId = usuarioId
    }

    /**
     *  Obtiene el ID del usuario
     * @returns ID del usuario
     */
    getUsuarioId(): Number {
        return this.usuarioId
    }

    /**
     * Asigna un UUID al usuario
     * @param usuarioUuid UUID a asignar al usuario
     */
    setUsuarioUuid(usuarioUuid: String): void {
        this.usuarioUuid = usuarioUuid
    }

    /**
     *  Obtiene el UUID del usuario
     * @returns UUID del usuario
     */
    getUsuarioUuid(): String {
        return this.usuarioUuid
    }

    /**
     * Asigna un nombre al usuario
     * @param usuario Nombre a asignar al usuario
     */
    setUsuario(usuario: String): void {
        this.usuario = usuario
    }

    /**
     *  Obtiene el nombre del usuario
     * @returns Nombre del usuario
     */
    getUsuario(): String {
        return this.usuario
    }

    /**
     * Asigna una contraseña al usuario
     * @param password Contraseña a asignar al usuario
     */
    setPassword(password: String): void {
        this.password = password
    }

    /**
     *  Obtiene la contraseña del usuario
     * @returns Contraseña del usuario
     */
    getPassword(): String {
        return this.password
    }

    /**
     *  Asigna un correo al usuario
     * @param correo Correo a asignar al usuario
     */
    setCorreo(correo: String): void {
        this.correo = correo
    }

    /**
     * Obtiene el correo del usuario
     * @returns Correo del usuario
     */
    getCorreo(): String {
        return this.correo
    }

    /**
     * Asigna una persona al usuario
     * @param persona Persona a asignar al usuario
     */
    setPersona(persona: Persona): void {
        this.persona = persona
    }

    /**
     *  Obtiene la persona relacionada al usuario
     * @returns Persona relacionada al usuario
     */
    getPersona(): Persona {
        return this.persona
    }
}