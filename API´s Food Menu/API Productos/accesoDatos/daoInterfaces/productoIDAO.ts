import {Producto} from "../../modelos/producto"

export interface ProductoIDAO{
    getProductos():Producto[];
    getProductoByID(productoID:Number):Producto;
    getProductoByUUID(productoUUID:String):Producto;
    agregarProducto(producto:Producto):Boolean;
    actualizarProducto(producto:Producto):Boolean;
    eliminarProductoByID(productoID:Number):Boolean;
}