import { Compania } from "../../modelos/compania";
import { ProveedorIDAO } from "../daoInterfaces/proveedorIDAO";
export class ProveedorDAO implements ProveedorIDAO{
    getProveedores(): Compania[] {
        throw new Error("Method not implemented.");
    }
    getProveedorByID(proveedorID: Number): Compania {
        throw new Error("Method not implemented.");
    }
    getProveedorByUUID(proveedorUUID: String): Compania {
        throw new Error("Method not implemented.");
    }
    agregarProveedor(proveedor: Compania): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarProveedor(proveedor: Compania): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProveedorByID(proveedorID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

}