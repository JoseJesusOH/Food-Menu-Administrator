
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Categoria } from "../modelos/categoria";
import { Alimento } from "../modelos/alimento";
import { Producto } from "../modelos/producto";
import { ProductoAlimento } from "../modelos/productoAlimento";
import { ProductoProveedor } from "../modelos/productoProveedor";
import { Proveedor } from "../modelos/proveedor";
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
    entities: [Categoria, Alimento, Producto, ProductoAlimento, ProductoProveedor, Proveedor, Sucursal],
    subscribers: [],
    migrations: [],
})

