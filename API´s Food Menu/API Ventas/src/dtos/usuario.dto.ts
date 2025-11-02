/**
 * DTO que representa la información de un usuario.
 * 
 * Contiene únicamente los datos esenciales para transferencia,
 * como el UUID único y el nombre del usuario.
 */
class UsuarioDTO {
  /** UUID único del usuario */
  usuarioUuid: String;

  /** Nombre completo del usuario */
  nombre: String;
}

export { UsuarioDTO };
