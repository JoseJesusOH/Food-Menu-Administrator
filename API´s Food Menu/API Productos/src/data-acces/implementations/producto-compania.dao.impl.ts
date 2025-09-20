/**
 * Importaciones requeridas para la implementación del DAO de ProductoCompania.
 */
import { ProductoCompania } from "@entity/producto-compania.entity";
import { ProductoCompaniaIDAO } from "@data.dao/producto-compania.dao";
import { Conexion } from "@utility/conexion";
/**
 * Implementación del DAO de ProductoCompania.
 */
export class ProductoCompaniaDAO implements ProductoCompaniaIDAO {

    /** 1
     * Metodo que obtiene un ProductoCompania por su UUID.
     */
    async getProductoCompaniaByUuid(productoCompaniaUuid: String): Promise<ProductoCompania> {
        const productoCompaniaRepositorio = Conexion.getRepository(ProductoCompania);
        return productoCompaniaRepositorio.findOneBy(
            {productoCompaniaUuid:productoCompaniaUuid})
    }
    /** 2
     * Metodo que obtiene un ProductoCompania por su ID.
     */
    async getProductoCompaniaById(productoCompaniaId: Number): Promise<ProductoCompania> {
        throw new Error("Method not implemented.");
    }
    /** 3
     * Metodo que obtiene los ProductoCompania por su ID de producto.
     */
    async getProductosCompaniasByIdProducto(productoId: Number): Promise<ProductoCompania[]> {
        throw new Error("Method not implemented.");
    }
    /** 4
     * Metodo que obtiene los ProductoCompania por su UUID de producto compañia.
     */
    async getProductosCompaniasByIdCompania(companiaId: Number): Promise<ProductoCompania[]> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Metodo que agrega un ProductoCompania.
     */
    async agregarProductoCompania(productoCompania: ProductoCompania): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 6
     * Metodo que actualiza un ProductoCompania.
     */
    async actualizarProductoCompania(productoCompania: ProductoCompania): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    /** 7
     * Metodo que elimina un ProductoCompania por su ID.
     */
    async eliminarProductoCompaniaById(productoCompaniaId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }


}