
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Categoria } from "../modelos/categoria";
import { Alimento } from "../modelos/alimento";
import { Producto } from "../modelos/producto";
import { ProductoAlimento } from "../modelos/producto-alimento";
import { ProductoCompania } from "../modelos/producto-compania";
import { Compania } from "../modelos/compania";
import { Sucursal } from "../modelos/sucursal";


export const Conexion = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "api_productos",
    synchronize: true,
    logging: true,
    entities: [Categoria, Alimento, Producto, ProductoAlimento, ProductoCompania, Compania, Sucursal],
    subscribers: [],
    migrations: [],
})

