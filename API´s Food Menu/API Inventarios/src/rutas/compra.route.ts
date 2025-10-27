/**
 * Importacion de Control Respectivo
 */

import { CompraControl } from "@controller/compra.control";



//Instancias  
const express = require("express");
const router = express.Router();

const compraControl = new CompraControl

//Manejo de Router
router.get("/",compraControl.obtenerCompras)
router.get("/:compraUuid",compraControl.obtenerCompraByUuid);
router.delete("/:compraUuid",compraControl.eliminarCompra);
router.post("/",compraControl.actualizarCompra);

//Exportacion Router
module.exports = router;

