/**
 * Importa la utilidad para el registro de logs y mensajes del sistema.
 */
import { LoggerAPI } from "@utility/logger"

/**
 * Importa la implementación del servicio encargado de la lógica de negocio de personas.
 */
import { PersonaServicio } from "servicies/implementations/persona.servicio.impl"

/**
 * Importa la interfaz que define las operaciones del servicio de personas.
 */
import { PersonaIServicio } from "servicies/interfaces/persona.servicio"

/**
 * Controlador responsable de gestionar las operaciones relacionadas con las personas.
 * Se comunica con la capa de servicio para ejecutar las acciones correspondientes.
 */
class PersonaControl {

    /** Instancia del servicio de personas utilizada por el controlador */
    personaServicio: PersonaIServicio = new PersonaServicio();

    /**
     * Obtiene todas las personas registradas en el sistema.
     * Retorna una lista de personas o un mensaje si no existen registros.
     */
    getPersonas = async (req, res, next) => {
        LoggerAPI.info("Se inicia control para obtener personas");
        try {
            let result = await this.personaServicio.getPersonas();
            if (result.length > 0) {
                return res.status(200).send({ personas: result });
            } else {
                return res.status(404).send({ message: "No hay personas existentes" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en metodo getPersonas en PersonaControl; ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }
}

export default { PersonaControl }
