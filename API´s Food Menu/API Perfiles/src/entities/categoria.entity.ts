/**
 * Importaciones de TypeORM requeridas para la entidad
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany
} from "typeorm"

/**
 * Importaciones de entidades relacionadas PermisoCategoria
 */
import { PermisoCategoria } from "./permiso-categoria.entity"

/**
 * Modelo de la entidad Categoria con sus respectivos campos y relaciones 
 * a la tabla categorias en la base de datos
 */
@Entity("categorias")
export class Categoria {

    /**
     * ID autoincremental de la categoria
     */
    @PrimaryGeneratedColumn({
        name: "categoria_id"
    })
    private categoriaId: Number;

    /**
     * UUID de la categoria
     */
    @Column({
        name: "categoria_uuid"
    })
    @Generated("uuid")
    private categoriaUuid: String;

    /**
     * Nombre de la categoria
     */
    @Column({
        name: "nombre",
        length: 100
    })
    private nombre: String;

    /**
     * Relación uno a muchos con la entidad PermisoCategoria
     */
    @OneToMany(() => PermisoCategoria, (PermisoCategoria) => PermisoCategoria.getCategoria)
    private permisoCategorias: PermisoCategoria[];

    /**
     * Metodo que asigna el ID de la categoria
     * @param categoriaId ID de la categoria
     */
    setCategoriaId(categoriaId: Number): void {
        this.categoriaId = categoriaId
    }

    /**
     * Metodo que retorna el ID de la categoria
     * @returns ID de la categoria
     */
    getCategoriaId(): Number {
        return this.categoriaId
    }

    /**
     * Metodo que asigna el UUID de la categoria
     * @param categoriaUuid UUID de la categoria
     * 
     */
    setCategoriaUuid(categoriaUuid: String): void {
        this.categoriaUuid = categoriaUuid
    }

    /**
     * Metodo que retorna el UUID de la categoria
     * @returns UUID de la categoria
     */
    getCategoriaUuid(): String {
        return this.categoriaUuid
    }


    /**
     *  Metodo que asigna el nombre de la categoria
     * @param nombre Nombre de la categoria
     */
    setNombre(nombre: String): void {
        this.nombre = nombre
    }
    /**
     * Metodo que retorna el nombre de la categoria
     * @returns Nombre de la categoria
     */
    getNombre(): String {
        return this.nombre
    }

    /**
     * Metodo que asigna los permisos de la categoria
     * @param permisoCategorias Permisos de la categoria
     */
    setPermisoCategorias(permisoCategorias: PermisoCategoria[]): void {
        this.permisoCategorias = permisoCategorias
    }

    /**
     * Metodo que retorna los permisos de la categoria
     * @returns Permisos de la categoria
     */
    getPermisoCategorias(): PermisoCategoria[] {
        return this.permisoCategorias
    } 

}