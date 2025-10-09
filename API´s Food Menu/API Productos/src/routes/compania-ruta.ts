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
router.get("/:companiaUuid",companiaControl.obtenerCompaniaByUuid);
router.delete("/:companiaUuid",companiaControl.eliminarCompania);
router.post("/",companiaControl.agregarCompania);
//Exportacion Router
module.exports = router;