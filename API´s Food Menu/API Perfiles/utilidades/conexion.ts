
import "reflect-metadata"
import { DataSource } from "typeorm"
export const Conexion = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "api_perfiles",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})

