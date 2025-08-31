import {VentaUsuario} from "../../modelos/ventaUsuario";
export interface VentaUsuarioIDAO{
    getVentasUsuarioByIDVenta(ventaID:Number):VentaUsuario[];
     getVentaUsuarioByIDVenta(ventaID:Number):VentaUsuario;
     getVentaUsuarioByID(ventaUsuarioID:Number):VentaUsuario;
     getVentaUsuarioByUUID(ventaUsuarioUUID:String):VentaUsuario;
     agregarVentaUsuario(ventaUsuario: VentaUsuario): Boolean;
    eliminarVentaUsuarioByID(ventaUsuarioID: Number): Boolean;
}