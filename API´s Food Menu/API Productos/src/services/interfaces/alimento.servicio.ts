/**
 * Importaciones del DTO requerido
 */
import {AlimentoDTO} from "@dto/alimento.dto"
/**
 * Interfaz que implementara los servicios de Alimento
 */
interface IAlimentoService{
   obtenerAlimentos():AlimentoDTO;
   agregarAlimento(alimentoDTO: AlimentoDTO): AlimentoDTO;
   eliminar(alimentoId: Number): Boolean;
   obtenerAlimentoById(alimentoId:Number):AlimentoDTO;
}
/**
 * Exportacion de la interfaz
 */
export {IAlimentoService}