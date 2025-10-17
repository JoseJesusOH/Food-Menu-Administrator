// Importa el DTO que representa la estructura de una dirección
import { DireccionDTO } from "@dto/direccion.dto";

/**
 * Interfaz que define las operaciones del servicio de direcciones.
 * Contiene los métodos necesarios para gestionar la información
 * de las direcciones dentro del sistema (operaciones CRUD).
 */
export interface DireccionIServicio {

    /**
     * Obtiene la lista completa de direcciones registradas.
     * @returns {Promise<DireccionDTO[]>} Lista de objetos DireccionDTO con los datos de las direcciones.
     */
    getDirecciones(): Promise<DireccionDTO[]>;

    /**
     * Obtiene una dirección específica por su identificador numérico.
     * @param {Number} direcionId - Identificador único de la dirección.
     * @returns {Promise<DireccionDTO>} Objeto DireccionDTO con la información de la dirección encontrada.
     */
    getDireccionById(direcionId: Number): Promise<DireccionDTO>;

    /**
     * Obtiene una dirección específica por su UUID.
     * @param {String} direccionUuid - UUID único de la dirección.
     * @returns {Promise<DireccionDTO>} Objeto DireccionDTO con los datos de la dirección asociada al UUID.
     */
    getDireccionByUuid(direccionUuid: String): Promise<DireccionDTO>;

    /**
     * Agrega una nueva dirección al sistema.
     * @param {DireccionDTO} direccionDTO - Objeto con los datos de la dirección a registrar.
     * @returns {Promise<Boolean>} Verdadero si la dirección fue agregada correctamente, falso en caso contrario.
     */
    agregarDireccion(direccionDTO: DireccionDTO): Promise<Boolean>;

    /**
     * Elimina una dirección del sistema mediante su identificador numérico.
     * @param {String} direccionUuid - Identificador único de la dirección a eliminar.
     * @returns {Promise<Boolean>} Verdadero si la eliminación fue exitosa, falso si no se pudo eliminar.
     */
    eliminarDireccionByUuid(direccionUuid: String): Promise<Boolean>;

    /**
     * Actualiza los datos de una dirección existente.
     * @param {DireccionDTO} direccionDTO - Objeto con los datos actualizados de la dirección.
     * @returns {Promise<Boolean>} Verdadero si la actualización fue exitosa, falso en caso contrario.
     */
    actualizarDireccion(direccionDTO: DireccionDTO): Promise<Boolean>;
}
