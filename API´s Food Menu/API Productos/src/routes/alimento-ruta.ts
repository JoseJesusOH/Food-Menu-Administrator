/**
 * Importacion de Control Respectivo
 */

import { AlimentoControl } from "@controller/alimento.control";

//Instancias  
const express = require("express");
const router = express.Router();

const alimentoControl = new AlimentoControl

//Manejo de Router
router.get("/",alimentoControl.obtenerAlimentos);
router.get("/:alimentoUuid",alimentoControl.obtenerAlimentoByUuid);
router.delete("/:alimentoUuid",alimentoControl.eliminarAlimento);
router.post("/",alimentoControl.agregarAlimento);
router.put("/:alimentoUuid",alimentoControl.actualizarAlimento);

//Exportacion Router
module.exports = router;
