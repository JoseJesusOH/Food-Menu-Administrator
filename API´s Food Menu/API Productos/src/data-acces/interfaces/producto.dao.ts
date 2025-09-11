import {Producto} from "@entity/producto.entity"

export interface ProductoIDAO{
    getProductos():Producto[];
    getProductoById(productoId:Number):Producto;
    getProductoByUuid(productoUuid:String):Producto;
    agregarProducto(producto:Producto):Boolean;
    actualizarProducto(producto:Producto):Boolean;
    eliminarProductoById(productoId:Number):Boolean;
}