import { CompraIDAO } from "@data.dao/compra.dao";
import { Compra } from "@entity/compra.entity";
import { Conexion } from "@utility/conexion";
import { LoggerAPI } from "@utility/logger";

/**
 * @class CompraDAO
 * @implements {CompraIDAO}
 * @description
 * Clase responsable de manejar todas las operaciones CRUD relacionadas con la entidad `Compra`
 * mediante el repositorio proporcionado por TypeORM.
 */
class CompraDAO implements CompraIDAO {

    /** @private Repositorio de la entidad Compra */
    compraRepositorio = Conexion.getRepository(Compra);

    /**
     * Obtiene todas las compras registradas en la base de datos.
     * Incluye la relación con la entidad `Sucursal`.
     * 
     * @returns {Promise<Compra[]>} Lista de compras.
     */
    async getCompras(): Promise<Compra[]> {
        try {
            const compras = await this.compraRepositorio.find({ relations: ["sucursal"] });
            if (compras.length > 0) {
                LoggerAPI.info("Se obtuvieron todas las compras", { total: compras.length });
                return compras;
            } else {
                LoggerAPI.info("No se obtuvieron compras", { total: compras.length });
                return [];
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener las compras", error);
            throw error;
        }
    }

    /**
     * Obtiene una compra específica mediante su ID.
     * 
     * @param {Number} compraId - Identificador numérico de la compra.
     * @returns {Promise<Compra | null>} Objeto de tipo `Compra` o `null` si no existe.
     */
    async getCompraById(compraId: Number): Promise<Compra> {
        try {
            const compra = await this.compraRepositorio.findOne({
                where: { compraId },
                relations: ["sucursal"]
            });

            if (compra) {
                LoggerAPI.info("Compra encontrada por ID", { id: compraId });
                return compra;
            } else {
                LoggerAPI.info("No se encontró la compra con el ID especificado", { id: compraId });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener la compra por ID", error);
            throw error;
        }
    }

    /**
     * Obtiene una compra mediante su UUID.
     * 
     * @param {String} compraUuid - UUID de la compra.
     * @returns {Promise<Compra | null>} Objeto de tipo `Compra` o `null` si no existe.
     */
    async getCompraByUuid(compraUuid: String): Promise<Compra> {
        try {
            const compra = await this.compraRepositorio.findOne({
                where: { compraUuid },
                relations: ["sucursal"]
            });

            if (compra) {
                LoggerAPI.info("Compra encontrada por UUID", { uuid: compraUuid });
                return compra;
            } else {
                LoggerAPI.info("No se encontró la compra con el UUID especificado", { uuid: compraUuid });
                return null;
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener la compra por UUID", error);
            throw error;
        }
    }

    /**
     * Elimina una compra existente a partir de su ID.
     * 
     * @param {Number} compraId - Identificador numérico de la compra.
     * @returns {Promise<Boolean>} `true` si la compra fue eliminada, `false` si no se encontró.
     */
    async eliminarCompraById(compraId: Number): Promise<Boolean> {
        try {
            const resultado = await this.compraRepositorio.delete({ compraId });

            if (resultado.affected && resultado.affected > 0) {
                LoggerAPI.info("Compra eliminada correctamente", { id: compraId });
                return true;
            } else {
                LoggerAPI.info("No se encontró la compra para eliminar", { id: compraId });
                return false;
            }
        } catch (error) {
            LoggerAPI.error("Error al eliminar la compra por ID", error);
            throw error;
        }
    }

    /**
     * Actualiza una compra existente.
     * 
     * @param {Compra} compra - Objeto de tipo `Compra` con los nuevos datos.
     * @returns {Promise<Boolean>} `true` si la compra fue actualizada, `false` si no existe.
     */
    async actualizarCompra(compra: Compra): Promise<Boolean> {
        try {
            const existe = await this.compraRepositorio.findOne({ where: { compraId: compra.compraId } });

            if (!existe) {
                LoggerAPI.info("No se encontró la compra para actualizar", { id: compra.compraId });
                return false;
            }

            await this.compraRepositorio.save(compra);
            LoggerAPI.info("Compra actualizada correctamente", { id: compra.compraId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al actualizar la compra", error);
            throw error;
        }
    }

    /**
     * Agrega una nueva compra a la base de datos.
     * 
     * @param {Compra} compra - Objeto `Compra` que se desea registrar.
     * @returns {Promise<Boolean>} `true` si la compra fue agregada correctamente.
     */
    async agregarCompra(compra: Compra): Promise<Boolean> {
        try {
            const nuevaCompra = await this.compraRepositorio.save(compra);
            LoggerAPI.info("Compra agregada correctamente", { id: nuevaCompra.compraId });
            return true;
        } catch (error) {
            LoggerAPI.error("Error al agregar la compra", error);
            throw error;
        }
    }
}

export { CompraDAO };
