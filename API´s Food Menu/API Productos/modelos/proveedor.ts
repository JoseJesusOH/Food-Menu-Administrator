import {Sucursal} from "../modelos/sucursal"
export class Proveedor{
    private proveedorID: Number;
    private proveedorUUID: String;
    private nombre: String;
    private sucursales: Sucursal[];
    getProveedorID():Number{
        return this.proveedorID;
    }
    setProveedorID(proveedorID:Number):void{
        this.proveedorID=proveedorID;
    }
    getProveedorUUID():String{
        return this.proveedorUUID;
    }
    setProveedorUUID(proveedorUUID:String):void{
        this.proveedorUUID=proveedorUUID;
    }
    getNombre():String{
        return this.nombre;
    }
setNombre(nombre:String):void{
    this.nombre=nombre;
}
setScurusales(sucursales:Sucursal[]):void{
  this.sucursales=sucursales;
}
    getSucursales(){
 return this.sucursales;
    }

}