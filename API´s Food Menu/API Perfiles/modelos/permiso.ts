import { PermisoCategoria } from "./permisoCategoria"
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn,
    ForeignKey
} from "typeorm"

@Entity("permisos")
export class Permiso {

    @PrimaryGeneratedColumn({
        name: "permiso_id"
    })
    private permisoID: Number;


    @Column({
        name: "permiso_uuid"
    })
    @Generated("uuid")
    private permisoUUID: String;

    @Column({
        name: "nombre",
        length: 100
    })
    private nombre: String;

    @OneToMany(() => PermisoCategoria, (PermisoCategoria) => PermisoCategoria.getPermiso)
    private permisoCategorias: PermisoCategoria[];

    setPermisoID(permisoID: Number): void {
        this.permisoID = permisoID
    }
    getPermisoID(): Number {
        return this.permisoID
    }
    setPermisoUUID(permisoUUID: String): void {
        this.permisoUUID = permisoUUID
    }
    getPermisoUUID(): String {
        return this.permisoUUID
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