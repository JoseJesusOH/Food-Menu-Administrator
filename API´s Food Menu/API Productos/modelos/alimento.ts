import { Categoria } from "../modelos/categoria"
export class Alimento {
    private alimentoID: Number;
    private nombre: String;
    private categoria: Categoria;
    private alimentoUUID: String;
    getAlimentoID(): Number {
        return this.alimentoID;
    }
    setAlimentID(alimentoID: Number): void {
        this.alimentoID = alimentoID;
    }
    getNombe(): String {
        return this.nombre;
    }
    setNombre(nombre: String): void {
        this.nombre = nombre;
    }
    getCategoria(): Categoria {
        return this.categoria;
    }
    setCategoria(categoria:Categoria):void{
        this.categoria=categoria;
    }
    getAlimentoUUID():String{
        return this.alimentoUUID;
    }
    setAlimentoUUID(alimentoUUID:String):void{
        this.alimentoUUID=alimentoUUID;
    }

}