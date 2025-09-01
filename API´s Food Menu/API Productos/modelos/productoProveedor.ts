import { Producto } from "./producto"
import { Proveedor } from "./proveedor"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
    JoinColumn, ManyToOne
} from "typeorm"

@Entity("producto_proveedores")
export class ProductoProveedor {

    @PrimaryGeneratedColumn()
    private productoProveedorID: Number;

    @Column()
    @Generated("uuid")
    private productoProveedorUUID: String;

    @ManyToOne(() => Proveedor, (Proveedor) => Proveedor.getProductoProveedores)
    private proveedor: Proveedor;

    @ManyToOne(() => Producto, (Producto) => Producto.getProductoProveedores)
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