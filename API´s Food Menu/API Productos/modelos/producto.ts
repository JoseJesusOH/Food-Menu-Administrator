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
/**
 * Entidad representativas de un producto en la base de datos
 */
@Entity("productos")
export class Producto {

  /**
   * Identificador autoincremental de producto
   */
  @PrimaryGeneratedColumn({ name: "producto_id" })
  private productoId: Number

  /**
   * Nombre del producto
   */
  @Column({
    name: "nombre",
    length: 100,
    nullable:false
  })
  private nombre: String;

  /**
   * Entidad representativa de la relación 1 a 1 con categoria
   */
  @OneToOne(() => Categoria,{nullable:true})
  @JoinColumn({ name: "categoria_id" })
  private categoria: Categoria | null;

  /**
   * Identificador UUID de producto
   */
  @Column({ name: "producto_uuid" ,nullable:false})
  @Generated("uuid")
  private productoUuid: String

  /**
   * Entidad representativa de la relación muchos a muchos Producto a Alimento
   * representados en una entidad ProductoAlimento
   */
  @OneToMany(() => ProductoAlimento, (ProductoAlimento) => ProductoAlimento.getProducto)
  private productoAlimentos: ProductoAlimento[];

  /**
   * Entidad representativa de la relación muchos a muchos Producto a Compania
   * representados en una entidad ProductoCompania
   */
  @OneToMany(() => ProductoCompania, (ProductoCompania) => ProductoCompania.getProducto)
  private productoCompanias: ProductoCompania[];

  /**
   * Asigna las relaciones establecidas entre producto a compania
   * @param productoCompanias ProductoCompania objetos relacionados 
   */
  setProductoCompanias(productoCompanias: ProductoCompania[]) {
    this.productoCompanias = productoCompanias;
  }

  /**
   * Devuelve las relaciones encontradas entre producto a compania
   * @returns ProductoCompanias relaciones 
   */
  getProductoCompanias(): ProductoCompania[] {
    return this.productoCompanias;
  }

  /**
   * Asigna las relaciones establecidad entre producto a alimentos
   * @param productoAlimentos ProductoAlimentos objetos relaciones
   */
  setProductoAlimentos(productoAlimentos: ProductoAlimento[]): void {
    this.productoAlimentos = productoAlimentos;
  }

  /**
   * Devuelve las relaciones encontradas entre producto a alimento
   * @returns ProductoAlimentos relaciones
   */
  getProductoAlimentos(): ProductoAlimento[] {
    return this.productoAlimentos;
  }

  /**
   * Devuelve el identificado ID del producto
   * @returns ID del producto
   */
  getProductoId(): Number {
    return this.productoId;
  }

  /**
   * Asigna el identificador ID del producto
   * @param productoId ID Del producto
   */
  setProductoId(productoId: Number): void {
    this.productoId = productoId;
  }

  /**
   * Devuelve el nombre del producto
   * @returns Nombre del prducto
   */
  getNombre(): String {
    return this.nombre;
  }

  /**
   * Asigna el nombre del producto
   * @param nombre Nombre del producto
   */
  setNombre(nombre: String): void {
    this.nombre = nombre;
  }

  /**
   * Devuelve la categoria a la cual pertenece el producto
   * @returns Categoria del producto
   */
  getCategoria(): Categoria {
    return this.categoria;
  }

  /**
   * 
   * @param categoria Categoria del producto
   */
  setCategoria(categoria: Categoria): void {
    this.categoria = categoria;
  }

  /**
   * Devuelve el identificador UUID del producto
   * @returns UUID del producto
   */
  getProductoUuid(): String {
    return this.productoUuid;
  }

  /**
   * Asigna el identificador UUID al producto
   * @param productoUuid UUID del producto
   */
  setProductoUuid(productoUuid: String): void {
    this.productoUuid = productoUuid;
  }
}