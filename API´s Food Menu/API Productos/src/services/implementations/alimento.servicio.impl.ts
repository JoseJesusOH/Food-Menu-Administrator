
import { AlimentoDTO } from "@dto/alimento.dto";
import {AlimentoIServicio } from "@service.dao/alimento.servicio"
class AlimentoServicio implements AlimentoIServicio{
    obtenerAlimentos(): Promise<AlimentoDTO> {
        throw new Error("Method not implemented.");
    }
    agregarAlimento(alimentoDTO: AlimentoDTO): Promise<AlimentoDTO> {
        throw new Error("Method not implemented.");
    }
    eliminar(alimentoId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    obtenerAlimentoById(alimentoId: Number): Promise<AlimentoDTO> {
        throw new Error("Method not implemented.");
    }
    
}