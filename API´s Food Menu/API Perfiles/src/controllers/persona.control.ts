/**
 * Importa la utilidad para el registro de logs y mensajes del sistema.
 */
import { Persona } from "@entity/persona.entity";
import { LoggerAPI } from "@utility/logger"
import { plainToInstance } from "class-transformer";

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

    /**
      * Obtiene una persona específica por su UUID.
      * El UUID se recibe desde los parámetros de la solicitud (req.params).
    */
    getPersonaByUuid = async (req, res, next) => {
        const { uuid } = req.params;
        LoggerAPI.info(`Se inicia control para obtener la persona con UUID: ${uuid}`);
        try {
            const persona = await this.personaServicio.getPersonaByUuid(uuid);

            if (persona) {
                return res.status(200).send(persona);
            } else {
                return res.status(404).send({ message: `No se encontró la persona con UUID ${uuid}` });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en getPersonaByUuid en PersonaControl; ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }
        /**
     * Agrega una nueva persona.
     * Los datos de la persona se reciben desde el cuerpo de la solicitud (req.body).
     */
    agregarPersona = async (req, res, next) => {
        LoggerAPI.info("Se inicia control para agregar una persona");
        try {
            const persona = plainToInstance(Persona, req.body);
            const resultado = await this.personaServicio.agregarPersona(persona);

            if (resultado) {
                return res.status(200).send({ message: "La persona ha sido registrada correctamente" });
            } else {
                return res.status(404).send({ message: "No se ha podido registrar la persona" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en agregarPersona en PersonaControl; ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }
    
       /**
     * Actualiza la información de una persona existente.
     * Los datos actualizados se reciben desde el cuerpo de la solicitud (req.body).
     */
    actualizarPersona = async (req, res, next) => {
        LoggerAPI.info("Se inicia control para actualizar una persona");
        try {
            const persona = plainToInstance(Persona, req.body);
            const resultado = await this.personaServicio.actualizarPersona(persona);
            if (resultado) {
                return res.status(200).send({ message: "La persona ha sido actualizada correctamente" });
            } else {
                return res.status(404).send({ message: "No se ha podido actualizar la persona" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en actualizarPersona en PersonaControl; ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }
        /**
     * Elimina una persona existente a partir de su UUID.
     * El UUID se recibe desde los parámetros de la solicitud (req.params).
     */
    eliminarPersonaByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inicia control para eliminar una persona por UUID");
        try {
            const { personaUuid } = req.params;
            const resultado = await this.personaServicio.eliminarPersonaByUuid(personaUuid);

            if (resultado) {
                return res.status(200).send({ message: `La persona con UUID ${personaUuid} ha sido eliminada correctamente` });
            } else {
                return res.status(404).send({ message: `No se ha encontrado o no se pudo eliminar la persona con UUID ${personaUuid}` });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en eliminarPersonaByUuid en PersonaControl; ${error}`);
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }


}

export  { PersonaControl }
