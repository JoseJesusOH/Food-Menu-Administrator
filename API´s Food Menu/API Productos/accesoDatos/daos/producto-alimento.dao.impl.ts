import { ProductoAlimento } from "../../modelos/producto-alimento";
import { ProductoAlimentoIDAO } from "../daoInterfaces/producto-alimento.dao";
export class ProductoAlimentoDAO implements ProductoAlimentoIDAO{
    getProductosAlimentosByIdAlimento(alimentoId: Number): ProductoAlimento[] {
        throw new Error("Method not implemented.");
    }
    agregarProductoAlimento(productoAlimento: ProductoAlimento): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarProductoAlimento(productoAlimento: ProductoAlimento): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProductoAlimentoById(productoAlimentoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    
}