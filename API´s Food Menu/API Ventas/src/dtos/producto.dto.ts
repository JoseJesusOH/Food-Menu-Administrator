/**
 * DTO que representa la información de un producto.
 * 
 * Contiene los datos esenciales del producto para transferencia,
 * incluyendo UUID, nombre y precio.
 */
class ProductoDTO {
  /** UUID único del producto */
  productoUuid: String;

  /** Nombre del producto */
  nombre: String;

  /** Precio del producto */
  precio: Number;
}

export { ProductoDTO };
