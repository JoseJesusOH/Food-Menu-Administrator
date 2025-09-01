import { Producto } from "./producto"
import { Proveedor } from "./proveedor"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
    JoinColumn, ManyToOne
} from "typeorm"

@Entity("producto_proveedores")
export class ProductoProveedor {

    @PrimaryGeneratedColumn({
        name:"producto_proveedor_id"
    })
    private productoProveedorID: Number;

    @Column({
        name:"producto_proveedor_uuid"
    })
    @Generated("uuid")
    private productoProveedorUUID: String;

    @ManyToOne(() => Proveedor, (Proveedor) => Proveedor.getProductoProveedores)
    @JoinColumn({ name: "proveedor_id", foreignKeyConstraintName: "producto_proveedor_proveedor_idfk" })
    private proveedor: Proveedor;

    @ManyToOne(() => Producto, (Producto) => Producto.getProductoProveedores)
    @JoinColumn({ name: "producto_id", foreignKeyConstraintName: "producto_proveedor_producto_idfk" })
    private producto: Producto;

    setProveedor(proveedor: Proveedor): void {
        this.proveedor = proveedor;
    }
    getProveedor(): Proveedor {
        return this.proveedor;
    }
    setProducto(producto: Producto): void {
        this.producto = producto;
    }
    getProducto(): Producto {
        return this.producto;
    }
    setProductoProveedorID(productoProveedorID: Number): void {
        this.productoProveedorID = productoProveedorID;
    }
    getProductoProveedorID(): Number {
        return this.productoProveedorID;
    }

    setProductoProveedorUUID(productoProveedorUUID: String): void {
        this.productoProveedorUUID = productoProveedorUUID;
    }
    getProductoProveedorUUID(): String {
        return this.productoProveedorUUID;
    }
}