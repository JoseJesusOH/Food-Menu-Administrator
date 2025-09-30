import { ProductoDTO } from "@dto/producto.dto"
interface ProductoIService{
    getProductos(): ProductoDTO[];
    getProductoById(): ProductoDTO;
    agregarProducto():Boolean;
    eliminarProdcto():Boolean;
}
export {ProductoIService}