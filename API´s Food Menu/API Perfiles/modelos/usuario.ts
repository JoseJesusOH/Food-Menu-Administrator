import { Persona } from "./persona"

import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn,
    ForeignKey
} from "typeorm"

@Entity("usuarios")
export class Usuario {

    @PrimaryGeneratedColumn({
        name: "usuario_id"
    })
    private usuarioID: Number;

    @Column({
        name: "usuario_uuid"
    })
    @Generated("uuid")
    private usuarioUUID: String;

    @Column({
        name: "usuario",
        length: 100
    })
    private usuario: String;

    @Column({
        name: "password",
        length: 100
    })
    private password: String;

    @Column({
        name: "correo",
        length: 100
    })
    private correo: String;

    private persona: Persona;

    setUsuarioID(usuarioID: Number): void {
        this.usuarioID = usuarioID
    }
    getUsuarioID(): Number {
        return this.usuarioID
    }
    setUsuarioUUID(usuarioUUID: String): void {
        this.usuarioUUID = usuarioUUID
    }
    getUsuarioUUID(): String {
        return this.usuarioUUID
    }
    setUsuario(usuario: String): void {
        this.usuario = usuario
    }
    getUsuario(): String {
        return this.usuario
    }
    setPassword(password: String): void {
        this.password = password
    }
    getPassword(): String {
        return this.password
    }
    setCorreo(correo: String): void {
        this.correo = correo
    }
    getCorreo(): String {
        return this.correo
    }
    setPersona(persona: Persona): void {
        this.persona = persona
    }
    getPersona(): Persona {
        return this.persona
    }
}