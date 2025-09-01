import { Categoria } from "./categoria"
import { ProductoProveedor } from "../modelos/productoProveedor"

import {
  Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
  JoinColumn, ManyToOne, OneToMany
} from "typeorm"
import { ProductoAlimento } from "./productoAlimento";

@Entity("productos")
export class Producto {

  @PrimaryGeneratedColumn({name:"producto_id"})
  private productoID: Number

  @Column({
    name:"nombre",
    length: 100
  })
  private nombre: String;

  @OneToOne(() => Categoria)
  @JoinColumn({name:"categoria_id"})
  private categoria: Categoria;

  @Column({name:"producto_uuid"})
  @Generated("uuid")
  private productoUUID: String

  @OneToMany(() => ProductoAlimento, (ProductoAlimento) => ProductoAlimento.getProducto)
  private productoAlimento: ProductoAlimento[];

  @OneToMany(() => ProductoProveedor, (ProductoProveedor) => ProductoProveedor.getProducto)
  private productoProveedores: ProductoProveedor[];

  setProductoProveedores(productoProveedores: ProductoProveedor[]) {
    this.productoProveedores = productoProveedores;
  }

  getProductoProveedores(): ProductoProveedor[] {
    return this.productoProveedores;
  }

  setProductoAlimentos(productoAlimento: ProductoAlimento[]): void {
    this.productoAlimento = productoAlimento;
  }
  getProductoAlimentos(): ProductoAlimento[] {
    return this.productoAlimento;
  }

  getProductoID(): Number {
    return this.productoID;
  }
  setProductoID(productoID: Number): void {
    this.productoID = productoID;
  }
  getNombre(): String {
    return this.nombre;
  }
  setNombre(nombre: String): void {
    this.nombre = nombre;
  }
  getCategoria(): Categoria {
    return this.categoria;
  }
  setCategoria(categoria: Categoria): void {
    this.categoria = categoria;
  }
  getProductoUUID(): String {
    return this.productoUUID;
  }
  setProductoUUID(productoUUID: String): void {
    this.productoUUID = productoUUID;
  }
}