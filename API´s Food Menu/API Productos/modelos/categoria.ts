import "reflect-metadata"
import { Entity, Column, PrimaryGeneratedColumn ,Generated} from "typeorm"

@Entity("categoria")
export class Categoria {
    
    @PrimaryGeneratedColumn()
     categoriaID: Number;
    
    @Column({
        length: 100,
    })
     nombre: String;

    @Column()
    @Generated("uuid")
     categoriaUUID: String;

    getCategoriaID(): Number {
        return this.categoriaID;
    }
    setCategoriaID(categoriaID: Number): void {
        this.categoriaID = categoriaID;
    }
    getNombre(): String {
        return this.nombre;
    }
    setNombre(nombre: String): void {
        this.nombre = nombre;
    }
    getCategoriaUUID(): String {
        return this.categoriaUUID;
    }
    setCategoriaUUID(categoriaUUID: String): void {
        this.categoriaUUID = categoriaUUID;
    }
}