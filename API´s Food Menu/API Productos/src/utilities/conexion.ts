
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Categoria } from "@entity/categoria.entity";
import { Alimento } from "@entity/alimento.entity";
import { Producto } from "@entity/producto.entity";
import { ProductoAlimento } from "@entity/producto-alimento.entity";
import { ProductoCompania } from "@entity/producto-compania.entity";
import { Compania } from "@entity/compania.entity";
import { CentroProductivo } from "@entity/centro-productivo.entity";

  const Conexion = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "api_productos",
    synchronize: true,
    logging: true,
    entities: [Categoria, Alimento, Producto, ProductoAlimento, ProductoCompania, Compania, CentroProductivo],
    subscribers: [],
    migrations: [],
})
Conexion.initialize()
  .then(() => console.log("✅ Conexión inicializada"))
  .catch((err) => console.error("❌ Error al inicializar:", err));

export {Conexion};