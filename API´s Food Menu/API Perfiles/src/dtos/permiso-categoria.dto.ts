 import { CategoriaDTO } from "@dto/categoria.dto";
import { PermisoDTO } from "@dto/permiso.dto";
export class PermisoCategoriaDTO {
     permisoCategoriaUuid: String;
     categoria: CategoriaDTO;
     permiso: PermisoDTO;
}