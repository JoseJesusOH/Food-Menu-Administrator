import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { VentaUsuario } from "@entity/venta-usuario.entity";

@Entity("usuario")
class Usuario {
  @PrimaryGeneratedColumn({ name: "usuario_id" })
  usuarioId: Number;

  @Column({ name: "usuario_uuid", type: "uuid", unique: true })
  usuarioUuid: String;

  @Column({ name: "nombre", type: "varchar", length: 100 })
  nombre: String;

  @OneToMany(() => VentaUsuario, (ventaUsuario) => ventaUsuario.usuario)
  ventaUsuarios: VentaUsuario[];

  /** Obtiene el ID del usuario. */
  getUsuarioId(): Number {
    return this.usuarioId;
  }

  /** Establece el ID del usuario. */
  setUsuarioId(value: Number): void {
    this.usuarioId = value;
  }

  /** Obtiene el UUID del usuario. */
  getUsuarioUuid(): String {
    return this.usuarioUuid;
  }

  /** Establece el UUID del usuario. */
  setUsuarioUuid(value: String): void {
    this.usuarioUuid = value;
  }

  /** Obtiene el nombre del usuario. */
  getNombre(): String {
    return this.nombre;
  }

  /** Establece el nombre del usuario. */
  setNombre(value: String): void {
    this.nombre = value;
  }
}

export { Usuario };
