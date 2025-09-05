import {PermisoCategoria} from "./permisoCategoria"
export class Permiso{
    private permisoID:Number;
    private permisoUUID:String;
    private nombre:String;
    private permisoCategorias: PermisoCategoria[];
    setPermisoID(permisoID:Number):void{
        this.permisoID=permisoID
    }
    getPermisoID():Number{
        return this.permisoID
    }
    setPermisoUUID(permisoUUID:String):void{
        this.permisoUUID=permisoUUID
    }
    getPermisoUUID():String{
        return this.permisoUUID
    }
    setNombre(nombre:String):void{
        this.nombre=nombre
    }
    getNombre():String{
        return this.nombre
    }
    setPermisoCategorias(permisoCategorias:PermisoCategoria[]):void{
        this.permisoCategorias=permisoCategorias
    }
    getPermisoCategorias():PermisoCategoria[]{
        return this.permisoCategorias
    }
}