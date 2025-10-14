import { DireccionDTO } from "@dto/direccion.dto";

export interface DireccionIServicio {
    getDirecciones():Promise<DireccionDTO[]>;
    getDireccionById(direcionId:Number):Promise<DireccionDTO>;
    getDireccionByUuid(direccionUuid:String):Promise<DireccionDTO>;
    agregarDireccion(direccionDTO:DireccionDTO):Promise<Boolean>;
    eliminarDireccionById(direccionId:Number):Promise<Boolean>;
    actualizarDireccion(direccionDTO:DireccionDTO):Promise<Boolean>;
}