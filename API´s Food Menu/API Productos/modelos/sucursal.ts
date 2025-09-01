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

}