import { Proveedor } from "../modelos/proveedor"
import {
  Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
  JoinColumn, ManyToOne, OneToMany
} from "typeorm"

@Entity("sucursales")
export class Sucursal {

  @PrimaryGeneratedColumn()
  private sucursalID: Number;

  @Column()
  @Generated("uuid")
  private sucursalUUID: String;

  @Column({
    length: 100
  })
  private nombre: String

  @Column({
    length: 100
  })
  private direccion: String

  @Column({
    length: 100
  })
  private telefono: String

  @ManyToOne(() => Proveedor, (Proveedor) => Proveedor.getSucursales)
  private proveedor: Proveedor;

  setProveedor(proveedor: Proveedor): void {
    this.proveedor = proveedor;
  }

  getProveedor(): Proveedor {
    return this.proveedor;
  }
  getSucursalID(): Number {
    return this.sucursalID;
  }
  getSucursalUUID(): String {
    return this.sucursalUUID;
  }
  getNombre(): String {
    return this.nombre;
  }
  getDireccion(): String {
    return this.direccion;
  }
  getTelefono(): String {
    return this.telefono;
  }
  setSucursalID(sucursalID: Number): void {
    this.sucursalID = sucursalID;
  }
  setSucursalUUID(sucursalUUID: String): void {
    this.sucursalUUID = sucursalUUID;
  }
  setNombre(nombre: String): void {
    this.nombre = nombre;
  }
  setDireccion(direccion: String): void {
    this.direccion = direccion;
  }
  setTelefono(telefono: String): void {
    this.telefono = telefono;
  }
}