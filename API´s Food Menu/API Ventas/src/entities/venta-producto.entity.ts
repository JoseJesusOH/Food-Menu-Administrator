import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Producto } from "@entity/producto.entity";
import { Venta } from "@entity/venta.entity";

@Entity("venta_producto")
class VentaProducto {
  @PrimaryGeneratedColumn({ name: "venta_producto_id" })
  ventaProductoId: Number;

  @Column({ name: "venta_producto_uuid", type: "uuid", unique: true })
  ventaProductoUuid: String;

  @Column({ name: "cantidad", type: "int" })
  cantidad: Number;

  @Column({ name: "subtotal", type: "decimal", precision: 10, scale: 2 })
  subtotal: Number;

  @Column({ name: "iva", type: "decimal", precision: 10, scale: 2 })
  iva: Number;

  @Column({ name: "total", type: "decimal", precision: 10, scale: 2 })
  total: Number;

  @ManyToOne(() => Producto, (producto) => producto.ventaProductos, { eager: true })
  @JoinColumn({ name: "producto_id" })
  producto: Producto;

  @ManyToOne(() => Venta, (venta) => venta.ventaProductos, { eager: true })
  @JoinColumn({ name: "venta_id" })
  venta: Venta;

  /** Obtiene el ID del detalle de venta. */
  getVentaProductoId(): Number {
    return this.ventaProductoId;
  }

  /** Establece el ID del detalle de venta. */
  setVentaProductoId(value: Number): void {
    this.ventaProductoId = value;
  }

  /** Obtiene el UUID del detalle de venta. */
  getVentaProductoUuid(): String {
    return this.ventaProductoUuid;
  }

  /** Establece el UUID del detalle de venta. */
  setVentaProductoUuid(value: String): void {
    this.ventaProductoUuid = value;
  }

  /** Obtiene la cantidad vendida del producto. */
  getCantidad(): Number {
    return this.cantidad;
  }

  /** Establece la cantidad vendida del producto. */
  setCantidad(value: Number): void {
    this.cantidad = value;
  }

  /** Obtiene el subtotal de la venta del producto. */
  getSubtotal(): Number {
    return this.subtotal;
  }

  /** Establece el subtotal de la venta del producto. */
  setSubtotal(value: Number): void {
    this.subtotal = value;
  }

  /** Obtiene el IVA aplicado al producto. */
  getIva(): Number {
    return this.iva;
  }

  /** Establece el IVA aplicado al producto. */
  setIva(value: Number): void {
    this.iva = value;
  }

  /** Obtiene el total correspondiente al producto vendido. */
  getTotal(): Number {
    return this.total;
  }

  /** Establece el total correspondiente al producto vendido. */
  setTotal(value: Number): void {
    this.total = value;
  }

  /** Obtiene el producto asociado a la venta. */
  getProducto(): Producto {
    return this.producto;
  }

  /** Establece el producto asociado a la venta. */
  setProducto(value: Producto): void {
    this.producto = value;
  }

  /** Obtiene la venta asociada al producto. */
  getVenta(): Venta {
    return this.venta;
  }

  /** Establece la venta asociada al producto. */
  setVenta(value: Venta): void {
    this.venta = value;
  }
}

export { VentaProducto };
