
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Categoria } from "../modelos/categoria";
export  const Conexion = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "api_productos",  
    synchronize: true,
    logging: true,
entities: [Categoria],
    subscribers: [],
    migrations: [],
})

