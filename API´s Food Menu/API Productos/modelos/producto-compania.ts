import { Producto } from "./producto"
import { Compania } from "./compania"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, 
    JoinColumn, ManyToOne
} from "typeorm"

@Entity("producto_proveedores")
export class ProductoCompania {

    @PrimaryGeneratedColumn({
        name:"producto_compania_id"
    })
    private productoCompaniaId: Number;

    @Column({
        name:"producto_proveedor_uuid"
    })
    @Generated("uuid")
    private productoCompaniaUuid: String;

    @ManyToOne(() => Compania, (Compania) => Compania.getProductoCompanias)
    @JoinColumn({ name: "compania_id", foreignKeyConstraintName: "producto_compania_compania_idfk" })
    private compania: Compania;

    @ManyToOne(() => Producto, (Producto) => Producto.getProductoCompanias)
    @JoinColumn({ name: "producto_id", foreignKeyConstraintName: "producto_compania_producto_idfk" })
    private producto: Producto;

    setCompania(compania: Compania): void {
        this.compania = compania;
    }
    
    getCompania(): Compania {
        return this.compania;
    }
    
    setProducto(producto: Producto): void {
        this.producto = producto;
    }
    
    getProducto(): Producto {
        return this.producto;
    }
    
    setProductoCompaniaId(productoCompaniaId: Number): void {
        this.productoCompaniaId = productoCompaniaId;
    }
    
    getProductoCompaniaId(): Number {
        return this.productoCompaniaId;
    }

    setProductoCompaniaUuid(productoCompaniaUuid: String): void {
        this.productoCompaniaUuid = productoCompaniaUuid;
    }

    getProductoCompaniaUuid(): String {
        return this.productoCompaniaUuid;
    }
}