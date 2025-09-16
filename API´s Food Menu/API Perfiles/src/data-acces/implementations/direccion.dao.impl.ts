import { Direccion } from "@entity/direccion.entity"
import {DireccionIDAO} from "@data.dao/direccion.dao"
export class DireccionDAO implements DireccionIDAO{
    getDirecciones(): Direccion[] {
        throw new Error("Method not implemented.");
    }
    getDireccionByID(direccionID: Number): Direccion {
        throw new Error("Method not implemented.");
    }
    agregarDireccion(direccion: Direccion): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarDireccion(direccionID: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarDireccion(direccion: Direccion): Boolean {
        throw new Error("Method not implemented.");
    }
    
}