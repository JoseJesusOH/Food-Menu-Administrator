/** 
 * Importación de la entidad Requerida
 */
import { Alimento } from "@entity/alimento.entity"

/**
 * Interface de Acceso a Datos para la entidad Alimento
 */
export interface AlimentoIDAO {
    /** 1
     * Obtiene la lista completa de alimentos almacenados.
     * @returns Un arreglo con todos los alimentos.
     */
    getAlimentos(): Promise<Alimento[]>;

    /** 2
     * Busca un alimento a partir de su identificador numérico.
     * @param alimentoId Identificador numérico del alimento.
     * @returns El alimento correspondiente al ID, o null si no existe.
     */
    getAlimentoById(alimentoId: Number): Promise<Alimento>;

    /** 3
     * Busca un alimento a partir de su identificador único (UUID).
     * @param alimentoUuid Identificador UUID del alimento.
     * @returns El alimento correspondiente al UUID, o null si no existe.
     */
    getAlimentByUuid(alimentoUuid: String): Promise<Alimento>;

    /** 4
     * Elimina un alimento usando su identificador numérico.
     * @param alimentoId Identificador numérico del alimento.
     * @returns True si el alimento fue eliminado, False en caso contrario.
     */
    eliminarAlimentoById(alimentoId: Number): Promise<Boolean>;

    /** 5
     * Actualiza la información de un alimento existente.
     * @param alimento Objeto de tipo Alimento con los nuevos valores.
     * @returns True si la actualización fue exitosa, False en caso contrario.
     */
    actualizarAlimento(alimento: Alimento): Promise<Boolean>;

    /** 6
     * Agrega un nuevo alimento a la base de datos.
     * @param alimento Objeto de tipo Alimento a agregar.
     * @returns True si la inserción fue exitosa, False en caso contrario.
     */
    agregarAlimento(alimento: Alimento): Promise<Boolean>;
}