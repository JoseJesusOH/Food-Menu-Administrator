/**
 * Importacion de la conexion
 */
import { Conexion } from "@utility/conexion"
/**
 * Variables requeridas 
 */
const express = require('express')
const app = express();
const PORT = 3002;

// Middleware
app.use(express.json());


const categoriaRuta = require("@route/categoria-ruta")
const direccionRuta = require("@route/direccion.route")
const personaRuta = require("@route/persona.route")
const usuarioRuta = require("@route/usuario.route")

// Rutas 
app.use("/categorias",categoriaRuta)
app.use("/direccion",direccionRuta  )
app.use("/persona",personaRuta )
app.use("/usuario",usuarioRuta )

/**
 * Metodo que inializa el servidor express y manda a llamar la inicializacion 
 * de la base de datos
 */
async function servidorStart() {
  try {
    await inicializarBaseDatos();
    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
  }
}
/**
 * Metodo paras inicializar la base de datos
 */
async function inicializarBaseDatos() {
  try {
    await Conexion.initialize()
    console.log("Base de Datos iniciliazada")
  } catch (error) {
    console.error("Erorr durante inicializacion DB:", error)
  }
}

/**
 * Exportacion del metodo servidorStart
 */
export {servidorStart};