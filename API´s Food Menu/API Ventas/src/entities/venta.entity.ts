import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { VentaUsuario } from "@entity/venta-usuario.entity";
import { VentaProducto } from "@entity/venta-producto.entity";

@Entity("venta")
class Venta {
  @PrimaryGeneratedColumn({ name: "venta_id" })
  ventaId: Number;

  @Column({ name: "venta_uuid", type: "uuid", unique: true })
  ventaUuid: String;

  @Column({ name: "fecha", type: "date" })
  fecha: Date;

  @Column({ name: "total", type: "decimal", precision: 10, scale: 2 })
  total: Number;

  @Column({ name: "hora", type: "time" })
  hora: String;

  @OneToMany(() => VentaUsuario, (ventaUsuario) => ventaUsuario.venta)
  ventaUsuarios: VentaUsuario[];

  @OneToMany(() => VentaProducto, (ventaProducto) => ventaProducto.venta)
  ventaProductos: VentaProducto[];

  /** Obtiene el ID de la venta. */
  getVentaId(): Number {
    return this.ventaId;
  }

  /** Establece el ID de la venta. */
  setVentaId(value: Number): void {
    this.ventaId = value;
  }

  /** Obtiene el UUID de la venta. */
  getVentaUuid(): String {
    return this.ventaUuid;
  }

  /** Establece el UUID de la venta. */
  setVentaUuid(value: String): void {
    this.ventaUuid = value;
  }

  /** Obtiene la fecha de la venta. */
  getFecha(): Date {
    return this.fecha;
  }

  /** Establece la fecha de la venta. */
  setFecha(value: Date): void {
    this.fecha = value;
  }

  /** Obtiene el total de la venta. */
  getTotal(): Number {
    return this.total;
  }

  /** Establece el total de la venta. */
  setTotal(value: Number): void {
    this.total = value;
  }

  /** Obtiene la hora en que se realizó la venta. */
  getHora(): String {
    return this.hora;
  }

  /** Establece la hora en que se realizó la venta. */
  setHora(value: String): void {
    this.hora = value;
  }
}

export { Venta };
