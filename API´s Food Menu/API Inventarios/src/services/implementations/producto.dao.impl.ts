import { ProductoDTO } from "@dto/producto.dto";
import { ProductoIServicio } from "@service.dao/producto.dao";

class ProductoService implements ProductoIServicio{
    getProductos(): Promise<ProductoDTO[]> {
        throw new Error("Method not implemented.");
    }
    agregarProducto(producto: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarProducto(producto: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarProducto(productoUuid: string): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    getProductoByUuid(productoUuid: string): Promise<ProductoDTO> {
        throw new Error("Method not implemented.");
    }
    
}