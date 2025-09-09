import { Compania } from "../../modelos/compania"
export interface CompaniaIDAO {
  getCompanias(): Compania[];
  getCompaniaById(companiaID: Number): Compania;
  getCompaniaByUuid(companiaUuid: String): Compania;
  agregarCompania(compania: Compania): Boolean;
  eliminarCompaniaById(companiaId: Number): Boolean;
  actualizarCompania(compania: Compania): Boolean;
} 