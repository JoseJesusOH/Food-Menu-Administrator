import { Sucursal } from "../modelos/sucursal"
import { ProductoProveedor } from "../modelos/productoProveedor"

import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
    JoinColumn, OneToMany
} from "typeorm"

@Entity("proveedores")
export class Proveedor {
 
    @PrimaryGeneratedColumn({
        name:"proveedor_id"
    })
    private proveedorID: Number;

    @Column({name:"proveedor_uuid"})
    @Generated("uuid")
    private proveedorUUID: String;

    @Column({
        length: 100
        ,name:"nombre"
    })
    private nombre: String;

    @OneToMany(() => Sucursal, (Sucursal) => Sucursal.getProveedor)
    private sucursales: Sucursal[];

   @OneToMany(() => ProductoProveedor, (ProductoProveedor) => ProductoProveedor.getProveedor)
    private productoProveedores:ProductoProveedor[];
    
    setProductoProveedores(productoProveedores:ProductoProveedor[]){
        this.productoProveedores=productoProveedores;
    }

    getProductoProveedores():ProductoProveedor[]{
        return this.productoProveedores;
    }

    getProveedorID(): Number {
        return this.proveedorID;
    }
    setProveedorID(proveedorID: Number): void {
        this.proveedorID = proveedorID;
    }
    getProveedorUUID(): String {
        return this.proveedorUUID;
    }
    setProveedorUUID(proveedorUUID: String): void {
        this.proveedorUUID = proveedorUUID;
    }
    getNombre(): String {
        return this.nombre;
    }
    setNombre(nombre: String): void {
        this.nombre = nombre;
    }
    setScurusales(sucursales: Sucursal[]): void {
        this.sucursales = sucursales;
    }
    getSucursales() {
        return this.sucursales;
    }

}