/**
 * Importación del Control Respectivo
 */
import { DireccionControl } from "@controller/direccion.control"
// Instancias
const express = require("express");
const router = express.Router();

// Dirección Control
const direccionControl = new DireccionControl();

// Manejo de Router
router.get("/", direccionControl.obtenerDirecciones);

router.get("/direccion/:uuid", direccionControl.obtenerDireccionByUuid);

router.post("/", direccionControl.agregarDireccion);

router.delete("/direccion/:direccionUuid", direccionControl.eliminarDireccionByUuid);

router.put("/", direccionControl.actualizarDireccion);

// Exportación Router
module.exports = router;
