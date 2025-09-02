import { Proveedor } from "../../modelos/proveedor";
import { ProveedorIDAO } from "../daoInterfaces/proveedorIDAO";
export class ProveedorDAO implements ProveedorIDAO{
    getProveedores(): Proveedor[] {
        throw new Error("Method not implemented.");
    }
    getProveedorByID(proveedorID: Number): Proveedor {
        throw new Error("Method not implemented.");
    }
    getProveedorByUUID(proveedorUUID: String): Proveedor {
        throw new Error("Method not implemented.");
    }
    agregarProveedor(proveedor: Proveedor): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarProveedor(proveedor: Proveedor): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarProveedorByID(proveedorID: Number): Boolean {
        throw new Error("Method not implemented.");
    }

}