/**
 * Importaciones TypeORM
 */
import {
  Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne,
  JoinColumn, OneToMany
} from "typeorm"

/**
 * Importaciones de clases requeridaas Categoria, ProductoProveedor,ProductoAlimento con respecto a las relaciones
 */
import { Categoria } from "./categoria"
import { ProductoCompania } from "./producto-compania"
import { ProductoAlimento } from "./producto-alimento";

@Entity("productos")
export class Producto {

  @PrimaryGeneratedColumn({name:"producto_id"})
  private productoId: Number

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
  private productoUuid: String

  @OneToMany(() => ProductoAlimento, (ProductoAlimento) => ProductoAlimento.getProducto)
  private productoAlimento: ProductoAlimento[];

  @OneToMany(() => ProductoCompania, (ProductoCompania) => ProductoCompania.getProducto)
  private productoCompanias: ProductoCompania[];

  setProductoCompanias(productoCompanias: ProductoCompania[]) {
    this.productoCompanias = productoCompanias;
  }

  getProductoCompanias(): ProductoCompania[] {
    return this.productoCompanias;
  }

  setProductoAlimentos(productoAlimento: ProductoAlimento[]): void {
    this.productoAlimento = productoAlimento;
  }
  getProductoAlimentos(): ProductoAlimento[] {
    return this.productoAlimento;
  }

  getProductoId(): Number {
    return this.productoId;
  }
  setProductoId(productoId: Number): void {
    this.productoId = productoId;
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
  getProductoUuid(): String {
    return this.productoUuid;
  }
  setProductoUuid(productoUuid: String): void {
    this.productoUuid = productoUuid;
  }
}