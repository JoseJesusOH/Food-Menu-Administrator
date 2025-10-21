import { ProductoCompra } from "@entity/producto-compra.entity"

export interface ProductoCompraIDAO {
    getProductosCompra(): Promise<ProductoCompra[]>;
    getProductoCompraById(productoCompraId: Number): Promise<ProductoCompra>;
    getProductoCompraByUuid(productoCompraUuid: String): Promise<ProductoCompra>;
    eliminarProductoCompraById(productoCompraId: Number): Promise<Boolean>;
    actualizarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean>;
    agregarProductoCompra(productoCompra: ProductoCompra): Promise<Boolean>;
}
