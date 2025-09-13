/**
 * Interfaz para el acceso a datos de los centros productivos
 * 
 */
import { CentroProductivo } from "@entity/centro-productivo.entity"
/**
 * Interface de Acceso a datos para el modelo Centro Productivo
 */
export interface CentroProductivoIDAO {
    /**
     * Obtiene todos los centros productivos
     * @returns Arreglo con todos los centros productivos
     */
    getCentrosProductivos(): CentroProductivo[];
    /**
     * Obtiene un centro productivo por su ID
     * @param centroProductivoId ID del centro productivo a buscar
     * @return CentroProductivo encontrado
     */
    getCentroProductivoById(centroProductivoId: Number): CentroProductivo;
    /**
     * Obtiene un centro productivo por su UUID
     * @param centroProductivoUuid UUID del centro productivo a buscar
     * @returns CentroProductivo encontrado
     */
    getCentroProductivoByUuid(centroProductivoUuid: String): CentroProductivo;
   
    /**
     * Agrega un nuevo centro productivo a la base de datos
     * @param centroProductivo Centro productivo a agregar
     * @returns Boolean indicando si se agrego o no el centro productivo
     */
    agregarCentroProductivo(centroProductivo: CentroProductivo): Boolean;
    /**
     *  Actualiza un centro productivo en la base de datos
     * @param centroProductivo Centro productivo a actualizar
     * @returns Boolean indicando si se actualizo o no el centro productivo
     */
    actualizarCentroProductivo(centroProductivo: CentroProductivo): Boolean;
    /**
     * Elimina un centro productivo de la base de datos
     * @param centroProductivoId ID del centro productivo a eliminar
     * @returns Boolean indicando si se elimino o no el centro productivo   
     */
    eliminarCentroProductivoById(centroProductivoId: Number): Boolean;
}