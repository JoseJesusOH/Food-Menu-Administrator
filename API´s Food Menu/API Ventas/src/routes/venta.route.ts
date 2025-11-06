import { VentaControl } from "@controller/venta.control";


const express = require("express");
const router = express.Router();
const ventaControl = new VentaControl();
router.get("/", ventaControl.obtenerVentas);
router.get("/:ventaUuid", ventaControl.obtenerVentaByUuid); 
router.post("/", ventaControl.agregarVenta);
router.put("/:ventaUuid", ventaControl.actualizarVenta)
router.delete("/:ventaUuid", ventaControl.eliminarVenta);
//Exportacion Router
module.exports = router;