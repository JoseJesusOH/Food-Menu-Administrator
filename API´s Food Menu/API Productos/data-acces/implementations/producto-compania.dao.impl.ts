import { ProductoCompania } from "../../modelos/producto-compania";
import { ProductoCompaniaIDAO } from "../interfaces/producto-compania.dao";
export class ProductoCompaniaDAO implements ProductoCompaniaIDAO{
    getProductosCompaniasByIdAlimento(productoCompaniaId: Number): ProductoCompania[] {
        throw new Error("Method not implemented.");
    }
    agregarProductoCompania(productoCompania: ProductoCompania): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarProductoCompania(productoCompania: ProductoCompania): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProductoCompaniaById(productoCompaniaId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    
}