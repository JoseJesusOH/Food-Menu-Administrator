import { VentaProductoIDAO } from "@data.dao/venta-producto.dao";
import { VentaProducto } from "@entity/venta-producto.entity";

class VentaProductoDAO implements VentaProductoIDAO{
    getVentaProductoByID(ventaProductoID: number): VentaProducto {
        throw new Error("Method not implemented.");
    }
    getVentaProductoByUUID(ventaProductoUUID: string): VentaProducto {
        throw new Error("Method not implemented.");
    }
    getVentaProductoByIDVenta(ventaID: number): VentaProducto[] {
        throw new Error("Method not implemented.");
    }
    agregarVentaProducto(ventaProducto: VentaProducto): boolean {
        throw new Error("Method not implemented.");
    }
    actualizarVentaProducto(ventaProducto: VentaProducto): boolean {
        throw new Error("Method not implemented.");
    }
    eliminarVentaProductoByID(ventaProductoID: number): boolean {
        throw new Error("Method not implemented.");
    }
    
}