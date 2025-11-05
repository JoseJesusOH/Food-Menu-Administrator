import { Venta } from "@entity/venta.entity";
import { VentaIService } from "@service.dao/venta.dao";
import { VentaService } from "@service.impl/venta.dao.impl";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class VentaControl {
    ventaServicio: VentaIService = new VentaService();
    /**
 * Agrega una nueva venta al sistema.
 *
 * Este método procesa una solicitud HTTP que contiene en el cuerpo (`req.body`)
 * los datos de la venta a registrar. Convierte dichos datos en una instancia
 * de la entidad `Venta` mediante `plainToInstance` y delega la operación de
 * inserción al servicio `ventaServicio.agregarVenta()`.
 *
 * Si la operación es exitosa, devuelve un código **201** con la información
 * de la venta recién creada. Si ocurre un error controlado, responde con **400**.  
 * En caso de error inesperado, devuelve un código **500** con un mensaje genérico.
 *
 * @param req Solicitud HTTP que contiene los datos de la venta en el cuerpo.
 * @param res Objeto de respuesta HTTP utilizado para enviar el resultado al cliente.
 * @param next Middleware siguiente en la cadena de ejecución.
 * @returns Respuesta JSON con el estado de la operación y, si aplica, la venta agregada.
 */
    agregarVenta = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de agregar una nueva venta en control.");
        try {
            const venta = plainToInstance(Venta, req.body);
            const result = await this.ventaServicio.agregarVenta(venta);

            if (result) {
                LoggerAPI.info("Se agregó una nueva venta correctamente en control.");
                return res.status(201).json({ message: "Venta agregada correctamente", venta: result });
            } else {
                LoggerAPI.error("No se pudo agregar la venta en control.");
                return res.status(400).json({ message: "No se pudo agregar la venta" });
            }
        } catch (error) {
            LoggerAPI.error("Error al agregar la venta en control: " + error);
            return res.status(500).json({ message: "Error al agregar la venta" });
        }
    };

    /**
     * Obtiene todas las ventas registradas en el sistema.
     *
     * Este método procesa una solicitud HTTP que busca recuperar el listado completo
     * de ventas disponibles. Llama al servicio `ventaServicio.getVentas()` para
     * obtener los datos y devuelve la lista en formato JSON.
     *
     * Si existen ventas registradas, se devuelve un código **200** junto con la lista.  
     * Si no hay registros, se devuelve un código **204** con un mensaje indicativo.  
     * En caso de error inesperado, responde con un código **500** y un mensaje de error.
     *
     * @param req Solicitud HTTP recibida.
     * @param res Objeto de respuesta HTTP utilizado para enviar el resultado al cliente.
     * @param next Middleware siguiente en la cadena de ejecución.
     * @returns Respuesta JSON con la lista de ventas o un mensaje de error.
     */
    obtenerVentas = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener todas las ventas en control.");
        try {
            const ventas = await this.ventaServicio.getVentas();

            if (ventas && ventas.length > 0) {
                LoggerAPI.info("Se obtuvieron las ventas correctamente en control.");
                return res.status(200).json(ventas);
            } else {
                LoggerAPI.warn("No se encontraron ventas registradas en control.");
                return res.status(204).json({ message: "No hay ventas registradas" });
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener las ventas en control: " + error);
            return res.status(500).json({ message: "Error al obtener las ventas" });
        }
    };


    /**
 * Obtiene una venta específica utilizando su UUID.
 *
 * Este método procesa una solicitud HTTP que contiene en los parámetros de la ruta
 * el identificador único (`ventaUuid`) de la venta que se desea consultar.  
 * Llama al servicio `ventaServicio.getVentaByUuid()` para obtener la información
 * correspondiente y devuelve el resultado al cliente.
 *
 * Si la venta existe, se retorna con un código **200** y los datos de la venta.  
 * Si no se encuentra, se devuelve un código **404** con un mensaje indicativo.  
 * En caso de error inesperado, responde con código **500** y un mensaje de error genérico.
 *
 * @param req Solicitud HTTP que contiene el parámetro `ventaUuid` en la URL.
 * @param res Objeto de respuesta HTTP utilizado para enviar el resultado al cliente.
 * @param next Middleware siguiente en la cadena de ejecución.
 * @returns Respuesta JSON con la venta encontrada o mensaje de error.
 */
    obtenerVentaByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener una venta por UUID en control.");
        try {
            const venta = await this.ventaServicio.getVentaByUuid(req.params.ventaUuid);

            if (venta) {
                LoggerAPI.info("Se obtuvo la venta correctamente en control.");
                return res.status(200).json(venta);
            } else {
                LoggerAPI.warn("No se encontró la venta con el UUID especificado en control.");
                return res.status(404).json({ message: "Venta no encontrada" });
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener la venta por UUID en control: " + error);
            return res.status(500).json({ message: "Error al obtener la venta" });
        }
    };


    /**
     * Actualiza una venta existente en el sistema.
     *
     * Este método procesa una solicitud HTTP que contiene en el cuerpo (`req.body`)
     * los datos actualizados de una venta. Convierte los datos recibidos en una
     * instancia de la clase `Venta` y delega la operación de actualización al
     * servicio `ventaServicio`. Si la venta existe, se actualiza y se devuelve
     * una respuesta con el nuevo estado; en caso contrario, se devuelve un mensaje
     * indicando que no se encontró la venta.
     *
     * @param req Solicitud HTTP que contiene los datos actualizados de la venta en el cuerpo.
     * @param res Objeto de respuesta HTTP utilizado para enviar el resultado al cliente.
     * @param next Middleware siguiente en la cadena de ejecución.
     * @returns Respuesta JSON con el estado de la operación y, si aplica, la venta actualizada.
     */
    actualizarVenta = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de actualizar una venta en control.");
        try {
            const venta = plainToInstance(Venta, req.body);
            const result = await this.ventaServicio.actualizarVenta(venta);

            if (result) {
                LoggerAPI.info("Se actualizó la venta correctamente en control.");
                return res.status(200).json({ message: "Venta actualizada correctamente", venta: result });
            } else {
                LoggerAPI.warn("No se encontró la venta a actualizar en control.");
                return res.status(404).json({ message: "Venta no encontrada" });
            }
        } catch (error) {
            LoggerAPI.error("Error al actualizar la venta en control: " + error);
            return res.status(500).json({ message: "Error al actualizar la venta" });
        }
    };


    /**
     * Elimina una venta del sistema utilizando su UUID.
     *
     * Este método se encarga de recibir una solicitud HTTP con el UUID de la venta
     * que se desea eliminar. Invoca al servicio correspondiente para realizar la
     * eliminación en la base de datos. En caso de éxito, devuelve un mensaje de
     * confirmación; si la venta no existe o ocurre un error, devuelve el mensaje
     * y código de estado apropiados.
     *
     * @param req Solicitud HTTP que contiene el parámetro `ventaUuid` en la ruta.
     * @param res Objeto de respuesta HTTP utilizado para enviar el resultado al cliente.
     * @param next Middleware siguiente en la cadena de ejecución.
     * @returns Respuesta JSON con el estado de la operación.
     */
    eliminarVenta = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de eliminar una venta en control.");
        try {
            const { ventaUuid } = req.params;
            const result = await this.ventaServicio.eliminarVenta(ventaUuid);

            if (result) {
                LoggerAPI.info("Se eliminó la venta correctamente en control.");
                return res.status(200).json({ message: "Venta eliminada correctamente" });
            } else {
                LoggerAPI.warn("No se encontró la venta a eliminar en control.");
                return res.status(404).json({ message: "Venta no encontrada" });
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar la venta en control: " + error);
            return res.status(500).json({ message: "Error al eliminar la venta" });
        }
    };

}
