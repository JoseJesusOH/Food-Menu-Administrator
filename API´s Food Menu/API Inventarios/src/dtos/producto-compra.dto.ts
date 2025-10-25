import { CompraDTO } from "@dto/compra.dto";
import { ProductoDTO } from "@dto/producto.dto";

export class ProductoCompra {
    productoCompraUuid: String;
    cantidad: Number;
    total: Number;
    precioBase: Number;
    compra: CompraDTO;
    producto: ProductoDTO;
}
