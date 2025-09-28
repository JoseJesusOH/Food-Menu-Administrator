class AlimentoControl {
    /**
     * Crea un nuevo alimento en la base de datos.
     * Normalmente toma los datos del alimento desde req.body
     * y responde con el alimento creado o un mensaje de éxito.
     */
    agregarAlimento = async (req, res, next) => {
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
