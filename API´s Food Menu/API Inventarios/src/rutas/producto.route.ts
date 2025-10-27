/**
 * Importacion de Control Respectivo
 */

import { ProductoControl } from "@controller/producto.control";



//Instancias  
const express = require("express");
const router = express.Router();

const productoControl = new ProductoControl

//Manejo de Router
router.get("/",productoControl.obtenerProductos)
router.get("/:productoUuid",productoControl.obtenerProductoByUuid);
router.delete("/:productoUuid",productoControl.eliminarProducto);

//Exportacion Router
module.exports = router;

