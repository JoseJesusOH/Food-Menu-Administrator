import { VentaDTO } from "@dto/venta.dto";

/**
 * Interfaz que define las operaciones del servicio relacionadas con las ventas.
 * 
 * Proporciona métodos para gestionar las transacciones de venta,
 * incluyendo creación, consulta, actualización y eliminación.
 */
interface VentaIService {
    /**
     * Obtiene todas las ventas registradas en el sistema.
     * @returns Una promesa que resuelve con una lista de ventas.
     */
    getVentas(): Promise<VentaDTO[]>;

    /**
     * Busca una venta específica a partir de su UUID.
     * @param ventaUuid UUID de la venta a buscar.
     * @returns Una promesa que resuelve con la venta encontrada.
     */
    getVentaByUuid(ventaUuid: String): Promise<VentaDTO>;

    /**
     * Registra una nueva venta en el sistema.
     * @param ventaDTO Objeto que contiene los datos de la venta a registrar.
     * @returns Una promesa que resuelve con `true` si la venta se agregó correctamente.
     */
    agregarVenta(ventaDTO: VentaDTO): Promise<Boolean>;

    /**
     * Elimina una venta por su UUID.
     * @param ventaUuid UUID de la venta a eliminar.
     * @returns Una promesa que resuelve con `true` si la venta fue eliminada correctamente.
     */
    eliminarVenta(ventaUuid: String): Promise<Boolean>;

    /**
     * Actualiza la información de una venta existente.
     * @param ventaDTO Objeto con los datos actualizados de la venta.
     * @returns Una promesa que resuelve con `true` si la actualización fue exitosa.
     */
    actualizarVenta(ventaDTO: VentaDTO): Promise<Boolean>;
}

export { VentaIService };
