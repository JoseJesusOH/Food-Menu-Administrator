import { ProductoCompraIDAO } from "@data.dao/producto-compra.dao";
import { ProductoCompra } from "@entity/producto-compra.entity";

class ProductoCompraDAO implements ProductoCompraIDAO{
    getProductosCompra(): Promise<ProductoCompra[]> {
        throw new Error("Method not implemented.");
    }
    getProductoCompraById(productoCompraId: Number): Promise<ProductoCompra> {
        throw new Error("Method not implemented.");
    }
    getProductoCompraByUuid(productoCompraUuid: String): Promise<ProductoCompra> {
        throw new Error("Method not implemented.");
    }
    eliminarProductoCompraById(productoCompraId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}