/**
 * Importaciones de TypeORM
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
    ManyToOne, JoinColumn
} from "typeorm"

/**
 * Importaciones de las entidades Categoria y Permiso para las relaciones
 */
import { Categoria } from "./categoria.entity"
import { Permiso } from "./permiso.entity"
/**
 * Entidad PermisoCategoria que representa la tabla intermedia entre Permiso y Categoria
 */
@Entity("permiso_categorias")
export class PermisoCategoria {

    /**
     * Identificador de la tabla PermisoCategoria
     */
    @PrimaryGeneratedColumn({
        name: "permiso_categoria_id"
    })
    private permisoCategoriaId: Number;

    /**
     * Identificador UUID de la tabla PermisoCategoria
     */
    @Column({
        name: "permiso_categoria_uuid"
    })
    @Generated("uuid")
    private permisoCategoriaUuid: String;

    /**
     * Relación muchos a uno con la entidad Categoria
     */
    @ManyToOne(() => Categoria, (Categoria) => Categoria.getPermisoCategorias)
    @JoinColumn({ name: "categoria_id", foreignKeyConstraintName: "permiso_categoria_categoria_idfk" })
    private categoria: Categoria;

    /**
     * Relación muchos a uno con la entidad Permiso
     */
    @ManyToOne(() => Permiso, (Permiso) => Permiso.getPermisoCategorias)
    @JoinColumn({ name: "permiso_id", foreignKeyConstraintName: "permiso_categoria_permiso_idfk" })
    private permiso: Permiso;

    /**
     * Metodo que asigna el ID de la tabla PermisoCategoria
     * @param permisoCategoriaId ID de la tabla PermisoCategoria
     */
    setPermisoCategoriaId(permisoCategoriaId: Number): void {
        this.permisoCategoriaId = permisoCategoriaId
    }

    /**
     * Metodo que devuelve el ID de la tabla PermisoCategoria
     * @returns ID de la tabla PermisoCategoria
     */
    getPermisoCategoriaId(): Number {
        return this.permisoCategoriaId
    }

    /**
     * Metodo que asigna el UUID de la tabla PermisoCategoria
     * @param permisoCategoriaUuid UUID de la tabla PermisoCategoria
     */
    setPermisoCategoriaUuid(permisoCategoriaUuid: String): void {
        this.permisoCategoriaUuid = permisoCategoriaUuid
    }

    /**
     * Metodo que devuelve el UUID de la tabla PermisoCategoria
     * @return UUID de la tabla PermisoCategoria
     */
    getPermisoCategoriaUuid(): String {
        return this.permisoCategoriaUuid
    }

    /**
     *  Asigna la categoria asociada al permiso
     * @param categoria Categoria asociada al permiso
     */
    setCategoria(categoria: Categoria): void {
        this.categoria = categoria
    }

    /**
     *  Devuelve la categoria asociada al permiso
     * @returns Categoria asociada al permiso
     */
    getCategoria(): Categoria {
        return this.categoria
    }

    /**
     * Asigna el Permiso asociado a la categoria
     * @param permiso El Permiso asociado a la categoria
     */
    setPermiso(permiso: Permiso): void {
        this.permiso = permiso
    }

    /**
     *  Devuelve el Permiso asociado a la categoria
     * @returns Permiso asociado a la categoria
     */
    getPermiso(): Permiso {
        return this.permiso
    }

}