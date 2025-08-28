import { Producto } from "../modelos/producto"
import { Alimento } from "../modelos/alimento"
import { UnidadMedida } from "../modelos/unidadMedida"
export class ProductoAlimento {
    private productoAlimentoID: Number;
    private productoAlimentoUUID: String;
    private cantidadMinima: Number;
    private cantidadMaxima: Number;
    private producto: Producto;
    private alimento: Alimento;
    private unidadMedida: UnidadMedida
    
    getUuidadMedida():UnidadMedida{
        return this.unidadMedida;
    }
 setUnidadMedida(unidadMedida:UnidadMedida):void{
    this.unidadMedida=unidadMedida;
 }

    getProductoAlimentoID():Number{
        return this.productoAlimentoID;
    }
    setProductoAlimentoID(productoAlimentoID:Number):void{
        this.productoAlimentoID=productoAlimentoID;
    }
    getProductoAlimentoUUID():String{
        return this.productoAlimentoUUID;
    }
    setProductoAlimentoUUID(productoAlimentoUUID:String):void{
        this.productoAlimentoUUID=productoAlimentoUUID;
    }
    getCantidadMinima():Number{
        return this.cantidadMinima;
    }
    setCantidadMinima(cantidadMinima:Number):void{
        this.cantidadMinima=cantidadMinima;
    }

    getCantidadMaxima():Number{
        return this.cantidadMaxima;
    }
    setCantidadMaxima(cantidadMaxima:Number):void{
        this.cantidadMaxima=cantidadMaxima;
    }
    getProducto():Producto{
        return this.producto;
    }
    setProducto(producto:Producto):void{
        this.producto=producto;
    }
    getAlimento():Alimento{
        return this.alimento;
    }
    setAlimento(alimento:Alimento):void{
        this.alimento=alimento;
    }
    
}