import {VentaProducto} from "../../modelos/ventaProducto";
export interface VentaProductoIDAO{
    getVentaProductoByID(ventaProductoID:Number):VentaProducto;
    getVentaProductoByUUID(ventaProductoUUID:String):VentaProducto;
    getVentaProductoByIDVenta(ventaID:Number):VentaProducto[];
    agregarVentaProducto(ventaProducto: VentaProducto):Boolean;
    actualizarVentaProducto(ventaProducto: VentaProducto):Boolean;
    eliminarVentaProductoByID(ventaProductoID:Number):Boolean
}