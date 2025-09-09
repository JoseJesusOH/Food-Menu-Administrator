import {CentroProductivo} from "../../modelos/centro-productivo"
export interface CentroProductivoIDAO{
    getCentrosProductivos():CentroProductivo[];
    getCentroProductivoById(centroProductivoId:Number):CentroProductivo;
    getCentroProductivoByUuid(centroProductivoUuid:String):CentroProductivo;
    agregarCentroProductivo(centroProductivo:CentroProductivo):Boolean;
    actualizarCentroProductivo(centroProductivo:CentroProductivo):Boolean;
    eliminarCentroProductivoById(centroProductivoId:Number):Boolean;
}