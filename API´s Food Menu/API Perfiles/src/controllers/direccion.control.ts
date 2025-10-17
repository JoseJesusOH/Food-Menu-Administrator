// Importa la entidad Direccion que representa la estructura del modelo en la capa de persistencia
import { Direccion } from "@entity/direccion.entity"

// Importa la utilidad LoggerAPI para registrar logs e información sobre la ejecución del sistema
import { LoggerAPI } from "@utility/logger"

// Importa la función plainToInstance de class-transformer para convertir objetos planos en instancias de clases
import { plainToInstance } from "class-transformer"

// Importa la implementación del servicio de direcciones que contiene la lógica de negocio
import { DireccionServicio } from "servicies/implementations/direccion.servicio.impl"

// Importa la interfaz que define las operaciones que debe cumplir el servicio de direcciones
import { DireccionIServicio } from "servicies/interfaces/direccion.servicio"

/**
 * Controlador encargado de manejar las peticiones HTTP relacionadas con las direcciones.
 * Se comunica con el servicio de direcciones (DireccionServicio) para realizar las operaciones
 * de creación, obtención, actualización y eliminación de direcciones.
 */
class DireccionControl {

    /** Instancia del servicio de direcciones que contiene la lógica de negocio */
    direccionServicio: DireccionIServicio = new DireccionServicio()

    /**
     * Crea una nueva dirección en el sistema.
     * Toma los datos de la dirección desde req.body y los convierte en una entidad antes de enviarlos al servicio.
     * Si la operación es exitosa, devuelve un mensaje de confirmación; de lo contrario, un mensaje de error.
     */
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

    /**
     * Obtiene todas las direcciones registradas en el sistema.
     * Si se encuentran direcciones, las devuelve en el cuerpo de la respuesta.
     * En caso contrario, retorna un mensaje indicando que no existen registros.
     */
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

    /**
     * Obtiene una dirección específica por su UUID.
     * El UUID se toma desde los parámetros de la solicitud (req.params.uuid).
     * Devuelve la dirección encontrada o un mensaje indicando que no existe.
     */
    obtenerDireccionByUuid = async (req, res, next) => {
        const { uuid } = req.params
        LoggerAPI.info(`Se inicia el control respectivo para obtener la dirección con UUID: ${uuid}`)
        try {
            const direccion = await this.direccionServicio.getDireccionByUuid(uuid)

            if (direccion) {
                return res.status(200).send(direccion)
            } else {
                return res.status(404).send({ message: `No se ha encontrado la dirección con UUID ${uuid}` })
            }

        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al obtener la dirección con UUID ${uuid}: ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" })
        }
    }

    /**
     * Actualiza la información de una dirección existente.
     * Los datos actualizados se reciben desde req.body.
     * Devuelve un mensaje de éxito si la actualización se realizó correctamente.
     */
    actualizarDireccion = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para actualizar una dirección")
        try {
            let direccion = plainToInstance(Direccion, req.body)
            const direccionResult = await this.direccionServicio.actualizarDireccion(direccion)

            if (direccionResult) {
                return res.status(200).send({ message: "La dirección ha sido actualizada correctamente" })
            } else {
                return res.status(404).send({ message: "No se ha podido actualizar la dirección" })
            }

        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al actualizar la dirección: ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" })
        }
    }

    /**
     * Elimina una dirección del sistema según su UUID.
     * El UUID se recibe desde los parámetros de la solicitud (req.params.direccionUuid).
     * Devuelve un mensaje indicando el resultado de la operación.
     */
    eliminarDireccionByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control respectivo para eliminar una dirección")
        try {
            const { direccionUuid } = req.params
            const resultado = await this.direccionServicio.eliminarDireccionByUuid(direccionUuid)

            if (resultado) {
                return res.status(200).send({ message: `La dirección con UUID ${direccionUuid} ha sido eliminada correctamente` })
            } else {
                return res.status(404).send({ message: `No se encontró o no se pudo eliminar la dirección con UUID ${direccionUuid}` })
            }

        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al eliminar la dirección: ${error}`)
            return res.status(500).send({ message: "Error interno del servidor" })
        }
    }
}

// Exporta la clase DireccionControl como parte del módulo
export default { DireccionControl }
