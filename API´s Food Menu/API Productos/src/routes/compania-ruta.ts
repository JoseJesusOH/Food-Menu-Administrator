/**
 * Importacion de Control Respectivo
 */

import { CompaniaControl  } from "@controller/compania.control";

//Instancias  
const express = require("express");
const router = express.Router();

const companiaControl = new CompaniaControl()
//Manejo de Router
router.get("/",companiaControl.obtenerCompanias);
router.get("/:id",companiaControl.obtenerCompaniaById);
//Exportacion Router
module.exports = router;