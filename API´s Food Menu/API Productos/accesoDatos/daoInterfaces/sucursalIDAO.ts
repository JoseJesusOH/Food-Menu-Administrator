import {Sucursal} from "../../modelos/sucursal"
export interface SucursalIDAO{
getSucursales():Sucursal[];
getSucursalByID(sucursalID:Number):Sucursal;
getSucursalByUUID(sucursalUUID:String):Sucursal;
eliminarSucursalByID(sucursalID:Number):Boolean;
actualizarSucursal(sucursal:Sucursal):Boolean;
agregarSucursal(sucursal:Sucursal):Boolean;
}