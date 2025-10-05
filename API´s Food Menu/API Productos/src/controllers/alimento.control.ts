import { AlimentoIServicio } from "@service.dao/alimento.servicio"
import { AlimentoServicio } from "@service.impl/alimento.servicio.impl"
import { LoggerAPI } from "@utility/logger"

class AlimentoControl {
    alimentoServicio: AlimentoIServicio = new AlimentoServicio()
    /**
     * Crea un nuevo alimento en la base de datos.
     * Normalmente toma los datos del alimento desde req.body
     * y responde con el alimento creado o un mensaje de éxito.
     */
    agregarAlimento = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control para agregar un nuevo alimento al sistema.");
        try {
            const alimentoNuevo = req.body; 
            const alimentoCreado = await this.alimentoServicio.agregarAlimento(alimentoNuevo);
            if (alimentoCreado) { 
                return res.status(201).send({ message: "Alimento creado exitosamente", alimento: alimentoCreado });
            } else {
                return res.status(400).send({ message: "No se pudo crear el alimento" });
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al agregar un nuevo alimento en control error; ${error}`)
            throw error;
        }
    }

    /**
     * Actualiza un alimento existente.
     * Suele recibir el id del alimento en req.params.id y
     * los nuevos datos en req.body.
     */
    actualizarAlimento = async (req, res, next) => {
    }

    /**
     * Obtiene todos los alimentos.
     * No suele recibir parámetros (salvo filtros opcionales en req.query)
     * y responde con un array de alimentos.
     */
    obtenerAlimentos = async (req, res, next) => {
        LoggerAPI.info("Se inicia el control para obtener los alimentos del sistema.");
        try {
            const alimentos = await this.alimentoServicio.obtenerAlimentos();
            if (alimentos.length > 0) {
                return res.status(202).send({ alimentos })

            } else {
                return res.status(404).send({ message: "No hay alimento existentes existentes" })

            }
        } catch (error) {
            LoggerAPI.warn(`Se ha presentado un error al obtener los alimentos en control error; ${error}`)
            throw error;
        }
    }

    /**
     * Obtiene un alimento específico por su id.
     * El id vendría en req.params.id.
     */
    obtenerAlimentoById = async (req, res, next) => {
    }

    /**
     * Elimina un alimento de la base de datos.
     * El id del alimento se suele recibir en req.params.id.
     */
    eliminarAlimento = async (req, res, next) => {
    }
}

export { AlimentoControl }
