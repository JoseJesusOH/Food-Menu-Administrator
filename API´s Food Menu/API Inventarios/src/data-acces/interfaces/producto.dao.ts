import { Producto } from "@entity/producto.entity"

export interface ProductoIDAO {
    getProductos(): Promise<Producto[]>;
    getProductoById(productoId: Number): Promise<Producto>;
    getProductoByUuid(productoUuid: String): Promise<Producto>;
    eliminarProductoById(productoId: Number): Promise<Boolean>;
    actualizarProducto(producto: Producto): Promise<Boolean>;
    agregarProducto(producto: Producto): Promise<Boolean>;
}
