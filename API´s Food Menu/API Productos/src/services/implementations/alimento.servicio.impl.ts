
import { AlimentoDTO } from "@dto/alimento.dto";
import {AlimentoIServicio } from "@service.dao/alimento.servicio"
class AlimentoServicio implements AlimentoIServicio{
    obtenerAlimentos(): AlimentoDTO {
        throw new Error("Method not implemented.");
    }
    agregarAlimento(alimentoDTO: AlimentoDTO): AlimentoDTO {
        throw new Error("Method not implemented.");
    }
    eliminar(alimentoId: Number): Boolean {
        throw new Error("Method not implemented.");
    }
    obtenerAlimentoById(alimentoId: Number): AlimentoDTO {
        throw new Error("Method not implemented.");
    }
    
}