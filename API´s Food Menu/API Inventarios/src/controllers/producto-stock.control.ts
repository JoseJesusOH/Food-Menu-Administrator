/**
 * Controlador encargado de gestionar las operaciones relacionadas con los productos que tienen stock.
 * 
 * Esta clase actúa como intermediario entre las peticiones HTTP y la capa de servicios (`ProductoStockService`),
 * gestionando la creación, eliminación, consulta y obtención individual de productos con stock.
 * 
 * Se registran logs en cada etapa del proceso para asegurar trazabilidad y facilitar el diagnóstico
 * de posibles errores o fallas durante las operaciones.
 * 
 * @class ProductoStockControl
 */
import { ProductoStock } from "@entity/producto-stock.entity";
import { ProductoStockIServicio } from "@service.dao/producto-stock.dao";
import { ProductoStockService } from "@service.impl/producto-stock.dao.impl";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class ProductoStockControl {
    /** Instancia del servicio de producto con stock que maneja la lógica de negocio. */
    productoStockServicio: ProductoStockIServicio = new ProductoStockService();

    /**
     * Controlador para registrar un nuevo producto con stock en el sistema.
     * 
     * Convierte los datos recibidos en una instancia de `ProductoStock` y delega la creación
     * al servicio correspondiente. Devuelve una respuesta HTTP acorde al resultado.
     * 
     * @async
     * @function agregarProductoStock
     * @param {Request} req - Solicitud HTTP que contiene los datos del producto en `req.body`.
     * @param {Response} res - Respuesta HTTP enviada al cliente.
     * @param {NextFunction} next - Middleware siguiente.
     * @returns {Promise<Response>} Respuesta con mensaje y datos del producto registrado.
     */
    agregarProductoStock = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso para registrar un nuevo producto con stock en el sistema.");
        try {
            const producto = plainToInstance(ProductoStock, req.body);
            const result = await this.productoStockServicio.agregarProductoStock(producto);

            if (result) {
                LoggerAPI.info("El producto fue registrado correctamente.");
                return res.status(201).json({ message: "Producto registrado correctamente", producto: result });
            } else {
                LoggerAPI.warn("No se pudo registrar el producto.");
                return res.status(400).json({ message: "No se pudo registrar el producto" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al registrar el producto: ${error}`);
            return res.status(500).json({ message: "Error al registrar el producto" });
        }
    };

    /**
     * Controlador para eliminar un producto con stock identificado por su UUID.
     * 
     * Valida el identificador, solicita la eliminación mediante el servicio correspondiente
     * y devuelve una respuesta HTTP con el resultado del proceso.
     * 
     * @async
     * @function eliminarProductoStock
     * @param {Request} req - Solicitud HTTP que contiene el UUID del producto en `req.params`.
     * @param {Response} res - Respuesta HTTP enviada al cliente.
     * @param {NextFunction} next - Middleware siguiente.
     * @returns {Promise<Response>} Respuesta con mensaje sobre el resultado de la eliminación.
     */
    eliminarProductoStock = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso para eliminar un producto con stock en control.");
        try {
            const productoStockUuid = req.params.productoStockUuid;
            const result = await this.productoStockServicio.eliminarProductoStock(productoStockUuid);

            if (result) {
                LoggerAPI.info(`El producto con UUID ${productoStockUuid} fue eliminado correctamente.`);
                return res.status(200).json({ message: "Producto eliminado correctamente" });
            } else {
                LoggerAPI.warn(`No se pudo eliminar el producto con UUID ${productoStockUuid}.`);
                return res.status(400).json({ message: "No se pudo eliminar el producto" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al eliminar el producto con stock: ${error}`);
            return res.status(500).json({ message: "Error al eliminar el producto" });
        }
    };

    /**
     * Controlador para obtener todos los productos con stock registrados en el sistema.
     * 
     * Llama al servicio correspondiente para recuperar los registros y devuelve la lista
     * al cliente junto con un mensaje de estado. También gestiona casos donde no se encuentran productos.
     * 
     * @async
     * @function obtenerProductosStock
     * @param {Request} req - Solicitud HTTP entrante.
     * @param {Response} res - Respuesta HTTP enviada al cliente.
     * @param {NextFunction} next - Middleware siguiente.
     * @returns {Promise<Response>} Lista de productos con stock o mensaje de error.
     */
    obtenerProductosStock = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso para obtener los productos con stock en control.");
        try {
            const result = await this.productoStockServicio.getProductoStocks();
            if (result && result.length > 0) {
                LoggerAPI.info("Se obtuvieron los productos con stock correctamente.");
                return res.status(200).json({ productos: result });
            } else {
                LoggerAPI.warn("No se encontraron productos con stock en el sistema.");
                return res.status(404).json({ message: "No se encontraron productos con stock" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener los productos con stock: ${error}`);
            return res.status(500).json({ message: "Error al obtener los productos con stock" });
        }
    };

    /**
     * Controlador para obtener un producto con stock específico mediante su UUID.
     * 
     * Valida el parámetro recibido, solicita la información al servicio correspondiente
     * y devuelve el producto encontrado o un mensaje si no existe.
     * 
     * @async
     * @function obtenerProductoStockByUuid
     * @param {Request} req - Solicitud HTTP con el UUID del producto en `req.params`.
     * @param {Response} res - Respuesta HTTP enviada al cliente.
     * @param {NextFunction} next - Middleware siguiente.
     * @returns {Promise<Response>} Producto encontrado o mensaje indicando que no existe.
     */
    obtenerProductoStockByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso para obtener un producto con stock por UUID en control.");
        try {
            const productoStockUuid = req.params.productoStockUuid;
            const result = await this.productoStockServicio.getProductoStockByUuid(productoStockUuid);

            if (result) {
                LoggerAPI.info(`Producto con UUID ${productoStockUuid} obtenido correctamente.`);
                return res.status(200).json({ producto: result });
            } else {
                LoggerAPI.warn(`No se encontró ningún producto con el UUID ${productoStockUuid}.`);
                return res.status(404).json({ message: "Producto no encontrado" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener el producto con stock por UUID: ${error}`);
            return res.status(500).json({ message: "Error al obtener el producto con stock" });
        }
    };
        /**
     * Controlador para actualizar la información de un producto con stock existente.
     * 
     * Convierte los datos recibidos en una instancia de `ProductoStock` y llama al servicio correspondiente
     * para realizar la actualización. Devuelve una respuesta HTTP según el resultado del proceso.
     * 
     * @async
     * @function actualizarProductoStock
     * @param {Request} req - Solicitud HTTP que contiene los datos actualizados del producto en `req.body`.
     * @param {Response} res - Respuesta HTTP enviada al cliente.
     * @param {NextFunction} next - Middleware siguiente.
     * @returns {Promise<Response>} Respuesta con mensaje y datos del producto actualizado.
     */
     actualizarProductoStock = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso para actualizar un producto con stock en control.");
        try {
            const producto = plainToInstance(ProductoStock, req.body);
            const result = await this.productoStockServicio.actualizarProductoStock(producto);

            if (result) {
                LoggerAPI.info("El producto con stock fue actualizado correctamente.");
                return res.status(200).json({ message: "Producto actualizado correctamente", producto: result });
            } else {
                LoggerAPI.warn("No se pudo actualizar el producto con stock.");
                return res.status(400).json({ message: "No se pudo actualizar el producto" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al actualizar el producto con stock: ${error}`);
            return res.status(500).json({ message: "Error al actualizar el producto con stock" });
        }
    };
}

export {ProductoStockControl}