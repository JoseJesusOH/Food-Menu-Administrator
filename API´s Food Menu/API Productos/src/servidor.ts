
import { Conexion } from "@utility/conexion"

const express = require('express')
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rutas 
app.get("/", async (req, res) => {
  res.send("Servidor Express con TypeScript funcionando 🚀");
});

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

async function inicializarBaseDatos() {
  try {
    await Conexion.initialize()
    console.log("Base de Datos iniciliazada")
  } catch (error) {
    console.error("Erorr durante inicializacion DB:", error)
  }
}

export {servidorStart};