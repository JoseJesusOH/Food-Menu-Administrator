/**
 * Importaciones TypeORM 
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn
} from "typeorm"

/**
 * Importaciones de clases requeridas Categoria, ProductoAlimento con respecto a las relaciones.
 */
import { Categoria } from "@entity/categoria.entity"
import { ProductoAlimento } from "@entity/producto-alimento.entity"


/**
 * Entidad que representa un alimento en la base de datos.
 * 
 * @example
 * const alimento = new Alimento();
 * alimento.setNombre("Manzana");
 * alimento.setCategoria(categoria);
 */
@Entity("alimentos")
export class Alimento {

    /** Identificador autoincremental del alimento en la base de datos */
    @PrimaryGeneratedColumn({ name: "alimento_id" })
    alimentoId: number;

    /** Nombre del alimento */
    @Column({ name: "nombre" })
    nombre: string;

    /** Relación uno a uno con la categoría */
    @OneToOne(() => Categoria)
    @JoinColumn({ name: "categoria_id", foreignKeyConstraintName: "categoria_alimento_IDFK" })
    categoria: Categoria;

    /** Identificador único UUID del alimento */
    @Column({ name: "alimento_uuid" })
    @Generated("uuid")
    alimentoUuid: string;

    /** Lista de relaciones con productos asociados al alimento */
    @OneToMany(() => ProductoAlimento, (ProductoAlimento) => ProductoAlimento.getAlimento)
    productoAlimento: ProductoAlimento[];

    constructor(alimentoId?: number) {
        if (alimentoId !== undefined) {
            this.alimentoId = alimentoId;
        }
    }
    /**
     * Asigna los productos asociados al alimento.
     * @param productoAlimento Lista de productos asociados
     */
    setProductoAlimentos(productoAlimento: ProductoAlimento[]): void {
        this.productoAlimento = productoAlimento;
    }

    /**
     * Devuelve los productos asociados al alimento.
     * @returns Lista de productos relacionados
     */
    getProductoAlimentos(): ProductoAlimento[] {
        return this.productoAlimento;
    }

    /**
     * Devuelve el identificador interno del alimento.
     * @returns ID del alimento
     */
    getAlimentoId(): number {
        return this.alimentoId;
    }

    /**
     * Asigna el identificador interno del alimento.
     * @param alimentoId ID del alimento
     */
    setAlimentoId(alimentoId: number): void {
        this.alimentoId = alimentoId;
    }

    /**
     * Devuelve el nombre del alimento.
     * @returns Nombre del alimento
     */
    getNombre(): string {
        return this.nombre;
    }

    /**
     * Asigna el nombre del alimento.
     * @param nombre Nombre del alimento
     */
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    /**
     * Devuelve la categoría asociada al alimento.
     * @returns Categoría relacionada
     */
    getCategoria(): Categoria {
        return this.categoria;
    }

    /**
     * Asigna la categoría del alimento.
     * @param categoria Categoría relacionada
     */
    setCategoria(categoria: Categoria): void {
        this.categoria = categoria;
    }

    /**
     * Devuelve el UUID del alimento.
     * @returns UUID del alimento
     */
    getAlimentoUuid(): string {
        return this.alimentoUuid;
    }

    /**
     * Asigna el UUID del alimento.
     * @param alimentoUuid UUID del alimento
     */
    setAlimentoUuid(alimentoUuid: string): void {
        this.alimentoUuid = alimentoUuid;
    }
}
