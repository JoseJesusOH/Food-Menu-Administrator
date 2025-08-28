import {ProductoAlimento} from "../../modelos/productoAlimento"
export interface ProductoAlimentoIDAO{
    getProductoAlimentosByIDAlimento(alimentoID:Number):ProductoAlimento[];
    agregarProductoAlimento(productoAlimento:ProductoAlimento):Boolean;
    actualizarProductoAlimento(productoAlimento:ProductoAlimento):Boolean;
    eliminarProductoAlimentoByID(productoAlimentoID:Number):Boolean;
}