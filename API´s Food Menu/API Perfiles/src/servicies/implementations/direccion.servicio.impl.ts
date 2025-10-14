import { DireccionDTO } from "@dto/direccion.dto";
import { DireccionIServicio } from "servicies/interfaces/direccion.servicio";

export class DireccionServicio implements DireccionIServicio{
    getDirecciones(): Promise<DireccionDTO[]> {
        throw new Error("Method not implemented.");
    }
    getDireccionById(direcionId: Number): Promise<DireccionDTO> {
        throw new Error("Method not implemented.");
    }
    getDireccionByUuid(direccionUuid: String): Promise<DireccionDTO> {
        throw new Error("Method not implemented.");
    }
    agregarDireccion(direccionDTO: DireccionDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarDireccionById(direccionId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarDireccion(direccionDTO: DireccionDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    
}