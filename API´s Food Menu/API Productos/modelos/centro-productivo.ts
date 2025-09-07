import { Compania } from "./compania"
import {
  Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
  JoinColumn, ManyToOne, OneToMany
} from "typeorm"

@Entity("sucursales")
export class CentroProductivo {

  @PrimaryGeneratedColumn({
    name:"centro_productivo_id"
  })
  private centroProductivoId: Number;

  @Column({
    name:"centro_productivo_uuid"
  })
  @Generated("uuid")
  private centroProductivoUuid: String;

  @Column({
    length: 100
    ,name:"nombre"
  })
  private nombre: String

  @Column({
    length: 100,
    name:"direccion"
  })
  private direccion: String

  @Column({
    length: 100,
    name:"telefono"
  })
  private telefono: String

  @ManyToOne(() => Compania, (Compania) => Compania.getCentroProductivos)
  @JoinColumn({name:"compania_id" ,foreignKeyConstraintName:"centro_productivo_compania_idfk"})
  private compania: Compania;
  
  setProveedor(compania: Compania): void {
    this.compania = compania;
  }

  getProveedor(): Compania {
    return this.compania;
  }
  
  getCentroProductivoId(): Number {
    return this.centroProductivoId;
  }
  
  getCentroProductivoUuid(): String {
    return this.centroProductivoUuid;
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
  
  setCentroProductivoId(centroProductivoId: Number): void {
    this.centroProductivoId = centroProductivoId;
  }
  
  setCentroProductivoUuid(centroProductivoUuid: String): void {
    this.centroProductivoUuid = centroProductivoUuid;
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