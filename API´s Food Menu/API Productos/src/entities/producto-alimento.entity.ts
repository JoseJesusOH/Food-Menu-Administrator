/**
 * Importaciones TypeORM
 */
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
    JoinColumn, ManyToOne
} from "typeorm"

/**
 * Importaciones requeridas con respespecto a las relaciones
 */
import { Producto } from "@entity/producto.entity"
import { Alimento } from "@entity/alimento.entity"
import { UnidadMedida } from "@entity/unidad-medida.enum"
/**
 * Expose expe las propiedades para la transformacion en classs transformer mientras
 * Exclude excluye esos parametros.
 */
import { Exclude, Expose, ClassTransformOptions } from "class-transformer";
/**
 * Entidas que representa la relación de muchos a muchos de ProductoAlimentos
 */
@Entity("productos_alimentos")
export class ProductoAlimento {
    /**
     * Identificador ID autoincremental de la relacion ProductoAlimento
     */
    @PrimaryGeneratedColumn({
        name: "producto_alimento_id"
    })
    @Exclude()
     productoAlimentoId: Number;

    /**
     * Identificador UUID de la relación entre ProductoAlimento
     */
    @Column({
        name: "producto_alimento_uuid"
    })
    @Generated("uuid")
     productoAlimentoUuid: String;

    /**
     * Cantidad minima de ingrediente que contiene un alimento sobre un producto
     */
    @Column({
        type: "double",
        name: "cantidad_minima"
    })
     cantidadMinima: Number;

    /**
     * Cantidad maxima de ingredientes que contiene un alimento sobre un producto
     */
    @Column({
        type: "double",
        name: "cantidad_maxima"
    })
     cantidadMaxima: Number;

    /**
     * Producto relacionado con alimento en la relación muchos a muchos
     */
    @ManyToOne(() => Producto, (Producto) => Producto.getProductoAlimentos)
    @JoinColumn({ name: "producto_id", foreignKeyConstraintName: "producto_alimento_producto_idfk" })
     producto: Producto;

    /**
     * Alimento relacionado con producto en la relación muchos a muchos
     */
    @ManyToOne(() => Alimento, (Alimento) => Alimento.getProductoAlimentos)
    @JoinColumn({ name: "alimento_id", foreignKeyConstraintName: "producto_alimento_alimento_idfk" })
     alimento: Alimento;

    /**
     * Enum representativo para la forma de medida del alimento y relación
     */
    @Column({
        type: "enum",
        enum: UnidadMedida,
        default: UnidadMedida.OT,
        name: "unidad_medida"
    })
     unidadMedida: UnidadMedida

    /**
     * Devuelve el enum correspondiente a la unidad de medida
     * @returns ENUM Unidad de Medida
     */
    getUuidadMedida(): UnidadMedida {
        return this.unidadMedida;
    }

    /**
     * Asigna la unidad correspondiente a la relación
     * @param unidadMedida Unidad de Medida
     */
    setUnidadMedida(unidadMedida: UnidadMedida): void {
        this.unidadMedida = unidadMedida;
    }

    /**
     * Devuelve el ID del alimento
     * @returns ID del alimento
     */
    getProductoAlimentoId(): Number {
        return this.productoAlimentoId;
    }

    /**
     * Asigna el ID autoincremental del alimento
     * @param productoAlimentoId ID del alimento
     */
    setProductoAlimentoId(productoAlimentoId: Number): void {
        this.productoAlimentoId = productoAlimentoId;
    }

    /**
     * Devuelve el UUID del alimento
     * @returns UUID del Alimento
     */
    getProductoAlimentoUuid(): String {
        return this.productoAlimentoUuid;
    }

    /**
     * Asigna el UUID del alimento
     * @param productoAlimentoUuid UUID del alimento
     */
    setProductoAlimentoUuid(productoAlimentoUuid: String): void {
        this.productoAlimentoUuid = productoAlimentoUuid;
    }

    /**
     * Devuelve la cantidad minima del producto que se ocupa para un alimento
     * @returns CantidadMinima del alimento
     */
    getCantidadMinima(): Number {
        return this.cantidadMinima;
    }

    /**
     * Asigna la cantidad minima del producto requerido para un alimento
     * @param cantidadMinima CantidadMinima del alimento
     */
    setCantidadMinima(cantidadMinima: Number): void {
        this.cantidadMinima = cantidadMinima;
    }

    /**
     * Devuelve la cantidad maxima de un producto que se requiere en un alimento
     * @returns CantidadMaxima de un producto
     */
    getCantidadMaxima(): Number {
        return this.cantidadMaxima;
    }

    /**
     * Asigna la cantidad maxima de un producto que se requiere en un alimento
     * @param cantidadMaxima CantidadMaxima de un alimento
     */
    setCantidadMaxima(cantidadMaxima: Number): void {
        this.cantidadMaxima = cantidadMaxima;
    }

    /**
     * Devuelve el producto relacionado con respecto a ProductoAlimento
     * @returns Producto relacionado
     */
    getProducto(): Producto {
        return this.producto;
    }

    /**
     * Asigna a la relación un producto
     * @param producto Producto relacionado
     */
    setProducto(producto: Producto): void {
        this.producto = producto;
    }

    /**
     * Devuelve el alimento relacionado con respecto a la relación ProductoAlimento
     * @returns Alimento relacionado
     */
    getAlimento(): Alimento {
        return this.alimento;
    }

    /**
     * Asigna el alimento relacionado con respecto a ProductoAlimento
     * @param alimento Alimento relacionado
     */
    setAlimento(alimento: Alimento): void {
        this.alimento = alimento;
    }

}