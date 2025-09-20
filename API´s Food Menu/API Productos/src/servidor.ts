/**
 * Importacion de la conexion
 */
import { Conexion } from "@utility/conexion"

/**
 * Variables requeridas 
 */
const express = require('express')
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rutas 
app.get("/", async (req, res) => {
  res.send("Servidor Express con TypeScript funcionando 🚀");
});

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