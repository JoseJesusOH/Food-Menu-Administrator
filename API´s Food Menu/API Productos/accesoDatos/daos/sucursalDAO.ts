import { Sucursal } from "../../modelos/sucursal";
import { SucursalIDAO } from "../daoInterfaces/sucursalIDAO";
export class SucursalDAO implements SucursalIDAO{
    getSucursales(): Sucursal[] {
        throw new Error("Method not implemented.");
    }
    getSucursalByID(sucursalID: Number): Sucursal {
        throw new Error("Method not implemented.");
    }
    getSucursalByUUID(sucursalUUID: String): Sucursal {
        throw new Error("Method not implemented.");
    }
    eliminarSucursalByID(sucursalID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarSucursal(sucursal: Sucursal): Boolean {
        throw new Error("Method not implemented.");
    }
    agregarSucursal(sucursal: Sucursal): Boolean {
        throw new Error("Method not implemented.");
    }

}