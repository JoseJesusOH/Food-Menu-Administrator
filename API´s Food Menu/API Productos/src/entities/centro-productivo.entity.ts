/**
 * Importaciones TypeORM
 */
import {
  Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
  JoinColumn, ManyToOne, OneToMany
} from "typeorm"

/**
 * Importaciones de relacion requeridad con modelo Compania
 */
import { Compania } from "@entity/compania.entity"
import { Exclude } from "class-transformer";

/**
 * Entidad que representa un CentroProductivo en la base de datos.
 */
@Entity("centros_productivos")
export class CentroProductivo {

  /**
   * Identidicador ID autoincremental del centro productivo
   */
  @PrimaryGeneratedColumn({
    name:"centro_productivo_id"
  })
  @Exclude()
   centroProductivoId: Number;

  /**
   * Identificador UUID del centro productivo
   */
  @Column({
    name:"centro_productivo_uuid"
  })
  @Generated("uuid")
   centroProductivoUuid: String;

  /**
   * Nombre del centro productivo
   */
  @Column({
    length: 100
    ,name:"nombre"
  })
   nombre: String

  /**
   * Direccion del centro productivo
   */
  @Column({
    length: 250,
    name:"direccion"
  })
   direccion: String

  /**
   * Telefono del centro productivo
   */
  @Column({
    length: 20,
    name:"telefono"
  })
   telefono: String

  /**
   * Relacion a compania con respecto al centro productivo
   */
  @ManyToOne(() => Compania, (Compania) => Compania.getCentroProductivos)
  @JoinColumn({name:"compania_id" ,foreignKeyConstraintName:"centro_productivo_compania_idfk"})
   compania: Compania;
  
  /**
   * Asigna la compania a la que perte
   * @param compania Compania asignada
   */
  setCompania(compania: Compania): void {
    this.compania = compania;
  }

  /**
   * Devuelve la compania a la cual pertenece el centro productivo.
   * @returns Compania del centro productivo
   */
  getCompania(): Compania {
    return this.compania;
  }
  
  /**
   * Devuelve el identificador ID del centro productivo
   * @returns ID del centro productivo
   */
  getCentroProductivoId(): Number {
    return this.centroProductivoId;
  }
  
  /**
   * Devuelve el Uuid del centro productivo
   * @returns Uuid del centro productivo
   */
  getCentroProductivoUuid(): String {
    return this.centroProductivoUuid;
  }
  
  /**
   * Devuelve el nombre del centro productivo establecido
   * @returns Nombre del centro productivo
   */
  getNombre(): String {
    return this.nombre;
  }
  
  /**
   * Devuelve la direccion del centro establecido
   * @returns Dirección del centro establecido
   */
  getDireccion(): String {
    return this.direccion;
  }

  /**
   * Devuelve el telefono del centro productivo
   * @returns Telefono del centro productivo
   */
  getTelefono(): String {
    return this.telefono;
  }
  
  /**
   * Asigna el identificado ID del centro productivo
   * @param centroProductivoId Centro Productivo ID
   */
  setCentroProductivoId(centroProductivoId: Number): void {
    this.centroProductivoId = centroProductivoId;
  }
  
  /**
   * Asigna el identificador UUID del centro productivo
   * @param centroProductivoUuid UUID del centro productivo
   */
  setCentroProductivoUuid(centroProductivoUuid: String): void {
    this.centroProductivoUuid = centroProductivoUuid;
  }
  
  /**
   * Asigna el nombre al centro productivo
   * @param nombre Nombre del centro productivo
   */
  setNombre(nombre: String): void {
    this.nombre = nombre;
  }
  
  /**
   * Asigna la direccion al centro productivo
   * @param direccion Direccion del centro productivo
   */
  setDireccion(direccion: String): void {
    this.direccion = direccion;
  }
 
  /**
   * Asigna el telefono del centro productivo.
   * @param telefono Telefono del centro productivo
   */
  setTelefono(telefono: String): void {
    this.telefono = telefono;
  }
}