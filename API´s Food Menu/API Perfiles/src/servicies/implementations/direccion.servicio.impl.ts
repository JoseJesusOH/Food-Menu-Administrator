// Importa el DTO que representa la estructura de una dirección
import { DireccionDTO } from "@dto/direccion.dto";

// Importa la interfaz del servicio de direcciones
import { DireccionIServicio } from "servicies/interfaces/direccion.servicio";

// Importa la utilidad para manejar la conexión a la base de datos
import { Conexion } from "@utility/conexion";

// Importa la utilidad para registrar logs de información y advertencias
import { LoggerAPI } from "@utility/logger";

// Importa función para transformar objetos planos en instancias de clases
import { plainToInstance } from "class-transformer";

// Importa la implementación del DAO para acceder a datos de direcciones
import { DireccionDAO } from "@data.impl/direccion.dao.impl";

// Importa la interfaz del DAO de direcciones
import { DireccionIDAO } from "@data.dao/direccion.dao";

// Importa la entidad que representa una dirección en la base de datos
import { Direccion } from "@entity/direccion.entity";

/** Servicio encargado de la lógica de negocio relacionada con direcciones */
export class DireccionServicio implements DireccionIServicio {

    /** Instancia del DAO para operaciones de acceso a datos de direcciones */
    direcionDAO: DireccionIDAO = new DireccionDAO;

    /** Obtiene todas las direcciones registradas */
    async getDirecciones(): Promise<DireccionDTO[]> {
        LoggerAPI.info("Se inicia el metodo para obtener las direcciones en DireccionServicio");
        try {
            let resultado = await this.direcionDAO.getDirecciones();
            if (resultado.length > 0) {
                LoggerAPI.info(`Se han encontrado un total de ${resultado.length} direcciones`);
                return resultado;
            } else {
                LoggerAPI.warn("No se han encontrado direcciones.");
                return [];
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido un error al obtener las direcciones en DireccionServicio; ${error}`);
            return [];
        }
    }

    /** Obtiene una dirección por su ID */
    async getDireccionById(direcionId: Number): Promise<DireccionDTO> {
        LoggerAPI.info("Se ha iniciado el metodo en DireccionServicio para obtener Direccion por ID");
        try {
            let result = await this.direcionDAO.getDireccionById(direcionId);
            if (result) {
                LoggerAPI.info(`Se ha encontrado la direccion con ID ${direcionId}`);
                return result;
            } else {
                LoggerAPI.info(`No se ha encontrado la direccion con ID ${direcionId}`);
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en DireccionServicio metodo GetDireccionById error; ${error}`);
            throw error;
        }
    }

    /** Obtiene una dirección por su UUID */
    async getDireccionByUuid(direccionUuid: String): Promise<DireccionDTO> {
        LoggerAPI.info("Se ha iniciado el metodo en DireccionServicio para obtener Direccion por UUID");
        try {
            let result = await this.direcionDAO.getDireccionByUuid(direccionUuid);
            if (result) {
                LoggerAPI.info(`Se ha encontrado la direccion con UUID ${direccionUuid}`);
                return result;
            } else {
                LoggerAPI.info(`No se ha encontrado la direccion con UUID ${direccionUuid}`);
                return null;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en DireccionServicio metodo GetDireccionByUuid error; ${error}`);
            throw error;
        }
    }

    /** Agrega una nueva dirección */
    async agregarDireccion(direccionDTO: DireccionDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia metodo de agregar Direccion en DireccionServicio");
        try {
            let direcion = new Direccion();
            direcion = plainToInstance(Direccion, direccionDTO);
            let result = await this.direcionDAO.agregarDireccion(direcion);
            if (result) {
                LoggerAPI.info("Se ha agregado la direccion correctamente.");
                return true;
            } else {
                LoggerAPI.warn("No se ha agregado la direccion");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en agregar direccion en DireccionServicio error: ${error}`);
            throw error;
        }
    }

    /** Elimina una dirección por su ID */
    async eliminarDireccionById(direccionId: Number): Promise<Boolean> {
        LoggerAPI.info("Se inicia metodo de eliminar Direccion en DireccionServicio");
        try {
            let result = await this.direcionDAO.eliminarDireccion(direccionId);
            if (result) {
                LoggerAPI.info("Se ha eliminado la direccion correctamente.");
                return true;
            } else {
                LoggerAPI.warn("No se ha eliminado la direccion");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en eliminar direccion en DireccionServicio error: ${error}`);
            throw error;
        }
    }

    /** Actualiza la información de una dirección existente */
    async actualizarDireccion(direccionDTO: DireccionDTO): Promise<Boolean> {
        LoggerAPI.info("Se inicia metodo de actualizar Direccion en DireccionServicio");
        try {
            let direcion = new Direccion();
            direcion = plainToInstance(Direccion, direccionDTO);
            let result = await this.direcionDAO.actualizarDireccion(direcion);
            if (result) {
                LoggerAPI.info("Se ha actualizado la direccion correctamente.");
                return true;
            } else {
                LoggerAPI.warn("No se ha actualizado la direccion");
                return false;
            }
        } catch (error) {
            LoggerAPI.warn(`Se ha producido error en actualizar direccion en DireccionServicio error: ${error}`);
            throw error;
        }
    }
}
