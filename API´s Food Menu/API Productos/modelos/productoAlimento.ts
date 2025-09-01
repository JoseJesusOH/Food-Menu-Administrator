import { Producto } from "../modelos/producto"
import { Alimento } from "../modelos/alimento"
import { UnidadMedida } from "../modelos/unidadMedida"
import { Categoria } from "./categoria"
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
    JoinColumn,ManyToOne
} from "typeorm"

@Entity("producto_alimentos")
export class ProductoAlimento {
    @PrimaryGeneratedColumn()
    private productoAlimentoID: Number;
    @Column()
    @Generated("uuid")
    private productoAlimentoUUID: String;

    @Column({
        type: "double"
    })
    private cantidadMinima: Number;

    @Column({
        type: "double"
    })
    private cantidadMaxima: Number;

      @ManyToOne(() => Producto, (Producto) => Producto.getProductoAlimentos)
    private producto: Producto;

      @ManyToOne(() => Alimento, (Alimento) => Alimento.getProductoAlimentos)
    private alimento: Alimento;

    @Column({
        type: "enum",
        enum: UnidadMedida,
        default: UnidadMedida.SIN,
    })
    private unidadMedida: UnidadMedida

    getUuidadMedida(): UnidadMedida {
        return this.unidadMedida;
    }
    setUnidadMedida(unidadMedida: UnidadMedida): void {
        this.unidadMedida = unidadMedida;
    }

    getProductoAlimentoID(): Number {
        return this.productoAlimentoID;
    }
    setProductoAlimentoID(productoAlimentoID: Number): void {
        this.productoAlimentoID = productoAlimentoID;
    }
    getProductoAlimentoUUID(): String {
        return this.productoAlimentoUUID;
    }
    setProductoAlimentoUUID(productoAlimentoUUID: String): void {
        this.productoAlimentoUUID = productoAlimentoUUID;
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