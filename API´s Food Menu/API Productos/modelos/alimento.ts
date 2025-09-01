import { Categoria } from "./categoria"
import { ProductoAlimento } from "./productoAlimento"
import "reflect-metadata"
import {
    Entity, Column, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany,
    JoinColumn,
    ForeignKey
} from "typeorm"

@Entity("alimentos")
export class Alimento {

    @PrimaryGeneratedColumn({
        name:"alimento_id"
    })
    private alimentoID: Number;

    @Column({
        name:"nombre"
    })
    private nombre: String;

    @OneToOne(() => Categoria)
    @JoinColumn({name:"categoria_id" ,foreignKeyConstraintName:"categoria_alimento_IDFK"})
    private categoria: Categoria;

    @Column({
        name:"alimento_uuid"
    })
    @Generated("uuid")
    private alimentoUUID: String;

    @OneToMany(() => ProductoAlimento, (ProductoAlimento) => ProductoAlimento.getAlimento)
    private productoAlimento: ProductoAlimento[];

    setProductoAlimentos(productoAlimento: ProductoAlimento[]): void {
        this.productoAlimento = productoAlimento;
    }
    getProductoAlimentos(): ProductoAlimento[] {
        return this.productoAlimento;
    }

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
    setCategoria(categoria: Categoria): void {
        this.categoria = categoria;
    }
    getAlimentoUUID(): String {
        return this.alimentoUUID;
    }
    setAlimentoUUID(alimentoUUID: String): void {
        this.alimentoUUID = alimentoUUID;
    }

}