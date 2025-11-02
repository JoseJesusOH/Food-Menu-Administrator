import { VentaProductoDTO } from "@dto/venta-producto.dto";
import { VentaUsuarioDTO } from "@dto/venta-usuario.dto"

class VentaDTO {
  ventaUuid: String;
  fecha: Date;
  total: Number;
  hora: String;

  ventaProductos?: VentaProductoDTO[];
  ventaUsuarios?: VentaUsuarioDTO[];
}

export { VentaDTO };
