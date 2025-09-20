/**
 * Importacion TypeORM requerida por el uso de las entidades
 */
import "reflect-metadata"
/**
 * Importaciones de conexion, entidades y acceso a datos.
 */
import { Conexion } from "@utility/conexion"
import { Categoria } from "@entity/categoria.entity"
import { CategoriaDAO } from "@data.impl/categoria.dao.impl"
import { json } from "stream/consumers"

/**
 * Metodo para inializar la base de datos
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
 * Metodo de ejeucion de pruebas del acceso a datos.
 */
async function pruebas() {
  try {
    await inicializarBaseDatos();
    /*
    //Funcion para obtener los metada data maps inicilizados
    Conexion.initialize().then(() => {
    console.log("Entities registered:", Conexion.entityMetadatas.map(metadata => metadata.name));
    */
    /*
    //Creación categoria
    await Conexion.initialize();
    const categoria2 = new Categoria();
    const categoriaRepo = Conexion.getRepository(Categoria);
    categoria2.setNombre("E");
    await categoriaRepo.save(categoria2);
    console.log("Guardado");
    */
    /*
    //Obtencion categorias
    const categoriaRepo = Conexion.getRepository(Categoria);
    const categorias = await categoriaRepo.find();
    console.log("Categorias; ", categorias);
    */
    //Pruebas con data Access
    const categoriaDAO = new CategoriaDAO();
   // const categoria=new Categoria();
    //categoria.setNombre("Categoria A")
    //const resultado=await categoriaDAO.agregarCategoria(categoria);
    //console.log(`Resultado Agregar: ${resultado}`)
    //const categorias=await categoriaDAO.getCategorias();
    //console.log(`Resultado de obtener Categorias ${categorias}`)
    const categoriaID=await categoriaDAO.getCategoriaById(6);
    console.log(`Resultado Categoria por ID: ${JSON.stringify(categoriaID)}`)
  } catch (error) {
    console.log(error)
  }
}

/**
 * Exportacion del metodo de ejecucion de pruebas
 */
export { pruebas }