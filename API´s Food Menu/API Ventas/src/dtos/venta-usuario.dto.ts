import { VentaDTO } from "@dto/venta.dto";
import { UsuarioDTO } from "@dto/usuario.dto";

class VentaUsuarioDTO {
  ventaUsuarioUuid: String;

  venta?: VentaDTO;
  usuario?: UsuarioDTO;
}

export { VentaUsuarioDTO };
