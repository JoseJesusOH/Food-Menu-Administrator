import { Categoria } from "./categoria"
import "reflect-metadata"
import { Entity, Column, PrimaryGeneratedColumn ,Generated} from "typeorm"

@Entity("categoria")
export class Alimento {
        @Column()
    @Generated("uuid")
    private alimentoID: Number;
    private nombre: String;
    private categoria: Categoria;
        @Column()
    @Generated("uuid")
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