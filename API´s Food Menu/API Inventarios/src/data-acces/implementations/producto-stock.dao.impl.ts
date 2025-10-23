import { ProductoStockIDAO } from "@data.dao/producto-stock.dao";
import { ProductoStock } from "@entity/producto-stock.entity";
import { Conexion } from "@utility/conexion";

class ProductoStockDAO implements ProductoStockIDAO{
    getProductosStock(): Promise<ProductoStock[]> {
        throw new Error("Method not implemented.");
    }
    getProductoStockById(productoStockId: Number): Promise<ProductoStock> {
        throw new Error("Method not implemented.");
    }
    getProductoStockByUuid(productoStockUuid: String): Promise<ProductoStock> {
        throw new Error("Method not implemented.");
    }
    eliminarProductoStockById(productoStockId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarProductoStock(productoStock: ProductoStock): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarProductoStock(productoStock: ProductoStock): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}