/**
 * Importacion de la entidad Direccion
 */

import { Direccion } from "@entity/direccion.entity"
/**
 * Interfaz que define las operaciones de acceso a datos para la entidad Direccion
 */
export interface DireccionIDAO {

    /** 
     * Método para obtener todas las direcciones
     * @return Un arreglo de objetos Direccion
     */
    getDirecciones(): Promise<Direccion[]>;

    /** 
     * Método para obtener una direccion por su ID
     * @param direccionId ID de la direccion a buscar
     * @return Un objeto Direccion si se encuentra, de lo contrario retorna null
     */
    getDireccionById(direccionId: Number): Promise<Direccion>;

    /** 
     * Método para agregar una nueva direccion
     * @param direccion Objeto Direccion a agregar
     * @return true si la operación fue exitosa, de lo contrario false
     */
    agregarDireccion(direccion: Direccion): Promise<Boolean>;

    /** 
     * Método para eliminar una direccion por su ID
     * @param direccionId ID de la direccion a eliminar
     * @return true si la operación fue exitosa, de lo contrario false
     */
    eliminarDireccion(direccionId: Number): Promise<Boolean>;

    /** 
     * Método para actualizar una direccion existente
     * @param direccion Objeto Direccion con los datos actualizados
     * @return true si la operación fue exitosa, de lo contrario false
     */
    actualizarDireccion(direccion: Direccion): Promise<Boolean>;
}
