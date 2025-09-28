class CompaniaControl {
    /**
 * Crea una nueva compañía.
 * Normalmente toma los datos de la compañía desde req.body
 * y responde con la compañía creada o un mensaje de éxito.
 */
    agregarCompania = async (req, res, next) => {
    }
    /**
   * Elimina una compañía existente.
   * El id de la compañía se recibe en req.params.id.
   */
    eliminarCompania = async (req, res, next) => {
    }
    /**
  * Obtiene todas las compañías.
  * Suele responder con un array de compañías.
  * Puede aceptar filtros opcionales desde req.query.
  */
    obtenerCompanias = async (req, res, next) => {
    }

    /**
     * Obtiene una compañía específica por su id.
     * El id vendría en req.params.id.
     */
    obtenerCompaniaById = async (req, res, next) => {
    }
    /**
  * Actualiza una compañía existente.
  * Suele recibir el id de la compañía en req.params.id
  * y los nuevos datos en req.body.
  */
    actualizarCompania = async (req, res, next) => {
    }
}
export { CompaniaControl }