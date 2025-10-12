import { CategoriaDTO } from "@dto/categoria.dto";
import { UsuarioDTO } from "@dto/usuario.dto";
export class UsuarioCategoriaDTO {
     usuarioCategoriaUuid: String;
    usuario: UsuarioDTO;
     categoria: CategoriaDTO;
}