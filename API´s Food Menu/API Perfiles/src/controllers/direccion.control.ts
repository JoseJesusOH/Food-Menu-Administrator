import { Direccion } from "@entity/direccion.entity"
import { LoggerAPI } from "@utility/logger"
import { plainToInstance } from "class-transformer"
import { DireccionServicio } from "servicies/implementations/direccion.servicio.impl"
import { DireccionIServicio } from "servicies/interfaces/direccion.servicio"

class DireccionControl {
    direccionServicio: DireccionIServicio = new DireccionServicio()
    agregarDireccion = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para agregar una dirección")
        try {
            let direccion = plainToInstance(Direccion, req.body)
            const direccionResult = await this.direccionServicio.agregarDireccion(direccion)
            if (direccionResult) {
                return res.status(200).send({ message: `La dirección ha sido registrada` })
            } else {
                return res.status(404).send({ message: "No se ha ingresado la dirección" })
            }

        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error en agregar la dirección: ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" })
        }
    }
    
    obtenerDirecciones = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para obtener las direcciones")
        try {
            const direcciones = await this.direccionServicio.getDirecciones()

            if (direcciones && direcciones.length > 0) {
                return res.status(200).send(direcciones)
            } else {
                return res.status(404).send({ message: "No se han encontrado direcciones registradas" })
            }

        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al obtener las direcciones: ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" })
        }
    }

}
export default { DireccionControl }