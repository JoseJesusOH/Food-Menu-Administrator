import { ProductoDTO } from "@dto/producto.dto";
import { VentaDTO } from "@dto/venta.dto";

class VentaProductoDTO {
  ventaProductoUuid: String;
  cantidad: Number;
  subtotal: Number;
  iva: Number;
  total: Number;

  producto?: ProductoDTO;
  venta?: VentaDTO;
}

export { VentaProductoDTO };
