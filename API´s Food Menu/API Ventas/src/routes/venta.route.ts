/**
 * --------------------------------------------------------------------------
 * Módulo de Enrutamiento para la Entidad Venta
 * --------------------------------------------------------------------------
 * 
 * Este archivo define las rutas HTTP asociadas al recurso `Venta`,
 * conectando las solicitudes entrantes con los métodos del controlador
 * `VentaControl`.
 * 
 * A través de este enrutador se gestionan las operaciones CRUD:
 *  - Creación de nuevas ventas
 *  - Consulta de ventas existentes
 *  - Actualización de ventas registradas
 *  - Eliminación de ventas por UUID
 * 
 * @module routes/venta.route
 */

// -----------------------------------------------------------------------------
// Importaciones
// -----------------------------------------------------------------------------

/**
 * Importa el controlador encargado de gestionar las operaciones
 * relacionadas con la entidad `Venta`.
 */
import { VentaControl } from "@controller/venta.control";

// -----------------------------------------------------------------------------
// Configuración de Express y creación del enrutador
// -----------------------------------------------------------------------------

/**
 * Se importa Express y se crea una nueva instancia de su enrutador.
 * Este enrutador permitirá definir y agrupar las rutas relacionadas
 * con las ventas.
 */
const express = require("express");
const router = express.Router();

// -----------------------------------------------------------------------------
// Inicialización del controlador
// -----------------------------------------------------------------------------

/**
 * Se crea una instancia del controlador `VentaControl`,
 * el cual contiene los métodos para manejar las operaciones CRUD
 * (crear, leer, actualizar y eliminar) de la entidad `Venta`.
 */
const ventaControl = new VentaControl();

// -----------------------------------------------------------------------------
// Definición de rutas y asignación de controladores
// -----------------------------------------------------------------------------

/**
 * @route GET /
 * @description Obtiene todas las ventas registradas en el sistema.
 * @access Público
 */
router.get("/", ventaControl.obtenerVentas);

/**
 * @route GET /:ventaUuid
 * @description Obtiene una venta específica mediante su UUID.
 * @param {string} ventaUuid - Identificador único de la venta.
 * @access Público
 */
router.get("/:ventaUuid", ventaControl.obtenerVentaByUuid);

/**
 * @route POST /
 * @description Registra una nueva venta con los datos enviados en el cuerpo de la solicitud.
 * @access Público
 */
router.post("/", ventaControl.agregarVenta);

/**
 * @route PUT /:ventaUuid
 * @description Actualiza los datos de una venta existente identificada por su UUID.
 * @param {string} ventaUuid - Identificador único de la venta.
 * @access Público
 */
router.put("/:ventaUuid", ventaControl.actualizarVenta);

/**
 * @route DELETE /:ventaUuid
 * @description Elimina una venta existente del sistema según su UUID.
 * @param {string} ventaUuid - Identificador único de la venta.
 * @access Público
 */
router.delete("/:ventaUuid", ventaControl.eliminarVenta);

// -----------------------------------------------------------------------------
// Exportación del enrutador
// -----------------------------------------------------------------------------

/**
 * Se exporta el enrutador configurado para su uso en la aplicación principal,
 * permitiendo que las rutas definidas sean accesibles mediante el prefijo
 * asignado (por ejemplo, `/ventas`).
 */
module.exports = router;
