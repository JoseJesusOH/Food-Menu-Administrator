import {Proveedor} from "../../modelos/proveedor"
export interface ProveedorIDAO{
    getProveedores():Proveedor[];
    getProveedorByID(proveedorID:Number):Proveedor;
    getProveedorByUUID(proveedorUUID:String):Proveedor;
    agregarProveedor(proveedor:Proveedor):Boolean;
    actualizarProveedor(proveedor:Proveedor):Boolean;
    eliminarProveedorByID(proveedorID:Number):Boolean;
}