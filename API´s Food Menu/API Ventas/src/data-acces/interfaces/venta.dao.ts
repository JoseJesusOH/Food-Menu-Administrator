import { Venta } from "@entity/venta.entity";

export interface VentaIDAO{
    getVentas():Venta[];
    getVentaByID(ventaID:Number): Venta;
    getVentaByUUID(ventaUUID:String): Venta;
    agregarVenta(venta:Venta):Boolean;
    actualizarVenta(venta:Venta):Boolean;
    eliminarVentaByID(ventaID:Number):Boolean;
}