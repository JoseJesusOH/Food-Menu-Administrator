// Importa el DTO que representa la estructura de una persona
import { PersonaDTO } from "@dto/persona.dto";

/**
 * Interfaz que define las operaciones del servicio de personas.
 * Contiene los métodos necesarios para gestionar la información
 * de las personas dentro del sistema (operaciones CRUD).
 */
export interface PersonaIServicio {

    /**
     * Obtiene la lista completa de personas registradas.
     * @returns {Promise<PersonaDTO[]>} Lista de objetos PersonaDTO con los datos de las personas.
     */
    getPersonas(): Promise<PersonaDTO[]>;

    /**
     * Obtiene una persona específica por su identificador numérico.
     * @param {Number} personaId - Identificador único de la persona.
     * @returns {Promise<PersonaDTO>} Objeto PersonaDTO con la información de la persona encontrada.
     */
    getPersonaById(personaId: Number): Promise<PersonaDTO>;

    /**
     * Obtiene una persona específica por su UUID.
     * @param {String} personaUuid - UUID único de la persona.
     * @returns {Promise<PersonaDTO>} Objeto PersonaDTO con los datos de la persona asociada al UUID.
     */
    getPersonaByUuid(personaUuid: String): Promise<PersonaDTO>;

    /**
     * Agrega una nueva persona al sistema.
     * @param {PersonaDTO} personaDTO - Objeto con los datos de la persona a registrar.
     * @returns {Promise<Boolean>} Verdadero si la persona fue agregada correctamente, falso en caso contrario.
     */
    agregarPersona(personaDTO: PersonaDTO): Promise<Boolean>;

    /**
     * Actualiza los datos de una persona existente.
     * @param {PersonaDTO} personaDTO - Objeto con los datos actualizados de la persona.
     * @returns {Promise<Boolean>} Verdadero si la actualización fue exitosa, falso en caso contrario.
     */
    actualizarPersona(personaDTO: PersonaDTO): Promise<Boolean>;

    /**
     * Elimina una persona del sistema mediante su identificador numérico.
     * @param {String} personaUuid - Identificador único de la persona a eliminar.
     * @returns {Promise<Boolean>} Verdadero si la eliminación fue exitosa, falso si no se pudo eliminar.
     */
    eliminarPersonaByUuid(personaUuid: String): Promise<Boolean>;
}
