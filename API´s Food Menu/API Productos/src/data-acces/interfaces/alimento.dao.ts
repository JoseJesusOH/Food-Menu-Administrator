/** 
 * Importación de la entidad Requerida
 */
import { Alimento } from "@entity/alimento.entity"

/**
 * Interface de Acceso a Datos para la entidad Alimento
 */
export interface AlimentoIDAO {
    /**
     * Obtiene la lista completa de alimentos almacenados.
     * @returns Un arreglo con todos los alimentos.
     */
    getAlimentos(): Alimento[];

    /**
     * Busca un alimento a partir de su identificador numérico.
     * @param alimentoId Identificador numérico del alimento.
     * @returns El alimento correspondiente al ID, o null si no existe.
     */
    getAlimentoById(alimentoId: Number): Alimento;

    /**
     * Busca un alimento a partir de su identificador único (UUID).
     * @param alimentoUuid Identificador UUID del alimento.
     * @returns El alimento correspondiente al UUID, o null si no existe.
     */
    getAlimentByUuid(alimentoUuid: String): Alimento;

    /**
     * Elimina un alimento usando su identificador numérico.
     * @param alimentoId Identificador numérico del alimento.
     * @returns True si el alimento fue eliminado, False en caso contrario.
     */
    eliminarAlimentoById(alimentoId: Number): Boolean;

    /**
     * Actualiza la información de un alimento existente.
     * @param alimento Objeto de tipo Alimento con los nuevos valores.
     * @returns True si la actualización fue exitosa, False en caso contrario.
     */
    actualizarAlimento(alimento: Alimento): boolean;

    /**
     * Agrega un nuevo alimento a la base de datos.
     * @param alimento Objeto de tipo Alimento a agregar.
     * @returns True si la inserción fue exitosa, False en caso contrario.
     */
    agregarAlimento(alimento: Alimento): Boolean;
}