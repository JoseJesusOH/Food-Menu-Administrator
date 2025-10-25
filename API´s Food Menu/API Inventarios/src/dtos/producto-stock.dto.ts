import { ProductoDTO } from "@dto/producto.dto";

export class ProductoStockDTO {
    productoStockUuid: String;
    cantidadMinima: Number;
    cantidadMaxima: Number;
    stockActual: Number;
    producto: ProductoDTO;
}
