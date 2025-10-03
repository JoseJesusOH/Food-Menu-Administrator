/**
 * Importaciones del DTO requerido
 */
import {AlimentoDTO} from "@dto/alimento.dto"
/**
 * Interfaz que implementara los servicios de Alimento
 */
interface AlimentoIServicio{
    /**
     * Servicio para obtener todos los alimentos 
     * @returns Alimentos del Sistema 
     */
   obtenerAlimentos():Promise<AlimentoDTO[]>;
   /**
    * Servicio para agregar un alimento
    * @param alimentoDTO Alimento a Registrar
    * @returns True si el alimento fue registrado correctamente , false si este no fue registrado
    */
   agregarAlimento(alimentoDTO: AlimentoDTO): Promise<AlimentoDTO>;
    /**
     * Servicio para la eliminación de un alimento
     * @param alimentoUuid UUID Alimento a eliminar
     * @returns True si el alimento fue eliminado, false en caso contrario
     */
   eliminar(alimentoId: Number): Promise<Boolean>;
   /**
    * Servicio para obtener un alimento por UUID
    * @param alimentoUuid UUID Alimento a Obtener
    * @returns Alimento encontrado, null en caso contrario
    */
   obtenerAlimentoByUuid(alimentoUuid:Number):Promise<AlimentoDTO>;
}
/**
 * Exportacion de la interfaz
 */
export { AlimentoIServicio
}