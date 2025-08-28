import {Categoria} from "../modelos/categoria"
export class Producto{
  private productoID: Number
  private nombre: String;
  private categoria: Categoria;
  private productoUUID: String
  getProductoID():Number{
    return this.productoID;
  }
  setProductoID(productoID:Number):void{
    this.productoID=productoID;
  }
  getNombre():String{
    return this.nombre;
  }
  setNombre(nombre:String):void{
    this.nombre=nombre;
  }
  getCategoria():Categoria{
    return this.categoria;
  }
  setCategoria(categoria:Categoria):void{
    this.categoria=categoria;
  }
  getProductoUUID():String{
    return this.productoUUID;
  }
  setProductoUUID(productoUUID:String):void{
    this.productoUUID=productoUUID;
  }
}