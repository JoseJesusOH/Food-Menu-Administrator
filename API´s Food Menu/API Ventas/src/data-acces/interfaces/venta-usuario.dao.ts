import { VentaUsuario } from "@entity/venta-usuario.entity";

export interface VentaUsuarioIDAO{
    getVentasUsuarioByIDVenta(ventaID:Number):VentaUsuario[];
     getVentaUsuarioByIDVenta(ventaID:Number):VentaUsuario;
     getVentaUsuarioByID(ventaUsuarioID:Number):VentaUsuario;
     getVentaUsuarioByUUID(ventaUsuarioUUID:String):VentaUsuario;
     agregarVentaUsuario(ventaUsuario: VentaUsuario): Boolean;
    eliminarVentaUsuarioByID(ventaUsuarioID: Number): Boolean;
}