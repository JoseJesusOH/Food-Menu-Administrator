import {Direccion} from "../../modelos/direccion"
export interface DireccionIDAO {
    getDirecciones():Direccion[];
    getDireccionByID(direccionID:Number):Direccion;
    agregarDireccion(direccion:Direccion):Boolean;
    eliminarDireccion(direccionID:Number):Boolean;
    actualizarDireccion(direccion:Direccion):Boolean;
}
