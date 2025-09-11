/**
 * Importaciones TypeORM del producto
 */
import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
    JoinColumn, ManyToOne
} from "typeorm"

/**
 * Importaciones requeridas respectivas Producto, Compania
 */
import { Producto } from "@entity/producto.entity"
import { Compania } from "@entity/compania.entity"

@Entity("productos_proveedores")
export class ProductoCompania {

    /**
     * Identificador ID autoincremental de relación ProductoCompania
     */
    @PrimaryGeneratedColumn({
        name: "producto_compania_id"
    })
    private productoCompaniaId: Number;

    /**
     * Identificador UUID de relación ProductoCompania
     */
    @Column({
        name: "producto_compania_uuid"
    })
    @Generated("uuid")
    private productoCompaniaUuid: String;

    /**
     * Compania relacionada con respecto a la relación muchos a muchos de CompaniaProducto
     */
    @ManyToOne(() => Compania, (Compania) => Compania.getProductoCompanias)
    @JoinColumn({ name: "compania_id", foreignKeyConstraintName: "producto_compania_compania_idfk" })
    private compania: Compania;

    /**
     * Producto relacion con respecto a la relación muchos a muchos
     */
    @ManyToOne(() => Producto, (Producto) => Producto.getProductoCompanias)
    @JoinColumn({ name: "producto_id", foreignKeyConstraintName: "producto_compania_producto_idfk" })
    private producto: Producto;

    /**
     * Asigna la compania establecidad a la relación
     * @param compania Compania asignada 
     */
    setCompania(compania: Compania): void {
        this.compania = compania;
    }

    /**
     * Devuelve la compania relacionada
     * @returns Compania relacionada
     */
    getCompania(): Compania {
        return this.compania;
    }

    /**
     * Asigna el producto relacionado
     * @param producto Producto relacionado
     */
    setProducto(producto: Producto): void {
        this.producto = producto;
    }

    /**
     * Devuelve el producto relacionado
     * @returns Producto relacionado
     */
    getProducto(): Producto {
        return this.producto;
    }

    /**
     * Asigna el identicador ID de la relación
     * @param productoCompaniaId 
     */
    setProductoCompaniaId(productoCompaniaId: Number): void {
        this.productoCompaniaId = productoCompaniaId;
    }

    /**
     * Devuelve el ID de la relación
     * @returns ID relacion ProductoCompania
     */
    getProductoCompaniaId(): Number {
        return this.productoCompaniaId;
    }

    /**
     * Asigna el UUID de la relacion
     * @param productoCompaniaUuid UUID de la relación
     */
    setProductoCompaniaUuid(productoCompaniaUuid: String): void {
        this.productoCompaniaUuid = productoCompaniaUuid;
    }

    /**
     * Devuelve el UUID de la compania
     * @returns UUID de la compania
     */
    getProductoCompaniaUuid(): String {
        return this.productoCompaniaUuid;
    }
}