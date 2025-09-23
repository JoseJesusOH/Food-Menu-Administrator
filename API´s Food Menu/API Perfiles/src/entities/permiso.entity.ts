
/**
 * Importaciones TypeORM
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany,
} from "typeorm"

/**
 * Importacione de Entidad PermisoCategoria
 */
import { PermisoCategoria } from "./permiso-categoria.entity"

/**
 * Entidad Permiso que representa la tabla permisos en la base de datos
 */
@Entity("permisos")
export class Permiso {

    /**
     * Identificador único del permiso
     */
    @PrimaryGeneratedColumn({
        name: "permiso_id"
    })
     permisoId: Number;


    /**
     * UUID del permiso
     */
    @Column({
        name: "permiso_uuid"
    })
    @Generated("uuid")
     permisoUuid: String;

    /**
     * Nombre del permiso
     */
    @Column({
        name: "nombre",
        length: 100
    })
     nombre: String;

    /**
     * Relación uno a muchos con la entidad PermisoCategoria
     */
    @OneToMany(() => PermisoCategoria, (PermisoCategoria) => PermisoCategoria.getPermiso)
     permisoCategorias: PermisoCategoria[];

    /**
     * Asigna el id del permiso
     * @param permisoID Identificador único del permiso
     */
    setPermisoId(permisoId: Number): void {
        this.permisoId = permisoId
    }

    /**
     * Obtiene el id del permiso
     * @returns El id del permiso
     */
    getPermisoId(): Number {
        return this.permisoId
    }

    /** 
     * Asigna el UUID del permiso
     * @param permisoUuid UUID del permiso
     */
    setPermisoUuid(permisoUuid: String): void {
        this.permisoUuid = permisoUuid
    }

    /**
     * Devuelve el UUID del permiso
     * @returns El UUID del permiso
     */
    getPermisoUuid(): String {
        return this.permisoUuid
    }
 
    /**
     *  Asigna el nombre del permiso
     * @param nombre Nombre del permiso
     */
    setNombre(nombre: String): void {
        this.nombre = nombre
    }
    /**
     * Devuelve el nombre del permiso
     * @returns El nombre del permiso
     */
    getNombre(): String {
        return this.nombre
    }

    /**
     * Asigna las categorías de permiso asociadas al permiso
     * @param permisoCategorias Categorías de permiso asociadas al permiso
     */
    setPermisoCategorias(permisoCategorias: PermisoCategoria[]): void {
        this.permisoCategorias = permisoCategorias
    }
    /**
     * Devuelve las categorías de permiso asociadas al permiso
     * @returns Las categorías de permiso asociadas al permiso
     */
    getPermisoCategorias(): PermisoCategoria[] {
        return this.permisoCategorias
    }
}