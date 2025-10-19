/**
 * Importación del Control Respectivo
 */
import { UsuarioControl } from "@controller/usuario.control";

// Instancias
const express = require("express");
const router = express.Router();

// Usuario Control
const usuarioControl = new UsuarioControl();

// Manejo de Router
router.get("/", usuarioControl.getUsuario);

router.get("/usuario/:usuarioUuid", usuarioControl.getUsuarioByUuid);

router.post("/", usuarioControl.agregarUsuario);

router.put("/", usuarioControl.actualizarUsuario);

router.delete("/usuario/:usuarioUuid", usuarioControl.eliminarUsuarioByUuid);

// Exportación Router
module.exports = router;
