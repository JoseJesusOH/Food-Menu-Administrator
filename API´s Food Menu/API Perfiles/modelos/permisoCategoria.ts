import {Categoria} from "./categoria"
import {Permiso} from "./permiso"
export class PermisoCategoria{
    private permisoCategoriaID: Number;
    private permisoCategoriaUUID:String;
    private categoria:Categoria;
    private permiso:Permiso;
    setPermisoCategoriaID(permisoCategoriaID:Number):void{
        this.permisoCategoriaID=permisoCategoriaID
    }
    getPermisoCategoriaID():Number{
        return this.permisoCategoriaID
    }
    setPermisoCategoriaUUID(permisoCategoriaUUID:String):void{
        this.permisoCategoriaUUID=permisoCategoriaUUID
    }
    getPermisoCategoriaUUID():String{
        return this.permisoCategoriaUUID
    }
    setCategoria(categoria:Categoria):void{
        this.categoria=categoria
    }
    getCategoria():Categoria{
        return this.categoria
    }
    setPermiso(permiso:Permiso):void{
        this.permiso=permiso
    }
    getPermiso():Permiso{
        return this.permiso
    }

}