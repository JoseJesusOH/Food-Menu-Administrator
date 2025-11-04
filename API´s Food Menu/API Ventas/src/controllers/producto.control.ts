// Importaciones necesarias para la capa de control
import { ProductoIDAO } from "@data.dao/producto.dao";
import { ProductoDAO } from "@data.impl/producto.dao.impl";
import { plainToInstance } from "class-transformer";
import { LoggerAPI } from "@utility/logger";
import { Producto } from "@entity/producto.entity";
import { ProductoIService } from "@service.dao/producto.dao";
import { ProductoService } from "@service.impl/producto.dao.impl";

/**
 * Controlador que gestiona las operaciones relacionadas con los productos.
 * 
 * Esta clase actúa como capa intermedia entre las rutas HTTP (controladores REST)
 * y la capa de servicio {@link ProductoService}, que contiene la lógica de negocio.
 * 
 * Los métodos implementan respuestas HTTP adecuadas según el resultado de la operación,
 * y utilizan {@link LoggerAPI} para registrar los eventos y errores.
 */
class ProductoControl {
    
    /** Instancia del servicio utilizada para la gestión de productos. */
    productoServicio: ProductoIService = new ProductoService();

    /**
     * Controlador para agregar un nuevo producto.
     * 
     * @route POST /productos
     * @param req Cuerpo de la solicitud HTTP, que debe contener los datos del producto.
     * @param res Objeto de respuesta HTTP utilizado para enviar el resultado al cliente.
     * @param next Middleware siguiente en la cadena de ejecución.
     * @returns Respuesta con el estado de la operación y el producto agregado.
     */
    agregarProducto = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de agregar un nuevo producto en control.");
        try {
            const producto = plainToInstance(Producto, req.body);
            const result = await this.productoServicio.agregarProducto(producto);

            if (result) {
                LoggerAPI.info("Se agregó un nuevo producto correctamente en control.");
                return res.status(201).json({ message: "Producto agregado correctamente", producto: result });
            } else {
                LoggerAPI.error("No se pudo agregar el producto en control.");
                return res.status(400).json({ message: "No se pudo agregar el producto" });
            }
        } catch (error) {
            LoggerAPI.error("Error al agregar el producto en control: " + error);
            return res.status(500).json({ message: "Error al agregar el producto" });
        }
    }

    /**
     * Controlador para eliminar un producto mediante su UUID.
     * 
     * @route DELETE /productos/:productoUuid
     * @param req Parámetros de la solicitud que contienen el UUID del producto.
     * @param res Objeto de respuesta HTTP.
     * @param next Middleware siguiente en la cadena de ejecución.
     * @returns Respuesta con el estado de la operación.
     */
    eliminarProducto = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de eliminar un producto en control.");
        try {
            const productoUuid = req.params.productoUuid;
            const result = await this.productoServicio.eliminarProducto(productoUuid);

            if (result) {
                LoggerAPI.info("Se eliminó el producto correctamente en control.");
                return res.status(200).json({ message: "Producto eliminado" });
            } else {
                LoggerAPI.error("No se pudo eliminar el producto en control.");
                return res.status(400).json({ message: "No se pudo eliminar el producto" });
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar el producto en control: " + error);
            return res.status(500).json({ message: "Error al eliminar el producto" });
        }
    }

    /**
     * Controlador para actualizar los datos de un producto existente.
     * 
     * @route PUT /productos
     * @param req Cuerpo de la solicitud que contiene los datos actualizados del producto.
     * @param res Objeto de respuesta HTTP.
     * @param next Middleware siguiente en la cadena de ejecución.
     * @returns Respuesta con el estado de la actualización.
     */
    actualizarProducto = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de actualizar un producto en control.");
        try {
            const producto = plainToInstance(Producto, req.body);
            const result = await this.productoServicio.actualizarProducto(producto);

            if (result) {
                LoggerAPI.info("Se actualizó el producto correctamente en control.");
                return res.status(200).json({ message: "Producto actualizado", producto: result });
            } else {
                LoggerAPI.error("No se pudo actualizar el producto en control.");
                return res.status(400).json({ message: "No se pudo actualizar el producto" });
            }
        } catch (error) {
            LoggerAPI.error("Error al actualizar el producto en control: " + error);
            return res.status(500).json({ message: "Error al actualizar el producto" });
        }
    }

    /**
     * Controlador para obtener todos los productos del sistema.
     * 
     * @route GET /productos
     * @param req Solicitud HTTP entrante.
     * @param res Objeto de respuesta HTTP.
     * @param next Middleware siguiente en la cadena de ejecución.
     * @returns Lista de productos o un mensaje si no existen registros.
     */
    obtenerProductos = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener productos en control.");
        try {
            const result = await this.productoServicio.getProductos();

            if (result && result.length > 0) {
                LoggerAPI.info("Se obtuvieron los productos correctamente en control.");
                return res.status(200).json({ productos: result });
            } else {
                LoggerAPI.error("No se encontraron productos en control.");
                return res.status(404).json({ message: "No se encontraron productos" });
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener los productos en control: " + error);
            return res.status(500).json({ message: "Error al obtener los productos" });
        }
    }

    /**
     * Controlador para obtener un producto por su UUID.
     * 
     * @route GET /productos/:productoUuid
     * @param req Parámetros de la solicitud que contienen el UUID del producto.
     * @param res Objeto de respuesta HTTP.
     * @param next Middleware siguiente en la cadena de ejecución.
     * @returns Objeto del producto si se encuentra, o mensaje de error si no existe.
     */
    obtenerProductoByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener un producto por UUID en control.");
        try {
            const productoUuid = req.params.productoUuid;
            const result = await this.productoServicio.getProductoByUuid(productoUuid);

            if (result) {
                LoggerAPI.info("Se obtuvo el producto correctamente por UUID en control.");
                return res.status(200).json({ producto: result });
            } else {
                LoggerAPI.error("No se encontró el producto con el UUID proporcionado en control.");
                return res.status(404).json({ message: "No se encontró el producto" });
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener el producto por UUID en control: " + error);
            return res.status(500).json({ message: "Error al obtener el producto" });
        }
    }
}

export { ProductoControl };
