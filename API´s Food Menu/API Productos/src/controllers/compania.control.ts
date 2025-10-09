import { Compania } from "@entity/compania.entity"
import { CompaniaIServicio } from "@service.dao/compania.servicio"
import { CompaniaServicio } from "@service.impl/compania.servicio.impl"
import { plainToInstance } from "class-transformer"
import { LoggerAPI } from "@utility/logger"
class CompaniaControl {
  companiaServicio: CompaniaIServicio = new CompaniaServicio()
  /**
* Crea una nueva compañía.
* Normalmente toma los datos de la compañía desde req.body
* y responde con la compañía creada o un mensaje de éxito.
*/
  agregarCompania = async (req, res, next) => {
    LoggerAPI.info("Se inicia el control respectivo para agregar una compania");
    try {
      let compania = plainToInstance(Compania, req.body);
      const companiaResult = await this.companiaServicio.agregarCompania(compania)
      if (companiaResult) {
        return res.status(200).send({ message: `La compania ha sido registrada` })
      } else {
        return res.status(404).send({ message: "No se ha ingresado la compania" })
      }
    } catch (error) {
      LoggerAPI.warn(`Se ha presentado un error en agregar la compania  ${error}`)
      return res.status(500).send({ message: "Error interno del servidor" });
    }
  }
  /**
 * Elimina una compañía existente.
 * El id de la compañía se recibe en req.params.id.
 */
  eliminarCompania = async (req, res, next) => {
    LoggerAPI.info("Se inicia el control respectivo para eliminar una compania");
    try {
      const { companiaUuid } = req.params;
      const companiaResult = await this.companiaServicio.eliminarCompania(companiaUuid)
      if (companiaResult) {
        return res.status(200).send({ message: `La compania ha sido eliminada` })
      } else {
        return res.status(404).send({ message: "No se ha eliminado la compania" })
      }
    } catch (error) {
      LoggerAPI.warn(`Se ha presentado un error en eliminar la compania  ${error}`)
      return res.status(500).send({ message: "Error interno del servidor" });
    }
  }
  /**
* Obtiene todas las compañías.
* Suele responder con un array de compañías.
* Puede aceptar filtros opcionales desde req.query.
*/
  obtenerCompanias = async (req, res, next) => {
    LoggerAPI.info("Se inicia el control respectivo para el retorno de companias");
    try {
      const companias = await this.companiaServicio.getCompanias();
      if (companias) {
        return res.status(200).send({ companias: companias })
      } else {
        return res.status(404).send({ message: "No se han encontrado companias" })
      }
    } catch (error) {
      LoggerAPI.warn(`Se ha presentado un error en obtener las companias  ${error}`)
      return res.status(500).send({ message: "Error interno del servidor" });
    }
  }

  /**
   * Obtiene una compañía específica por su id.
   * El id vendría en req.params.id.
   */
  obtenerCompaniaByUuid = async (req, res, next) => {
    LoggerAPI.info("Se inicia el control respectivo para el retorno de una compania por id");
    try {
      const { companiaUuid } = req.params;
      const compania = await this.companiaServicio.getCompaniaByUuid(companiaUuid);
      if (compania) {
        return res.status(200).send({ compania: compania })
      }
      else {
        return res.status(404).send({ message: "No se ha encontrado la compania" })
      }
    } catch (error) {
      LoggerAPI.warn(`Se ha presentado un error en obtener la compania por id  ${error}`)
      return res.status(500).send({ message: "Error interno del servidor" });
    }
  }
  /**
* Actualiza una compañía existente.
* Suele recibir el id de la compañía en req.params.id
* y los nuevos datos en req.body.
*/
  actualizarCompania = async (req, res, next) => {
    LoggerAPI.info("Se inicia el control respectivo para actualizar una compania");
    try {
      let compania = plainToInstance(Compania, req.body);
      const companiaResult = await this.companiaServicio.actualizarCompania(compania)
      if (companiaResult) {
        return res.status(200).send({ message: `La compania ha sido actualizada` })
      } else {
        return res.status(404).send({ message: "No se ha actualizado la compania" })
      }
    } catch (error) {
      LoggerAPI.warn(`Se ha presentado un error en actualizar la compania  ${error}`)
      return res.status(500).send({ message: "Error interno del servidor" });
    }
  }
}
export { CompaniaControl }