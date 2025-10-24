import { ProductoDTO } from "@dto/producto.dto";

interface ProductoIServicio {
    getProductos(): Promise<ProductoDTO[]>;
    agregarProducto(producto: ProductoDTO): Promise<Boolean>;
    actualizarProducto(producto: ProductoDTO): Promise<Boolean>;
    eliminarProducto(productoUuid: string): Promise<Boolean>;
    getProductoByUuid(productoUuid: string): Promise<ProductoDTO>;
}

export { ProductoIServicio };
