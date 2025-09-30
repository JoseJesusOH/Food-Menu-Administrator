import { ProductoDTO } from "@dto/producto.dto";
import { ProductoIService } from "@service.dao/producto.servicio";
class ProductoServicio implements ProductoIService{
    getProductos(): ProductoDTO[] {
        throw new Error("Method not implemented.");
    }
    getProductoById(): ProductoDTO {
        throw new Error("Method not implemented.");
    }
    agregarProducto(): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProdcto(): Boolean {
        throw new Error("Method not implemented.");
    }
    
}