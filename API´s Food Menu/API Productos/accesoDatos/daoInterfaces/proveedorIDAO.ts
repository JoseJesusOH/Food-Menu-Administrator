import {Compania} from "../../modelos/compania"
export interface ProveedorIDAO{
    getProveedores():Compania[];
    getProveedorByID(proveedorID:Number):Compania;
    getProveedorByUUID(proveedorUUID:String):Compania;
    agregarProveedor(proveedor:Compania):Boolean;
    actualizarProveedor(proveedor:Compania):Boolean;
    eliminarProveedorByID(proveedorID:Number):Boolean;
}