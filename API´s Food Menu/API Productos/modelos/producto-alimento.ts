import { Producto } from "./producto"
import { Alimento } from "./alimento"
import { UnidadMedida } from "./unidad-medida"

import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
    JoinColumn, ManyToOne
} from "typeorm"

@Entity("producto_alimentos")
export class ProductoAlimento {

    @PrimaryGeneratedColumn({
        name: "producto_alimento_id"
    })
    private productoAlimentoId: Number;

    @Column({
        name: "producto_alimento_uuid"
    })
    @Generated("uuid")
    private productoAlimentoUuid: String;

    @Column({
        type: "double",
        name: "cantidad_minima"
    })
    private cantidadMinima: Number;

    @Column({
        type: "double",
        name: "cantidad_maxima"
    })
    private cantidadMaxima: Number;

    @ManyToOne(() => Producto, (Producto) => Producto.getProductoAlimentos)
    @JoinColumn({ name: "producto_id", foreignKeyConstraintName: "producto_alimento_producto_idfk" })
    private producto: Producto;

    @ManyToOne(() => Alimento, (Alimento) => Alimento.getProductoAlimentos)
    @JoinColumn({ name: "alimento_id", foreignKeyConstraintName: "producto_alimento_alimento_idfk" })
    private alimento: Alimento;

    @Column({
        type: "enum",
        enum: UnidadMedida,
        default: UnidadMedida.SIN,
        name: "unidad_medida"
    })
    private unidadMedida: UnidadMedida

    getUuidadMedida(): UnidadMedida {
        return this.unidadMedida;
    }
    
    setUnidadMedida(unidadMedida: UnidadMedida): void {
        this.unidadMedida = unidadMedida;
    }

    getProductoAlimentoId(): Number {
        return this.productoAlimentoId;
    }
    
    setProductoAlimentoId(productoAlimentoId: Number): void {
        this.productoAlimentoId = productoAlimentoId;
    }
    
    getProductoAlimentoUuid(): String {
        return this.productoAlimentoUuid;
    }
    
    setProductoAlimentoUuid(productoAlimentoUuid: String): void {
        this.productoAlimentoUuid = productoAlimentoUuid;
    }
    
    getCantidadMinima(): Number {
        return this.cantidadMinima;
    }
    
    setCantidadMinima(cantidadMinima: Number): void {
        this.cantidadMinima = cantidadMinima;
    }

    getCantidadMaxima(): Number {
        return this.cantidadMaxima;
    }
    
    setCantidadMaxima(cantidadMaxima: Number): void {
        this.cantidadMaxima = cantidadMaxima;
    }
    
    getProducto(): Producto {
        return this.producto;
    }
    
    setProducto(producto: Producto): void {
        this.producto = producto;
    }
    
    getAlimento(): Alimento {
        return this.alimento;
    }

    setAlimento(alimento: Alimento): void {
        this.alimento = alimento;
    }

}