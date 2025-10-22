import { SucursalIDAO } from "@data.dao/sucursal.dao";
import { Sucursal } from "@entity/sucursal.entity";

class SucursalDAO implements SucursalIDAO{
    getSucursales(): Promise<Sucursal[]> {
        throw new Error("Method not implemented.");
    }
    getSucursalById(sucursalId: Number): Promise<Sucursal> {
        throw new Error("Method not implemented.");
    }
    getSucursalByUuid(sucursalUuid: String): Promise<Sucursal> {
        throw new Error("Method not implemented.");
    }
    eliminarSucursalById(sucursalId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarSucursal(sucursal: Sucursal): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    agregarSucursal(sucursal: Sucursal): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}