/**
 * Importaciones requeridas para la implementación del DAO de ProductoAlimento.
 */
import { ProductoAlimento } from "@entity/producto-alimento.entity";
import { ProductoAlimentoIDAO } from "@data.dao/producto-alimento.dao";
/**
 * Implementación del DAO de ProductoAlimento.
 */
export class ProductoAlimentoDAO implements ProductoAlimentoIDAO {
    /** 
     * Obtiene todos los productos-alimentos de un alimento específico 
    */
    getProductosAlimentosByIdAlimento(alimentoId: number): Promise<ProductoAlimento[]> {
        throw new Error("Method not implemented.");
    }

    /** 
     * Obtiene un producto-alimento por su ID 
    */
    getProductoAlimentoById(productoAlimentoId: number): Promise<ProductoAlimento> {
        throw new Error("Method not implemented.");
    }

    /** 
     * Obtiene un producto-alimento por su UUID 
    */
    getProductoAlimentoByUuid(productoAlimentoUuid: string): Promise<ProductoAlimento> {
        throw new Error("Method not implemented.");
    }

    /** 
     * Obtiene todos los productos-alimentos de un producto específico 
     */
    getProductosAlimentosByIdProducto(productoId: number): Promise<ProductoAlimento[]> {
        throw new Error("Method not implemented.");
    }

    /** 
     * Agrega un nuevo producto-alimento 
     */
    agregarProductoAlimento(productoAlimento: ProductoAlimento): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /** 
     * Actualiza un producto-alimento existente 
     */
    actualizarProductoAlimento(productoAlimento: ProductoAlimento): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    /** 
     * Elimina un producto-alimento por su ID 
     */
    eliminarProductoAlimentoById(productoAlimentoId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}