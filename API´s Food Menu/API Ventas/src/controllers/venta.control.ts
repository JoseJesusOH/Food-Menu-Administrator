import { Venta } from "@entity/venta.entity";
import { VentaIService } from "@service.dao/venta.dao";
import { VentaService } from "@service.impl/venta.dao.impl";
import { LoggerAPI } from "@utility/logger";
import { plainToInstance } from "class-transformer";

class VentaControl {
     ventaServicio: VentaIService = new VentaService();
    agregarVenta = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de agregar una nueva venta en control.");
        try {
            const venta = plainToInstance(Venta, req.body);
            const result = await this.ventaServicio.agregarVenta(venta);

            if (result) {
                LoggerAPI.info("Se agregó una nueva venta correctamente en control.");
                return res.status(201).json({ message: "Venta agregada correctamente", venta: result });
            } else {
                LoggerAPI.error("No se pudo agregar la venta en control.");
                return res.status(400).json({ message: "No se pudo agregar la venta" });
            }
        } catch (error) {
            LoggerAPI.error("Error al agregar la venta en control: " + error);
            return res.status(500).json({ message: "Error al agregar la venta" });
        }
    };
}
