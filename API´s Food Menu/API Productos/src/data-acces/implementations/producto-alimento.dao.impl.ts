/**
 * Importaciones requeridas para la implementación del DAO de ProductoAlimento.
 */
import { ProductoAlimento } from "@entity/producto-alimento.entity";
import { ProductoAlimentoIDAO } from "@data.dao/producto-alimento.dao";
/**
 * Implementación del DAO de ProductoAlimento.
 */
export class ProductoAlimentoDAO implements ProductoAlimentoIDAO {
    /** 1
     * Obtiene todos los productos-alimentos de un alimento específico 
    */
    getProductosAlimentosByIdAlimento(alimentoId: number): Promise<ProductoAlimento[]> {
        throw new Error("Method not implemented.");
    }
    /** 2
     * Obtiene un producto-alimento por su ID 
    */
    getProductoAlimentoById(productoAlimentoId: number): Promise<ProductoAlimento> {
        throw new Error("Method not implemented.");
    }
    /** 3
     * Obtiene un producto-alimento por su UUID 
    */
    getProductoAlimentoByUuid(productoAlimentoUuid: string): Promise<ProductoAlimento> {
        throw new Error("Method not implemented.");
    }
    /** 4
     * Obtiene todos los productos-alimentos de un producto específico 
     */
    getProductosAlimentosByIdProducto(productoId: number): Promise<ProductoAlimento[]> {
        throw new Error("Method not implemented.");
    }
    /** 5
     * Agrega un nuevo producto-alimento 
     */
    agregarProductoAlimento(productoAlimento: ProductoAlimento): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    /** 6
     * Actualiza un producto-alimento existente 
     */
    actualizarProductoAlimento(productoAlimento: ProductoAlimento): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    /** 7
     * Elimina un producto-alimento por su ID 
     */
    eliminarProductoAlimentoById(productoAlimentoId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}