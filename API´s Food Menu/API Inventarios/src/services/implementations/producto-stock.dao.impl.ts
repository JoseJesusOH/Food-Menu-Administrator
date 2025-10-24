import { ProductoStockDTO } from "@dto/producto-stock.dto";

interface ProductoStockIServicio {
    getProductoStocks(): Promise<ProductoStockDTO[]>;
    agregarProductoStock(productoStock: ProductoStockDTO): Promise<Boolean>;
    actualizarProductoStock(productoStock: ProductoStockDTO): Promise<Boolean>;
    eliminarProductoStock(productoStockUuid: string): Promise<Boolean>;
    getProductoStockByUuid(productoStockUuid: string): Promise<ProductoStockDTO>;
}

export { ProductoStockIServicio };
