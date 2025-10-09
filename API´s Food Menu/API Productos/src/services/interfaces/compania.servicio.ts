/**
 * Importacion del DTO respectivo.
 */
import { CompaniaDTO } from "@dto/compania.dto";

/**
 * Interfaz que define los métodos de un servicio para manejar entidades de compañía.
 */
interface CompaniaIServicio {
  
  /**
   * Obtiene todas las compañías disponibles.
   * @returns {Promise<CompaniaDTO[]>} Una promesa que resuelve un arreglo de CompaniaDTO.
   */
  getCompanias(): Promise<CompaniaDTO[]>;

  /**
   * Agrega una nueva compañía.
   * @param {CompaniaDTO} companiaDTO - Objeto que contiene los datos de la compañía a agregar.
   * @returns {Promise<boolean>} Una promesa que indica si la operación fue exitosa.
   */
  agregarCompania(companiaDTO: CompaniaDTO): Promise<Boolean>;

  /**
   * Actualiza los datos de una compañía existente.
   * @param {CompaniaDTO} companiaDTO - Objeto que contiene los datos actualizados de la compañía.
   * @returns {Promise<boolean>} Una promesa que indica si la actualización fue exitosa.
   */
  actualizarCompania(companiaDTO: CompaniaDTO): Promise<Boolean>;

  /**
   * Elimina una compañía por su UUID.
   * @param {string} companiaUuid - Identificador único de la compañía a eliminar.
   * @returns {Promise<boolean>} Una promesa que indica si la eliminación fue exitosa.
   */
  eliminarCompania(companiaUuid: string): Promise<Boolean>;

  /**
   * Obtiene los datos de una compañía por su UUID.
   * @param {string} companiaUuid - Identificador único de la compañía.
   * @returns {Promise<CompaniaDTO>} Una promesa que resuelve el DTO de la compañía.
   */
  getCompaniaByUuid(companiaUuid: string): Promise<CompaniaDTO>;
}

export { CompaniaIServicio };
