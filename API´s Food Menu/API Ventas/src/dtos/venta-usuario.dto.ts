import { VentaDTO } from "@dto/venta.dto";
import { UsuarioDTO } from "@dto/usuario.dto";

/**
 * DTO que representa la relación entre una venta y un usuario.
 * 
 * Contiene el UUID de la relación y referencias opcionales a
 * los objetos de la venta y del usuario asociados.
 */
class VentaUsuarioDTO {
  /** UUID único de la relación venta-usuario */
  ventaUsuarioUuid: String;

  /** Objeto de la venta asociada (opcional) */
  venta?: VentaDTO;

  /** Objeto del usuario asociado (opcional) */
  usuario?: UsuarioDTO;
}

export { VentaUsuarioDTO };
