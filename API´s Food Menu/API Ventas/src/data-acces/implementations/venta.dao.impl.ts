import { VentaIDAO } from "@data.dao/venta.dao";
import { Venta } from "@entity/venta.entity";

class VentaDAO implements VentaIDAO{
    getVentas(): Venta[] {
        throw new Error("Method not implemented.");
    }
    getVentaByID(ventaID: number): Venta {
        throw new Error("Method not implemented.");
    }
    getVentaByUUID(ventaUUID: string): Venta {
        throw new Error("Method not implemented.");
    }
    agregarVenta(venta: Venta): boolean {
        throw new Error("Method not implemented.");
    }
    actualizarVenta(venta: Venta): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarVentaByID(ventaID: number): boolean {
        throw new Error("Method not implemented.");
    }
    
}