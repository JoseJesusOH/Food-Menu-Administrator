/**
 * Modelo Compania requerido para la interfaz
 */
import { Compania } from "@entity/compania.entity"
/**
 * Interface de Acceso a datos para el modelo Compania
 */
export interface CompaniaIDAO {
  /** 1
   * Obtiene todas las compañias
   * @returns Arreglo con todas las compañias
   */
  getCompanias(): Promise<Compania[]>;
  /** 2
   * Obtiene una compañia por su ID
   * @param companiaID ID de la compañia a buscar
   * @return Compania encontrada
   */
  getCompaniaById(companiaId: Number): Promise<Compania>;
  /** 3
   * Obtiene una compañia por su UUID
   * @param companiaUuid UUID de la compañia a buscar
   * @return Compania encontrada
   */
  getCompaniaByUuid(companiaUuid: String): Promise<Compania>;
  /** 4
   * Agrega una nueva compañia a la base de datos
   * @param compania Compañia a agregar
   * @returns Boolean indicando si se agrego o no la compañia 
   */
  agregarCompania(compania: Compania): Promise<Boolean>;
  /** 5
   * Elimina una compañia de la base de datos
   * @param companiaId ID de la compañia a eliminar
   * @returns Boolean indicando si se elimino o no la compañia
   */
  eliminarCompaniaById(companiaId: Number): Promise<Boolean>;
  /** 6
   * Actualiza una compañia en la base de datos
   * @param compania Compañia a actualizar
   * @returns Boolean indicando si se actualizo o no la compañia
   */
  actualizarCompania(compania: Compania): Promise<Boolean>;
} 