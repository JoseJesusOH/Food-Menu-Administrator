/**
 * Importacion de Control Respectivo
 */

import { ProductoStockControl } from "@controller/producto-stock.control";



//Instancias  
const express = require("express");
const router = express.Router();

const productoStockControl = new ProductoStockControl()

//Manejo de Router
router.get("/",productoStockControl.obtenerProductosStock)

//Exportacion Router
module.exports = router;

