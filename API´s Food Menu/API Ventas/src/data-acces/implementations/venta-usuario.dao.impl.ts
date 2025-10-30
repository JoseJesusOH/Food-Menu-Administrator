import { VentaUsuarioIDAO } from "@data.dao/venta-usuario.dao";
import { VentaUsuario } from "@entity/venta-usuario.entity";

class VentaUsuarioDAO implements VentaUsuarioIDAO{
    getVentasUsuarioByIDVenta(ventaID: number): VentaUsuario[] {
        throw new Error("Method not implemented.");
    }
    getVentaUsuarioByIDVenta(ventaID: number): VentaUsuario {
        throw new Error("Method not implemented.");
    }
    getVentaUsuarioByID(ventaUsuarioID: number): VentaUsuario {
        throw new Error("Method not implemented.");
    }
    getVentaUsuarioByUUID(ventaUsuarioUUID: string): VentaUsuario {
        throw new Error("Method not implemented.");
    }
    agregarVentaUsuario(ventaUsuario: VentaUsuario): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarVentaUsuarioByID(ventaUsuarioID: number): boolean {
        throw new Error("Method not implemented.");
    }
    
}