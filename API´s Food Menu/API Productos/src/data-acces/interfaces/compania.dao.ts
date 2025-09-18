/**
 * Modelo Compania requerido para la interfaz
 */
import { Compania } from "@entity/compania.entity"
/**
 * Interface de Acceso a datos para el modelo Compania
 */
export interface CompaniaIDAO {
  /**
   * Obtiene todas las compañias
   * @returns Arreglo con todas las compañias
   */
  getCompanias(): Promise<Compania[]>;
  /**
   * Obtiene una compañia por su ID
   * @param companiaID ID de la compañia a buscar
   * @return Compania encontrada
   */
  getCompaniaById(companiaID: Number): Promise<Compania>;
  /**
   * Obtiene una compañia por su UUID
   * @param companiaUuid UUID de la compañia a buscar
   * @return Compania encontrada
   */
  getCompaniaByUuid(companiaUuid: String): Promise<Compania>;
  
  /**
   * Agrega una nueva compañia a la base de datos
   * @param compania Compañia a agregar
   * @returns Boolean indicando si se agrego o no la compañia 
   */
  agregarCompania(compania: Compania): Promise<Boolean>;
  
  /**
   * Elimina una compañia de la base de datos
   * @param companiaId ID de la compañia a eliminar
   * @returns Boolean indicando si se elimino o no la compañia
   */
  eliminarCompaniaById(companiaId: Number): Promise<Boolean>;
  /**
   * Actualiza una compañia en la base de datos
   * @param compania Compañia a actualizar
   * @returns Boolean indicando si se actualizo o no la compañia
   */
  actualizarCompania(compania: Compania): Promise<Boolean>;
} 