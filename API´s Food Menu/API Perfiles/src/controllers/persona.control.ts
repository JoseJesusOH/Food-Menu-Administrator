import { LoggerAPI } from "@utility/logger"
import { PersonaServicio } from "servicies/implementations/persona.servicio.impl"
import { PersonaIServicio } from "servicies/interfaces/persona.servicio"

class PersonaControl {
    personaServicio: PersonaIServicio = new PersonaServicio()
    getPersonas = async (req, res, next) => {
        LoggerAPI.info("Se inicia control para obtener personas")
        try {
            let result = await this.personaServicio.getPersonas();
            if (result.length > 0) {
                return res.status(200).send({ personas: result });
            }
            else {
                return res.status(404).send({ message: "No hay personas existentes" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en metodo GetPersonas en PersonaControl error; ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" });
        }
    }
}

export default { PersonaControl }