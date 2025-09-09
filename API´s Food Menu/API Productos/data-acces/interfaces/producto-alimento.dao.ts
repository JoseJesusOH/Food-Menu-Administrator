import {ProductoAlimento} from "../../modelos/producto-alimento"
export interface ProductoAlimentoIDAO{
    getProductosAlimentosByIdAlimento(alimentoId:Number):ProductoAlimento[];
    agregarProductoAlimento(productoAlimento:ProductoAlimento):Boolean;
    actualizarProductoAlimento(productoAlimento:ProductoAlimento):Boolean;
    eliminarProductoAlimentoById(productoAlimentoId:Number):Boolean;
}