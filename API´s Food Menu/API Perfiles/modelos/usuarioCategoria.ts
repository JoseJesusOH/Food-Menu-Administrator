import { Categoria } from "./categoria"
import { Usuario } from "./usuario"
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn,
    ForeignKey
} from "typeorm"

@Entity("usuario_categorias")
export class UsuarioCategoria {

    @PrimaryGeneratedColumn({
        name: "usuario_categoria_id"
    })
    private usuarioCategoriaID: Number;

    @Column({
        name: "usuario_categoria_uuid"
    })
    @Generated("uuid")
    private usuarioCategoriaUUID: String;


    private usuario: Usuario;
    private categoria: Categoria;
    setUsuarioCategoriaID(usuarioCategoriaID: Number): void {
        this.usuarioCategoriaID = usuarioCategoriaID
    }
    getUsuarioCategoriaID(): Number {
        return this.usuarioCategoriaID
    }
    setUsuarioCategoriaUUID(usuarioCategoriaUUID: String): void {
        this.usuarioCategoriaUUID = usuarioCategoriaUUID
    }
    getUsuarioCategoriaUUID(): String {
        return this.usuarioCategoriaUUID
    }
    setUsuario(usuario: Usuario): void {
        this.usuario = usuario
    }
    getUsuario(): Usuario {
        return this.usuario
    }
    setCategoria(categoria: Categoria): void {
        this.categoria = categoria
    }
    getCategoria(): Categoria {
        return this.categoria
    }
}