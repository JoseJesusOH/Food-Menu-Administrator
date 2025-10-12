import { PermisoCategoriaDTO } from "@dto/permiso-categoria.dto";
export class PermisoDTO {
     permisoUuid: String;
     nombre: String;
     permisoCategorias: PermisoCategoriaDTO[];
}