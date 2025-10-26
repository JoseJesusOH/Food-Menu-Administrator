import { Compra } from "@entity/compra.entity";
import { CompraIServicio } from "@service.dao/compra.dao";
import { CompraServicio } from "@service.impl/compra.dao.impl";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class CompraControl {
    compraServicio: CompraIServicio = new CompraServicio()
    async agregarCompra(req, res, next) {
        LoggerAPI.info("Se inició el proceso para registrar una nueva compra en el sistema.");
        try {
            const compra = plainToInstance(Compra, req.body);
            const result = await this.compraServicio.agregarCompra(compra);

            if (result) {
                LoggerAPI.info("La compra fue registrada correctamente.");
                return res.status(201).json({ message: "Compra registrada correctamente", compra: result });
            } else {
                LoggerAPI.warn("No se pudo registrar la compra.");
                return res.status(400).json({ message: "No se pudo registrar la compra" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al registrar la compra: ${error}`);
            return res.status(500).json({ message: "Error al registrar la compra" });
        }
    }
    eliminarCompra = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de eliminar una compra en control.");
        try {
            const compraUuid = req.params.compraUuid;
            const result = await this.compraServicio.eliminarCompra(compraUuid);

            if (result) {
                LoggerAPI.info("La compra fue eliminada correctamente.");
                return res.status(200).json({ message: "Compra eliminada correctamente" });
            } else {
                LoggerAPI.warn("No se pudo eliminar la compra.");
                return res.status(400).json({ message: "No se pudo eliminar la compra" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al eliminar la compra: ${error}`);
            return res.status(500).json({ message: "Error al eliminar la compra" });
        }
    };

    obtenerCompras = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener las compras en control.");
        try {
            const result = await this.compraServicio.getCompras();

            if (result && result.length > 0) {
                LoggerAPI.info("Se obtuvieron las compras correctamente en control.");
                return res.status(200).json({ compras: result });
            } else {
                LoggerAPI.warn("No se encontraron compras en control.");
                return res.status(404).json({ message: "No se encontraron compras" });
            }
        } catch (error) {
            LoggerAPI.error(`Error al obtener las compras en control: ${error}`);
            return res.status(500).json({ message: "Error al obtener las compras" });
        }
    };
}