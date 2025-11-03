import { VentaDTO } from "@dto/venta.dto";

interface VentaIService {
    getVentas(): Promise<VentaDTO[]>;
    getVentaByUuid(ventaUuid: String): Promise<VentaDTO>;
    agregarVenta(ventaDTO: VentaDTO): Promise<Boolean>;
    eliminarVenta(ventaUuid: String): Promise<Boolean>;
    actualizarVenta(ventaDTO: VentaDTO): Promise<Boolean>;
}

export { VentaIService };
