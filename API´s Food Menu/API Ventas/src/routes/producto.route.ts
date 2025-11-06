/**
 * --------------------------------------------------------------------------
 * Módulo de Enrutamiento para la Entidad Producto
 * --------------------------------------------------------------------------
 * 
 * Este archivo define las rutas HTTP asociadas al recurso `Producto`,
 * conectando las peticiones del cliente con los métodos del controlador
 * `ProductoControl`. 
 * 
 * Se utiliza el framework Express para gestionar las rutas y delegar
 * la lógica de negocio al controlador correspondiente.
 * 
 * Rutas incluidas:
 *  - GET    /                → Obtener todos los productos
 *  - GET    /:productoUuid   → Obtener un producto específico por UUID
 *  - POST   /                → Agregar un nuevo producto
 *  - PUT    /:productoUuid   → Actualizar un producto existente
 * 
 * @module routes/producto.route
 */

// -----------------------------------------------------------------------------
// Importaciones
// -----------------------------------------------------------------------------

/**
 * Importa el controlador encargado de gestionar las operaciones
 * relacionadas con la entidad `Producto`.
 */
import { ProductoControl } from "@controller/producto.control";

// -----------------------------------------------------------------------------
// Configuración de Express y creación del enrutador
// -----------------------------------------------------------------------------

/**
 * Se importa Express y se crea una nueva instancia de su enrutador.
 * Este enrutador permitirá definir y agrupar las rutas relacionadas
 * con los productos.
 */
const express = require("express");
const router = express.Router();

// -----------------------------------------------------------------------------
// Inicialización del controlador
// -----------------------------------------------------------------------------

/**
 * Se crea una instancia del controlador `ProductoControl`,
 * el cual contiene los métodos para manejar las operaciones CRUD
 * (crear, leer, actualizar y eliminar) de la entidad `Producto`.
 */
const productoControl = new ProductoControl();

// -----------------------------------------------------------------------------
// Definición de rutas y asignación de controladores
// -----------------------------------------------------------------------------

/**
 * @route GET /
 * @description Obtiene todos los productos registrados en el sistema.
 * @access Público
 */
router.get("/", productoControl.obtenerProductos);

/**
 * @route GET /:productoUuid
 * @description Obtiene un producto específico mediante su UUID.
 * @param {string} productoUuid - Identificador único del producto.
 * @access Público
 */
router.get("/:productoUuid", productoControl.obtenerProductoByUuid);

/**
 * @route POST /
 * @description Registra un nuevo producto con los datos enviados en el cuerpo de la solicitud.
 * @access Público
 */
router.post("/", productoControl.agregarProducto);

/**
 * @route PUT /:productoUuid
 * @description Actualiza los datos de un producto existente identificado por su UUID.
 * @param {string} productoUuid - Identificador único del producto.
 * @access Público
 */
router.put("/:productoUuid", productoControl.actualizarProducto);

// -----------------------------------------------------------------------------
// Exportación del enrutador
// -----------------------------------------------------------------------------

/**
 * Se exporta el enrutador configurado para que pueda ser utilizado
 * en el archivo principal de rutas o directamente en la aplicación Express.
 */
module.exports = router;
