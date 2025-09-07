import {ProductoAlimento} from "../../modelos/producto-alimento"
export interface ProductoAlimentoIDAO{
    getProductoAlimentosByIDAlimento(alimentoID:Number):ProductoAlimento[];
    agregarProductoAlimento(productoAlimento:ProductoAlimento):Boolean;
    actualizarProductoAlimento(productoAlimento:ProductoAlimento):Boolean;
    eliminarProductoAlimentoByID(productoAlimentoID:Number):Boolean;
}