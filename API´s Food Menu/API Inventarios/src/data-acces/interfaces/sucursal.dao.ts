import { Sucursal } from "@entity/sucursal.entity"

export interface SucursalIDAO {
    getSucursales(): Promise<Sucursal[]>;
    getSucursalById(sucursalId: Number): Promise<Sucursal>;
    getSucursalByUuid(sucursalUuid: String): Promise<Sucursal>;
    eliminarSucursalById(sucursalId: Number): Promise<Boolean>;
    actualizarSucursal(sucursal: Sucursal): Promise<Boolean>;
    agregarSucursal(sucursal: Sucursal): Promise<Boolean>;
}
