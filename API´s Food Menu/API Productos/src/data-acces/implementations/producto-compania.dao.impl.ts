/**
 * Importaciones requeridas para la implementación del DAO de ProductoCompania.
 */
import { ProductoCompania } from "@entity/producto-compania.entity";
import { ProductoCompaniaIDAO } from "@data.dao/producto-compania.dao";
/**
 * Implementación del DAO de ProductoCompania.
 */
export class ProductoCompaniaDAO implements ProductoCompaniaIDAO {
    /**
     * Metodo que obtiene los ProductoCompania por su ID de producto compañia.
     */
    getProductosCompaniasById(productoCompaniaId: Number): ProductoCompania[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene los ProductoCompania por su UUID de producto compañia.
     */
    getProductosCompaniasByIdCompania(companiaId: Number): ProductoCompania[] {
        throw new Error("Method not implemented.");
    }

    /**
    * Metodo que obtiene los ProductoCompania por su UUID de producto compañia.
    */
    getProductosCompaniasByUuidCompania(companiaUuid: String): ProductoCompania[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que agrega un ProductoCompania.
     */

    agregarProductoCompania(productoCompania: ProductoCompania): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que actualiza un ProductoCompania.
     */

    actualizarProductoCompania(productoCompania: ProductoCompania): Boolean {
        throw new Error("Method not implemented.");
    }

    /** 
     * Metodo que elimina un ProductoCompania por su ID.
     */
    eliminarProductoCompaniaById(productoCompaniaId: Number): Boolean {
        throw new Error("Method not implemented.");
    }


}