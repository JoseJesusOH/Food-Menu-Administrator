import { PermisoCategoria } from "../../modelos/permisoCategoria";
import {PermisoCategoriaIDAO} from "../interfaces/permisoCategoriaIDAO"
export class PermisoCategoriaDAO implements PermisoCategoriaIDAO{
    getPermisoCategorias(): PermisoCategoria[] {
        throw new Error("Method not implemented.");
    }
    getPermisoCategoriaByID(permisoCategoriaID: Number): PermisoCategoria {
        throw new Error("Method not implemented.");
    }
    agregarPermisoCategoria(permisoCategoria: PermisoCategoria): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarPermisoCategoriaByID(permisoCategoriaID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarPermisoCategoria(permisoCategoria: PermisoCategoria): Boolean {
        throw new Error("Method not implemented.");
    }
    
}