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

}