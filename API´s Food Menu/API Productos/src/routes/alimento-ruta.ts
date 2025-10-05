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
router.get("/:id",alimentoControl.obtenerAlimentoById);
router.delete("/:id",alimentoControl.eliminarAlimento);

//Exportacion Router
module.exports = router;
