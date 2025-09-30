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
   obtenerAlimentos():AlimentoDTO;
   /**
    * Servicio para agregar un alimento
    * @param alimentoDTO Alimento a Registrar
    * @returns True si el alimento fue registrado correctamente , false si este no fue registrado
    */
   agregarAlimento(alimentoDTO: AlimentoDTO): AlimentoDTO;
    /**
     * Servicio para la eliminación de un alimento
     * @param alimentoId ID Alimento a eliminar
     * @returns True si el alimento fue eliminado, false en caso contrario
     */
   eliminar(alimentoId: Number): Boolean;
   /**
    * Servicio para obtener un alimento por ID
    * @param alimentoId ID Alimento a Obtener
    * @returns Alimento encontrado, null en caso contrario
    */
   obtenerAlimentoById(alimentoId:Number):AlimentoDTO;
}
/**
 * Exportacion de la interfaz
 */
export { AlimentoIServicio
}