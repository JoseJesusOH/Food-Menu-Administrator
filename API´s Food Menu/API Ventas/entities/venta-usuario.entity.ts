import { Venta } from "./venta"
import { Usuario } from "./usuario"
 class VentaUsuario {
     ventaUsuarioID: Number;
     ventaUsuarioUUID: String;
     venta: Venta;
     usuario: Usuario;
     /** Obtiene el ID de la relación venta-usuario. */
    getVentaUsuarioID(): number {
        return this.ventaUsuarioID;
    }

    /** Establece el ID de la relación venta-usuario. */
    setVentaUsuarioID(value: number): void {
        this.ventaUsuarioID = value;
    }

    /** Obtiene el UUID de la relación venta-usuario. */
    getVentaUsuarioUUID(): string {
        return this.ventaUsuarioUUID;
    }

    /** Establece el UUID de la relación venta-usuario. */
    setVentaUsuarioUUID(value: string): void {
        this.ventaUsuarioUUID = value;
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