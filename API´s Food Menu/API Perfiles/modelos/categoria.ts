import {PermisoCategoria} from "./permisoCategoria"

export class Categoria{
    private categoriaID:Number;
    private categoriaUUID:String;
    private nombre: String;
    private permisoCategorias: PermisoCategoria[];
    
    setCategoriaID(categoriaID: Number):void{
        this.categoriaID=categoriaID
    }
    
    getCategoriaID():Number{
        return this.categoriaID
    }

    setCategoriaUUID(categoriaUUID:String):void{
       this.categoriaUUID=categoriaUUID
    }
    getCategoriaUUID():String{
     return this.categoriaUUID
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