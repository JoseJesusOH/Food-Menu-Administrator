import "reflect-metadata"
import { Conexion } from "@utility/conexion"
import { Categoria } from "@entity/categoria.entity"
import { CategoriaDAO } from "@data.impl/categoria.dao.impl"


async function inicializarBaseDatos() {
  try {
    await Conexion.initialize()
    console.log("Base de Datos iniciliazada")
  } catch (error) {
    console.error("Erorr durante inicializacion DB:", error)
  }
}


async function pruebas() {
  try {
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
     await Conexion.initialize();
     const categoriaRepo = Conexion.getRepository(Categoria);
     const categorias = await categoriaRepo.find();
     console.log("Categorias; ", categorias);
     */
  } catch (error) {
    console.log(error)
  }
}

export { pruebas, inicializarBaseDatos as inicializarDataBase };