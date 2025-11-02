import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { VentaProducto } from "@entity/venta-producto.entity";

@Entity("producto")
class Producto {
  @PrimaryGeneratedColumn({ name: "producto_id" })
  productoId: Number;

  @Column({ name: "producto_uuid", type: "uuid", unique: true })
  productoUuid: String;

  @Column({ name: "nombre", type: "varchar", length: 100 })
  nombre: String;

  @Column({ name: "precio", type: "decimal", precision: 10, scale: 2 })
  precio: Number;

  @OneToMany(() => VentaProducto, (ventaProducto) => ventaProducto.producto)
  ventaProductos: VentaProducto[];

  /** Obtiene el ID del producto. */
  getProductoId(): Number {
    return this.productoId;
  }

  /** Establece el ID del producto. */
  setProductoId(value: Number): void {
    this.productoId = value;
  }

  /** Obtiene el UUID del producto. */
  getProductoUuid(): String {
    return this.productoUuid;
  }

  /** Establece el UUID del producto. */
  setProductoUuid(value: String): void {
    this.productoUuid = value;
  }

  /** Obtiene el nombre del producto. */
  getNombre(): String {
    return this.nombre;
  }

  /** Establece el nombre del producto. */
  setNombre(value: String): void {
    this.nombre = value;
  }

  /** Obtiene el precio del producto. */
  getPrecio(): Number {
    return this.precio;
  }

  /** Establece el precio del producto. */
  setPrecio(value: Number): void {
    this.precio = value;
  }
}

export { Producto };
