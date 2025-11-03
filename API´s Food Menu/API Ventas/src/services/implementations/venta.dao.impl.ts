import { VentaDTO } from "@dto/venta.dto";
import { VentaIService } from "@service.dao/venta.dao";

class VentaService implements VentaIService{
    getVentas(): Promise<VentaDTO[]> {
        throw new Error("Method not implemented.");
    }
    getVentaByUuid(ventaUuid: String): Promise<VentaDTO> {
        throw new Error("Method not implemented.");
    }
    agregarVenta(ventaDTO: VentaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarVenta(ventaUuid: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarVenta(ventaDTO: VentaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}