import { ProductoAlimento } from "../../modelos/producto-alimento";
import { ProductoAlimentoIDAO } from "../daoInterfaces/productoAlimentoIDAO";
export class ProductoAlimentoDAO implements ProductoAlimentoIDAO{
    getProductoAlimentosByIDAlimento(alimentoID: Number): ProductoAlimento[] {
        throw new Error("Method not implemented.");
    }
    agregarProductoAlimento(productoAlimento: ProductoAlimento): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarProductoAlimento(productoAlimento: ProductoAlimento): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProductoAlimentoByID(productoAlimentoID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    
}