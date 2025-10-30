import { Venta } from "@entity/venta.entity"
import { Usuario } from "@entity/usuario.entity"
 class VentaUsuario {
     ventaUsuarioId: Number;
     ventaUsuarioUuid: String;
     venta: Venta;
     usuario: Usuario;
     /** Obtiene el ID de la relación venta-usuario. */
    getVentaUsuarioId(): Number {
        return this.ventaUsuarioId;
    }

    /** Establece el ID de la relación venta-usuario. */
    setVentaUsuarioId(value: Number): void {
        this.ventaUsuarioId = value;
    }

    /** Obtiene el UUID de la relación venta-usuario. */
    getVentaUsuarioUuid(): String {
        return this.ventaUsuarioUuid;
    }

    /** Establece el UUID de la relación venta-usuario. */
    setVentaUsuarioUuid(value: String): void {
        this.ventaUsuarioUuid = value;
    }

    /** Obtiene la venta asociada. */
    getVenta(): Venta {
        return this.venta;
    }

    /** Establece la venta asociada. */
    setVenta(value: Venta): void {
        this.venta = value;
    }

    /** Obtiene el usuario asociado. */
    getUsuario(): Usuario {
        return this.usuario;
    }

    /** Establece el usuario asociado. */
    setUsuario(value: Usuario): void {
        this.usuario = value;
    }
}

export {VentaUsuario}