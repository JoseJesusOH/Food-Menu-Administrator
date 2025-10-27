import { Compra } from "@entity/compra.entity";
import { CompraIServicio } from "@service.dao/compra.dao";
import { CompraServicio } from "@service.impl/compra.dao.impl";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

/**
 * Controlador para gestionar las operaciones relacionadas con las compras.
 *
 * Esta clase actúa como intermediario entre las solicitudes HTTP del cliente
 * y la capa de servicios encargada de realizar las operaciones sobre la entidad {@link Compra}.
 *
 * Incluye los métodos necesarios para:
 * - Registrar una nueva compra.
 * - Obtener todas las compras.
 * - Consultar una compra específica por UUID.
 * - Actualizar los datos de una compra.
 * - Eliminar una compra existente.
 *
 * Cada método implementa un manejo robusto de errores y utiliza {@link LoggerAPI}
 * para registrar los eventos y posibles fallos durante el proceso.
 *
 * @class CompraControl
 * @see CompraServicio
 */
class CompraControl {
    /** Instancia del servicio que maneja la lógica de negocio de las compras. */
    compraServicio: CompraIServicio = new CompraServicio();

    /**
     * Controlador para registrar una nueva compra en el sistema.
     *
     * Convierte los datos recibidos desde `req.body` en una instancia de {@link Compra}
     * y solicita al servicio correspondiente que la registre en la base de datos.
     *
     * @async
     * @function agregarCompra
     * @memberof CompraControl
     *
     * @param {Request} req - Solicitud HTTP que contiene los datos de la nueva compra.
     * @param {Response} res - Respuesta HTTP para enviar el resultado de la operación.
     * @param {NextFunction} next - Middleware de Express para continuar el flujo.
     *
     * @returns {Promise<Response>} - Respuesta HTTP con los siguientes posibles estados:
     * - **201 (Created):** La compra se registró correctamente.
     * - **400 (Bad Request):** No se pudo registrar la compra.
     * - **500 (Internal Server Error):** Error interno al registrar la compra.
     */
    async agregarCompra(req, res, next) {
        LoggerAPI.info("Se inició el proceso para registrar una nueva compra en el sistema.");
        try {
            const compra = plainToInstance(Compra, req.body);
            const result = await this.compraServicio.agregarCompra(compra);

            if (result) {
                LoggerAPI.info("La compra fue registrada correctamente.");
                return res.status(201).json({ message: "Compra registrada correctamente", compra: result });
            } else {
                LoggerAPI.warn("No se pudo registrar la compra.");
                return res.status(400).json({ message: "No se pudo registrar la compra" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al registrar la compra: ${error}`);
            return res.status(500).json({ message: "Error al registrar la compra" });
        }
    }

    /**
     * Controlador para eliminar una compra existente mediante su UUID.
     *
     * Obtiene el identificador desde los parámetros de la solicitud (`req.params.compraUuid`)
     * y solicita al servicio correspondiente su eliminación en la base de datos.
     *
     * @async
     * @function eliminarCompra
     * @memberof CompraControl
     *
     * @param {Request} req - Solicitud HTTP con el UUID de la compra a eliminar.
     * @param {Response} res - Respuesta HTTP para retornar el resultado.
     * @param {NextFunction} next - Middleware para continuar el flujo de ejecución.
     *
     * @returns {Promise<Response>} - Respuesta HTTP con uno de los siguientes códigos:
     * - **200 (OK):** La compra fue eliminada exitosamente.
     * - **400 (Bad Request):** No se pudo eliminar la compra.
     * - **500 (Internal Server Error):** Error durante la eliminación.
     */
    eliminarCompra = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de eliminar una compra en control.");
        try {
            const compraUuid = req.params.compraUuid;
            const result = await this.compraServicio.eliminarCompra(compraUuid);

            if (result) {
                LoggerAPI.info("La compra fue eliminada correctamente.");
                return res.status(200).json({ message: "Compra eliminada correctamente" });
            } else {
                LoggerAPI.warn("No se pudo eliminar la compra.");
                return res.status(400).json({ message: "No se pudo eliminar la compra" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al eliminar la compra: ${error}`);
            return res.status(500).json({ message: "Error al eliminar la compra" });
        }
    };

    /**
     * Controlador para obtener todas las compras registradas en el sistema.
     *
     * Solicita al servicio de compras la lista completa de registros y los devuelve al cliente.
     *
     * @async
     * @function obtenerCompras
     * @memberof CompraControl
     *
     * @param {Request} req - Solicitud HTTP.
     * @param {Response} res - Respuesta HTTP con la lista de compras o un mensaje de error.
     * @param {NextFunction} next - Middleware para continuar el flujo.
     *
     * @returns {Promise<Response>} - Respuesta HTTP con:
     * - **200 (OK):** Lista de compras obtenida correctamente.
     * - **404 (Not Found):** No existen compras registradas.
     * - **500 (Internal Server Error):** Error al acceder a la base de datos.
     */
    obtenerCompras = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener las compras en control.");
        try {
            const result = await this.compraServicio.getCompras();

            if (result && result.length > 0) {
                LoggerAPI.info("Se obtuvieron las compras correctamente en control.");
                return res.status(200).json({ compras: result });
            } else {
                LoggerAPI.warn("No se encontraron compras en control.");
                return res.status(404).json({ message: "No se encontraron compras" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener las compras en control: ${error}`);
            return res.status(500).json({ message: "Error al obtener las compras" });
        }
    };

    /**
     * Controlador para obtener una compra específica mediante su UUID.
     *
     * Recupera el identificador único (`compraUuid`) desde los parámetros de la solicitud
     * y obtiene la compra correspondiente desde la capa de servicios.
     *
     * @async
     * @function obtenerCompraByUuid
     * @memberof CompraControl
     *
     * @param {Request} req - Solicitud HTTP con el parámetro `compraUuid`.
     * @param {Response} res - Respuesta HTTP con la compra encontrada o un mensaje de error.
     * @param {NextFunction} next - Middleware para continuar el flujo de ejecución.
     *
     * @returns {Promise<Response>} - Respuesta HTTP con:
     * - **200 (OK):** Compra encontrada correctamente.
     * - **404 (Not Found):** No existe una compra con el UUID proporcionado.
     * - **500 (Internal Server Error):** Error durante la búsqueda.
     */
    obtenerCompraByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener una compra por UUID en control.");
        try {
            const compraUuid = req.params.compraUuid;
            const result = await this.compraServicio.getCompraByUuid(compraUuid);

            if (result) {
                LoggerAPI.info(`Se obtuvo la compra con UUID ${compraUuid} correctamente en control.`);
                return res.status(200).json({ compra: result });
            } else {
                LoggerAPI.warn(`No se encontró ninguna compra con UUID ${compraUuid} en control.`);
                return res.status(404).json({ message: "No se encontró la compra solicitada" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener la compra por UUID en control: ${error}`);
            return res.status(500).json({ message: "Error al obtener la compra por UUID" });
        }
    };

    /**
     * Controlador para actualizar una compra existente.
     *
     * Convierte los datos recibidos desde `req.body` en una instancia de {@link Compra}
     * y solicita al servicio que realice la actualización correspondiente en la base de datos.
     *
     * @async
     * @function actualizarCompra
     * @memberof CompraControl
     *
     * @param {Request} req - Solicitud HTTP con los datos actualizados de la compra.
     * @param {Response} res - Respuesta HTTP con el resultado de la operación.
     * @param {NextFunction} next - Middleware para continuar el flujo.
     *
     * @returns {Promise<Response>} - Respuesta HTTP con:
     * - **200 (OK):** Compra actualizada correctamente.
     * - **400 (Bad Request):** No se pudo actualizar la compra.
     * - **500 (Internal Server Error):** Error durante la actualización.
     */
    actualizarCompra = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de actualizar una compra en control.");
        try {
            const compra = plainToInstance(Compra, req.body);
            const result = await this.compraServicio.actualizarCompra(compra);

            if (result) {
                LoggerAPI.info("La compra fue actualizada correctamente en control.");
                return res.status(200).json({ message: "Compra actualizada correctamente", compra: result });
            } else {
                LoggerAPI.warn("No se pudo actualizar la compra en control.");
                return res.status(400).json({ message: "No se pudo actualizar la compra" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al actualizar la compra en control: ${error}`);
            return res.status(500).json({ message: "Error al actualizar la compra" });
        }
    };
}

export { CompraControl };
