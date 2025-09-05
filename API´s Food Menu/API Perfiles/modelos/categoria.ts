import { PermisoCategoria } from "./permisoCategoria"
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn,
    ForeignKey
} from "typeorm"

@Entity("categorias")
export class Categoria {

    @PrimaryGeneratedColumn({
        name: "categoria_id"
    })
    private categoriaID: Number;

    @Column({
        name: "categoria_uuid"
    })
    @Generated("uuid")
    private categoriaUUID: String;

    @Column({
        name: "nombre",
        length: 100
    })
    private nombre: String;

    private permisoCategorias: PermisoCategoria[];

    setCategoriaID(categoriaID: Number): void {
        this.categoriaID = categoriaID
    }

    getCategoriaID(): Number {
        return this.categoriaID
    }

    setCategoriaUUID(categoriaUUID: String): void {
        this.categoriaUUID = categoriaUUID
    }
    getCategoriaUUID(): String {
        return this.categoriaUUID
    }
    setNombre(nombre: String): void {
        this.nombre = nombre
    }
    getNombre(): String {
        return this.nombre
    }
    setPermisoCategorias(permisoCategorias: PermisoCategoria[]): void {
        this.permisoCategorias = permisoCategorias
    }
    getPermisoCategorias(): PermisoCategoria[] {
        return this.permisoCategorias
    }
}