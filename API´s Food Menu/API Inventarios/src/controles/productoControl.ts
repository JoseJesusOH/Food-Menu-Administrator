import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { ProductoIServicio } from "@service.dao/producto.dao";
import { ProductoService } from "@service.impl/producto.dao.impl";
import { plainToInstance } from "class-transformer";
import { Producto } from "@entity/producto.entity";
import { LoggerAPI } from "@utility/logger";

/**
 * Controlador encargado de gestionar las operaciones relacionadas con los productos.
 * 
 * Esta clase actúa como intermediario entre las peticiones HTTP (controlador)
 * y la capa de servicio que maneja la lógica de negocio de los productos.
 * 
 * Todas las operaciones están debidamente registradas mediante {@link LoggerAPI}
 * para mantener trazabilidad y facilitar la depuración.
 * 
 * Métodos principales:
 * - `agregarProducto`: Registra un nuevo producto en el sistema.
 * - `eliminarProducto`: Elimina un producto existente.
 * - `obtenerProductos`: Obtiene todos los productos registrados.
 * - `obtenerProductoByUuid`: Obtiene un producto específico por su UUID.
 * - `actualizarProducto`: Actualiza la información de un producto existente.
 */
class ProductoControl {

    /** Instancia del servicio de productos que contiene la lógica de negocio. */
    private productoServicio: ProductoIServicio = new ProductoService();

    /**
     * Controlador para registrar un nuevo producto.
     * 
     * @async
     * @function agregarProducto
     * @param {Request} req Objeto de solicitud HTTP que contiene los datos del producto en `req.body`.
     * @param {Response} res Objeto de respuesta HTTP utilizado para enviar el resultado.
     * @param {NextFunction} next Función para pasar el control al siguiente middleware.
     * @returns {Promise<Response>} Respuesta HTTP con mensaje de éxito o error.
     */
    agregarProducto = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de agregar un nuevo producto en control.");
        try {
            const producto = plainToInstance(Producto, req.body);
            const result = await this.productoServicio.agregarProducto(producto);

            if (result) {
                LoggerAPI.info("Se agregó un nuevo producto en control.");
                return res.status(201).json({ message: "Producto agregado correctamente", producto: result });
            } else {
                LoggerAPI.warn("No se pudo agregar el producto en control.");
                return res.status(400).json({ message: "No se pudo agregar el producto" });
            }

        } catch (error) {
            LoggerAPI.error("Error al agregar el producto en control: " + error);
            return res.status(500).json({ message: "Error al agregar el producto" });
        }
    };

    /**
     * Controlador para eliminar un producto existente por su UUID.
     * 
     * @async
     * @function eliminarProducto
     * @param {Request} req Objeto de solicitud HTTP que contiene el UUID en `req.params.productoUuid`.
     * @param {Response} res Objeto de respuesta HTTP utilizado para enviar el resultado.
     * @param {NextFunction} next Función para pasar el control al siguiente middleware.
     * @returns {Promise<Response>} Respuesta HTTP con el resultado de la eliminación.
     */
    eliminarProducto = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de eliminar un producto en control.");
        try {
            const productoUuid = req.params.productoUuid;
            const result = await this.productoServicio.eliminarProducto(productoUuid);

            if (result) {
                LoggerAPI.info("Se eliminó el producto en control.");
                return res.status(200).json({ message: "Producto eliminado correctamente" });
            } else {
                LoggerAPI.warn("No se pudo eliminar el producto en control.");
                return res.status(400).json({ message: "No se pudo eliminar el producto" });
            }

        } catch (error) {
            LoggerAPI.error("Error al eliminar el producto en control: " + error);
            return res.status(500).json({ message: "Error al eliminar el producto" });
        }
    };

    /**
     * Controlador para obtener todos los productos registrados en el sistema.
     * 
     * @async
     * @function obtenerProductos
     * @param {Request} req Objeto de solicitud HTTP.
     * @param {Response} res Objeto de respuesta HTTP utilizado para enviar los productos.
     * @param {NextFunction} next Función para pasar el control al siguiente middleware.
     * @returns {Promise<Response>} Respuesta HTTP con la lista de productos o un mensaje de error.
     */
    obtenerProductos = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener productos en control.");
        try {
            const result = await this.productoServicio.getProductos();

            if (result && result.length > 0) {
                LoggerAPI.info("Se obtuvieron los productos en control.");
                return res.status(200).json({ productos: result });
            } else {
                LoggerAPI.warn("No se encontraron productos en control.");
                return res.status(404).json({ message: "No se encontraron productos" });
            }

        } catch (error) {
            LoggerAPI.error("Error al obtener los productos en control: " + error);
            return res.status(500).json({ message: "Error al obtener los productos" });
        }
    };

    /**
     * Controlador para obtener un producto específico a partir de su UUID.
     * 
     * @async
     * @function obtenerProductoByUuid
     * @param {Request} req Objeto de solicitud HTTP que contiene el UUID en `req.params.productoUuid`.
     * @param {Response} res Objeto de respuesta HTTP utilizado para enviar el resultado.
     * @param {NextFunction} next Función para pasar el control al siguiente middleware.
     * @returns {Promise<Response>} Respuesta HTTP con el producto o un mensaje de error si no se encuentra.
     */
    obtenerProductoByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener un producto por UUID en control.");
        try {
            const productoUuid = req.params.productoUuid;
            const result = await this.productoServicio.getProductoByUuid(productoUuid);

            if (result) {
                LoggerAPI.info("Se obtuvo el producto por UUID en control.");
                return res.status(200).json({ producto: result });
            } else {
                LoggerAPI.warn("No se encontró el producto por UUID en control.");
                return res.status(404).json({ message: "No se encontró el producto" });
            }

        } catch (error) {
            LoggerAPI.error("Error al obtener el producto por UUID en control: " + error);
            return res.status(500).json({ message: "Error al obtener el producto" });
        }
    };

    /**
     * Controlador para actualizar un producto existente.
     * 
     * @async
     * @function actualizarProducto
     * @param {Request} req Objeto de solicitud HTTP que contiene los datos actualizados en `req.body`.
     * @param {Response} res Objeto de respuesta HTTP utilizado para enviar el resultado.
     * @param {NextFunction} next Función para pasar el control al siguiente middleware.
     * @returns {Promise<Response>} Respuesta HTTP con el resultado de la actualización.
     */
    actualizarProducto = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de actualizar un producto en control.");
        try {
            const producto = plainToInstance(Producto, req.body);
            const result = await this.productoServicio.actualizarProducto(producto);

            if (result) {
                LoggerAPI.info("Se actualizó el producto en control.");
                return res.status(200).json({ message: "Producto actualizado correctamente", producto: result });
            } else {
                LoggerAPI.warn("No se pudo actualizar el producto en control.");
                return res.status(400).json({ message: "No se pudo actualizar el producto" });
            }

        } catch (error) {
            LoggerAPI.error("Error al actualizar el producto en control: " + error);
            return res.status(500).json({ message: "Error al actualizar el producto" });
        }
    };
}

export { ProductoControl };
