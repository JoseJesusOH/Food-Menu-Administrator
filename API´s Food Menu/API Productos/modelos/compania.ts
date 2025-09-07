import { CentroProductivo } from "../modelos/centro-productivo"
import { ProductoCompania } from "./producto-proveedor"

import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
    OneToMany
} from "typeorm"

@Entity("proveedores")
export class Compania {

    @PrimaryGeneratedColumn({
        name: "compania_id"
    })
    private companiaId: Number;

    @Column({ name: "compania_uuid" })
    @Generated("uuid")
    private companiaUuid: String;

    @Column({
        length: 100
        , name: "nombre"
    })
    private nombre: String;

    @OneToMany(() => CentroProductivo, (CentroProductivo) => CentroProductivo.getProveedor)
    private centroProductivos: CentroProductivo[];

    @OneToMany(() => ProductoCompania, (ProductoCompania) => ProductoCompania.getProveedor)
    private productoCompanias: ProductoCompania[];

    setProductoCompanias(productoCompanias: ProductoCompania[]) {
        this.productoCompanias = productoCompanias;
    }

    getProductoCompanias(): ProductoCompania[] {
        return this.productoCompanias;
    }

    getCompaniaId(): Number {
        return this.companiaId;
    }

    setCompaniaId(companiaId: Number): void {
        this.companiaId = companiaId;
    }

    getCompaniaUuid(): String {
        return this.companiaUuid;
    }

    setCompaniaUuid(companiaUuid: String): void {
        this.companiaUuid = companiaUuid;
    }

    getNombre(): String {
        return this.nombre;
    }

    setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    setCentroProductivos(centroProductivos: CentroProductivo[]): void {
        this.centroProductivos = centroProductivos;
    }
    getCentroProductivos() {
        return this.centroProductivos;
    }

}