import {CentroProductivo} from "@entity/centro-productivo.entity"
export interface CentroProductivoIDAO{
    getCentrosProductivos():CentroProductivo[];
    getCentroProductivoById(centroProductivoId:Number):CentroProductivo;
    getCentroProductivoByUuid(centroProductivoUuid:String):CentroProductivo;
    agregarCentroProductivo(centroProductivo:CentroProductivo):Boolean;
    actualizarCentroProductivo(centroProductivo:CentroProductivo):Boolean;
    eliminarCentroProductivoById(centroProductivoId:Number):Boolean;
}