/**
 * Importaciones TypeORM
 */
import "reflect-metadata"
import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm"

/**
 * Entidad que representa una categoria en la base de datos.
 */
@Entity("categorias")
export class Categoria {

    /** Identificador autoincremental de la categoria en la base de datos */
    @PrimaryGeneratedColumn({
        name: "categoria_id"
    })
    private categoriaId: Number;

    /** Nombre de la categoria */
    @Column({
        length: 100,
        name: "nombre"
    })
    private nombre: String;

    /** Identificador único UUID de la categoria */
    @Column({
        name: "categoria_uuid"
    })
    @Generated("uuid")
    private categoriaUuid: String;

    /**
     * Devuelve el identificador interno de la categoria.
     * @returns ID de la categoria
     */
    getCategoriaId(): Number {
        return this.categoriaId;
    }

    /**
     * Asigna el identificador interno de la categoria.
     * @param alimentoId ID de la categoria
     */
    setCategoriaId(categoriaId: Number): void {
        this.categoriaId = categoriaId;
    }

    /**
     * Devuelve el nombre de la categoria.
     * @returns nombre Nombre de la categoria
     */
    getNombre(): String {
        return this.nombre;
    }

    /**
     * Asigna el nombre a la categoria.
     * @param nombre Nombre de la categoria
     */
    setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    /**
     * Devuelve el UUID de la categoria.
     * @returns categoriaUuid UUID de la categoria
     */
    getCategoriaUuid(): String {
        return this.categoriaUuid;
    }

    /**
     * Asigna el UUID a la categoria.
     * @param alimentoUuid UUID de la categoria
     */
    setCategoriaUuid(categoriaUuid: String): void {
        this.categoriaUuid = categoriaUuid;
    }
}