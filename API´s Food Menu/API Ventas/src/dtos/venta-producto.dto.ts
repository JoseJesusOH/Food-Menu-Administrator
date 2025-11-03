import { ProductoDTO } from "@dto/producto.dto";
import { VentaDTO } from "@dto/venta.dto";

/**
 * DTO que representa un detalle de venta asociado a un producto.
 * 
 * Contiene la información del producto vendido dentro de una venta,
 * incluyendo cantidades, totales y referencias opcionales al producto
 * y a la venta asociada.
 */
class VentaProductoDTO {
  /** UUID único del detalle de venta */
  ventaProductoUuid: String;

  /** Cantidad de unidades vendidas del producto */
  cantidad: Number;

  /** Subtotal correspondiente al producto */
  subtotal: Number;

  /** IVA aplicado al producto */
  iva: Number;

  /** Total final del producto incluyendo IVA */
  total: Number;

  /** Información del producto asociado (opcional) */
  producto?: ProductoDTO;

  /** Información de la venta asociada (opcional) */
  venta?: VentaDTO;
}

export { VentaProductoDTO };
