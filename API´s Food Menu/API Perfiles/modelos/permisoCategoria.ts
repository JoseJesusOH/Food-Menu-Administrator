import { Categoria } from "./categoria"
import { Permiso } from "./permiso"

import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn,
    ForeignKey
} from "typeorm"

@Entity("permiso_categorias")
export class PermisoCategoria {

    @PrimaryGeneratedColumn({
        name: "permiso_categoria_id"
    })
    private permisoCategoriaID: Number;

    @Column({
        name: "permiso_categoria_uuid"
    })
    @Generated("uuid")
    private permisoCategoriaUUID: String;


    private categoria: Categoria;

    private permiso: Permiso;


    setPermisoCategoriaID(permisoCategoriaID: Number): void {
        this.permisoCategoriaID = permisoCategoriaID
    }
    getPermisoCategoriaID(): Number {
        return this.permisoCategoriaID
    }
    setPermisoCategoriaUUID(permisoCategoriaUUID: String): void {
        this.permisoCategoriaUUID = permisoCategoriaUUID
    }
    getPermisoCategoriaUUID(): String {
        return this.permisoCategoriaUUID
    }
    setCategoria(categoria: Categoria): void {
        this.categoria = categoria
    }
    getCategoria(): Categoria {
        return this.categoria
    }
    setPermiso(permiso: Permiso): void {
        this.permiso = permiso
    }
    getPermiso(): Permiso {
        return this.permiso
    }

}