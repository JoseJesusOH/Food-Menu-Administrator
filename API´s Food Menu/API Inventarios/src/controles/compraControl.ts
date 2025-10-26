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

}