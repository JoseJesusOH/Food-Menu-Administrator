/**
 * Importaciones requeridas para la implementación del DAO de ProductoAlimento.
 */
import { ProductoAlimento } from "@entity/producto-alimento.entity";
import { ProductoAlimentoIDAO } from "@data.dao/producto-alimento.dao";
/**
 * Implementación del DAO de ProductoAlimento.
 */
export class ProductoAlimentoDAO implements ProductoAlimentoIDAO{
    /**
     * Metodo que obtiene los ProductoAlimento por su ID de alimento.
     */
    getProductosAlimentosByIdAlimento(alimentoId: Number): ProductoAlimento[] {
        throw new Error("Method not implemented.");
    }
    
    /**
     * Metodo que obtiene los ProductoAlimento por su UUID de alimento.
     */
    getProductosAlimentosByUuidAlimento(alimentoUuid: String): ProductoAlimento[] {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que obtiene un ProductoAlimento por su ID.
     * 
     */
    agregarProductoAlimento(productoAlimento: ProductoAlimento): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que actualiza un ProductoAlimento.
     */
    actualizarProductoAlimento(productoAlimento: ProductoAlimento): Boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Metodo que elimina un ProductoAlimento por su ID.
     */
    eliminarProductoAlimentoById(productoAlimentoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    
}