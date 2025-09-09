import {ProductoCompania} from "../../modelos/producto-compania"
export interface ProductoCompaniaIDAO{
    getProductosCompaniasByIdAlimento(productoCompaniaId:Number):ProductoCompania[];
    agregarProductoCompania(productoCompania:ProductoCompania):Boolean;
    actualizarProductoCompania(productoCompania:ProductoCompania):Boolean;
    eliminarProductoCompaniaById(productoCompaniaId:Number):Boolean;
}