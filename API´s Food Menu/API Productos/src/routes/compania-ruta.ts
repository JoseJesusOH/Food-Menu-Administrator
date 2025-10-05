/**
 * Importacion de Control Respectivo
 */

import { ProductoControl } from "@controller/producto.control";

//Instancias  
const express = require("express");
const router = express.Router();

const productoControl = new ProductoControl()
//Manejo de Router
router.get("/",productoControl.obtenerCompanias);
router.get("/:id",productoControl.obtenerCompaniaById);
router.delete("/:id",productoControl.eliminarCompania);
router.post("/",productoControl.crearCompania);
//Exportacion Router
module.exports = router;