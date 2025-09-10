import { CentroProductivo } from "../../entities/centro-productivo.entity";
import { CentroProductivoIDAO } from "../interfaces/centro-productivo.dao";
export class CentroProductivoDAO implements CentroProductivoIDAO{
    getCentrosProductivos(): CentroProductivo[] {
        throw new Error("Method not implemented.");
    }
    getCentroProductivoById(centroProductivoId: Number): CentroProductivo {
        throw new Error("Method not implemented.");
    }
    getCentroProductivoByUuid(centroProductivoUuid: String): CentroProductivo {
        throw new Error("Method not implemented.");
    }
    agregarCentroProductivo(centroProductivo: CentroProductivo): Boolean {
        throw new Error("Method not implemented.");
    }
    actualizarCentroProductivo(centroProductivo: CentroProductivo): Boolean {
        throw new Error("Method not implemented.");
    }
    eliminarCentroProductivoById(centroProductivoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
}