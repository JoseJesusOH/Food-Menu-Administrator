import {ProductoAlimento} from "@entity/producto-alimento.entity"
export interface ProductoAlimentoIDAO{
    getProductosAlimentosByIdAlimento(alimentoId:Number):ProductoAlimento[];
    agregarProductoAlimento(productoAlimento:ProductoAlimento):Boolean;
    actualizarProductoAlimento(productoAlimento:ProductoAlimento):Boolean;
    eliminarProductoAlimentoById(productoAlimentoId:Number):Boolean;
}