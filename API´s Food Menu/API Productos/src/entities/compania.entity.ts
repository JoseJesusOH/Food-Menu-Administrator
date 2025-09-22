
/**
 * Importaciones TypeORM
 */
import {
    Entity, Column, PrimaryGeneratedColumn, Generated,
    OneToMany
} from "typeorm"
/**
 * Importaciones de relaciones requeridas CentroProductivo, ProductoCompania
 */
import { CentroProductivo } from "@entity/centro-productivo.entity"
import { ProductoCompania } from "@entity/producto-compania.entity"
/**
 * Entidad que representa una compañia en la base de datos
 */
@Entity("companias")
export class Compania {
    
    /**
     * Identificador ID autoincremental de la compania
     */
    @PrimaryGeneratedColumn({
        name: "compania_id"
    })
     companiaId: Number;

    /**
     * Identificador UUID de la compania
     */
    @Column({ name: "compania_uuid" })
    @Generated("uuid")
     companiaUuid: String;

    /**
     * Nombre de la compania
     */
    @Column({
        length: 100
        , name: "nombre"
    })
     nombre: String;

    /**
     * Relacion 1 a muchos de compania con respecto a centro productivo
     */
    @OneToMany(() => CentroProductivo, (CentroProductivo) => CentroProductivo.getCompania)
     centroProductivos: CentroProductivo[];

    /**
     * Relación muchos a muchos con respecto a productos y companias donde
     * se representa coon una entidad ProductoCompania
     */
    @OneToMany(() => ProductoCompania, (ProductoCompania) => ProductoCompania.getCompania)
     productoCompanias: ProductoCompania[];

  /**
   * Constructor que inicializa solo el ID
   */
  constructor(companiaId?: number) {
    if (companiaId !== undefined) {
      this.companiaId = companiaId;
    }
  }
    /**
     * Asigna las relaciones de las companias con respecto a producto
     * @param productoCompanias ProductoCompanias relaciones
     */
    setProductoCompanias(productoCompanias: ProductoCompania[]) {
        this.productoCompanias = productoCompanias;
    }

    /**
     * Devuelve las productos asociados a companias 
     * @returns ProductoCompanias relacionaods
     */
    getProductoCompanias(): ProductoCompania[] {
        return this.productoCompanias;
    }
 
    /**
     * Devuelve el identificador ID de la compania
     * @returns ID de la compania
     */
    getCompaniaId(): Number {
        return this.companiaId;
    }

    /**
     * Asigna el identificador ID de la compania
     * @param companiaId ID de la compania
     */
    setCompaniaId(companiaId: Number): void {
        this.companiaId = companiaId;
    }

    /**
     * Devuelve el UUID de la compania
     * @returns UUID de la compania
     */
    getCompaniaUuid(): String {
        return this.companiaUuid;
    }

    /**
     * Asigna el UUID de la compania
     * @param companiaUuid UUID de la compania
     */
    setCompaniaUuid(companiaUuid: String): void {
        this.companiaUuid = companiaUuid;
    }

    /**
     * Devuelve elnombre de la compania
     * @returns Nombre de la compania
     */
    getNombre(): String {
        return this.nombre;
    }

    /**
     * Asigna el nombre a la compania
     * @param nombre Nombre de compania
     */
    setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    /**
     * Asigna las relaciones de centro productivos con respecto a las companias
     * @param centroProductivos CentroProductivos relaciones
     */
    setCentroProductivos(centroProductivos: CentroProductivo[]): void {
        this.centroProductivos = centroProductivos;
    }

    /**
     * Devuelve las relaciones de centro productivo con respecto a las companias
     * @returns CentrosProductivos relaciones
     */
    getCentroProductivos() {
        return this.centroProductivos;
    }

}