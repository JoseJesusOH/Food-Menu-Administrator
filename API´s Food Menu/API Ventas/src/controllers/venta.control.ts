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

    obtenerVentas = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener todas las ventas en control.");
        try {
            const ventas = await this.ventaServicio.getVentas();

            if (ventas && ventas.length > 0) {
                LoggerAPI.info("Se obtuvieron las ventas correctamente en control.");
                return res.status(200).json(ventas);
            } else {
                LoggerAPI.warn("No se encontraron ventas registradas en control.");
                return res.status(204).json({ message: "No hay ventas registradas" });
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener las ventas en control: " + error);
            return res.status(500).json({ message: "Error al obtener las ventas" });
        }
    };
    obtenerVentaByUuid = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de obtener una venta por ID en control.");
        try {
            const venta = await this.ventaServicio.getVentaByUuid(req.params.ventaUuid);

            if (venta) {
                LoggerAPI.info("Se obtuvo la venta correctamente en control.");
                return res.status(200).json(venta);
            } else {
                LoggerAPI.warn("No se encontró la venta con el ID especificado en control.");
                return res.status(404).json({ message: "Venta no encontrada" });
            }
        } catch (error) {
            LoggerAPI.error("Error al obtener la venta por ID en control: " + error);
            return res.status(500).json({ message: "Error al obtener la venta" });
        }
    };
    actualizarVenta = async (req, res, next) => {
        LoggerAPI.info("Se inició el proceso de actualizar una venta en control.");
        try {
            const venta = plainToInstance(Venta, req.body);
            const result = await this.ventaServicio.actualizarVenta( venta);

            if (result) {
                LoggerAPI.info("Se actualizó la venta correctamente en control.");
                return res.status(200).json({ message: "Venta actualizada correctamente", venta: result });
            } else {
                LoggerAPI.warn("No se encontró la venta a actualizar en control.");
                return res.status(404).json({ message: "Venta no encontrada" });
            }
        } catch (error) {
            LoggerAPI.error("Error al actualizar la venta en control: " + error);
            return res.status(500).json({ message: "Error al actualizar la venta" });
        }
    };
}
