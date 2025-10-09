/**
 * Importacion de Control Respectivo
 */

import { ProductoControl } from "@controller/producto.control";

//Instancias  
const express = require("express");
const router = express.Router();

const productoControl = new ProductoControl()
//Manejo de Router
router.get("/",productoControl.obtenerProductos);
router.get("/:id",productoControl.obtenerCompaniaById);
router.delete("/:id",productoControl.eliminarCompania);
router.post("/",productoControl.crearCompania);
router.put("/:id",productoControl.actualizarCompania);
//Exportacion Router
module.exports = router;