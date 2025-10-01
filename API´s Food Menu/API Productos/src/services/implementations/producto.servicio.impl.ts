import { ProductoDTO } from "@dto/producto.dto";
import { ProductoIService } from "@service.dao/producto.servicio";
class ProductoServicio implements ProductoIService{
    getProductos(): Promise<ProductoDTO[]> {
        throw new Error("Method not implemented.");
    }
    getProductoByUuid(productoUuid: String): Promise<ProductoDTO> {
        throw new Error("Method not implemented.");
    }
    agregarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarProdcto(productoUuid: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
   
    
}