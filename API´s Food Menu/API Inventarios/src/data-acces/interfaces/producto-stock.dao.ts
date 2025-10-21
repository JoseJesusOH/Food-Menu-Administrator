import { ProductoStock } from "@entity/producto-stock.entity"

export interface ProductoStockIDAO {
    getProductosStock(): Promise<ProductoStock[]>;
    getProductoStockById(productoStockId: Number): Promise<ProductoStock>;
    getProductoStockByUuid(productoStockUuid: String): Promise<ProductoStock>;
    eliminarProductoStockById(productoStockId: Number): Promise<Boolean>;
    actualizarProductoStock(productoStock: ProductoStock): Promise<Boolean>;
    agregarProductoStock(productoStock: ProductoStock): Promise<Boolean>;
}
