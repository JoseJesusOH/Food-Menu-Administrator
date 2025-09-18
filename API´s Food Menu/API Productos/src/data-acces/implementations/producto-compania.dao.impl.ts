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
     * Metodo que obtiene un ProductoCompania por su UUID.
     */
    async getProductoCompaniaByUuid(productoCompaniaUuid: String): Promise<ProductoCompania> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene un ProductoCompania por su ID.
     */
    async getProductoCompaniaById(productoCompaniaId: Number): Promise<ProductoCompania> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene los ProductoCompania por su ID de producto.
     */
    async getProductosCompaniasByIdProducto(productoId: Number): Promise<ProductoCompania[]> {
        throw new Error("Method not implemented.");
    }


    /**
     * Metodo que obtiene los ProductoCompania por su ID de producto compañia.
     */
    async getProductosCompaniasById(productoCompaniaId: Number): Promise<ProductoCompania[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene los ProductoCompania por su UUID de producto compañia.
     */
    async getProductosCompaniasByIdCompania(companiaId: Number): Promise<ProductoCompania[]> {
        throw new Error("Method not implemented.");
    }

    /**
    * Metodo que obtiene los ProductoCompania por su UUID de producto compañia.
    */
    async getProductosCompaniasByUuidCompania(companiaUuid: String): Promise<ProductoCompania[]> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que agrega un ProductoCompania.
     */

    async agregarProductoCompania(productoCompania: ProductoCompania): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que actualiza un ProductoCompania.
     */

    async actualizarProductoCompania(productoCompania: ProductoCompania): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /**
     * Metodo que elimina un ProductoCompania por su ID.
     */
    async eliminarProductoCompaniaById(productoCompaniaId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }


}