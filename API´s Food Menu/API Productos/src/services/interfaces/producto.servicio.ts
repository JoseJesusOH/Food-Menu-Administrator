import { ProductoDTO } from "@dto/producto.dto"
interface ProductoIService{
    getProductos(): Promise<ProductoDTO[]>;
    getProductoByUuid(productoUuid: String): Promise<ProductoDTO>;
    agregarProducto(productoDTO: ProductoDTO):Promise<Boolean>;
    eliminarProdcto(productoUuid:String):Promise<Boolean>;
    actualizarProducto(productoDTO: ProductoDTO): Promise<Boolean>;
}
export {ProductoIService}