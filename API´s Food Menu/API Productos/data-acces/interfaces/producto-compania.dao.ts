import {ProductoCompania} from "../../entities/producto-compania.entity"
export interface ProductoCompaniaIDAO{
    getProductosCompaniasByIdAlimento(productoCompaniaId:Number):ProductoCompania[];
    agregarProductoCompania(productoCompania:ProductoCompania):Boolean;
    actualizarProductoCompania(productoCompania:ProductoCompania):Boolean;
    eliminarProductoCompaniaById(productoCompaniaId:Number):Boolean;
}