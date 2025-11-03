import { VentaProductoDTO } from "@dto/venta-producto.dto";
import { VentaUsuarioDTO } from "@dto/venta-usuario.dto";

/**
 * DTO que representa la información de una venta.
 * 
 * Contiene los datos principales de la venta y sus relaciones con
 * productos vendidos y usuarios asociados.
 */
class VentaDTO {
  /** UUID único de la venta */
  ventaUuid: String;

  /** Fecha en que se realizó la venta */
  fecha: Date;

  /** Total de la venta, calculado sumando productos y otros cargos */
  total: Number;

  /** Hora en que se realizó la venta */
  hora: String;

  /** Lista de productos asociados a esta venta */
  ventaProductos?: VentaProductoDTO[];

  /** Lista de usuarios asociados a esta venta */
  ventaUsuarios?: VentaUsuarioDTO[];
}

export { VentaDTO };
