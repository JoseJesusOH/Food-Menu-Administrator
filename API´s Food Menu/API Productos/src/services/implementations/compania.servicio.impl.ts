    
import { CompaniaDTO } from "@dto/compania.dto";
import {CompaniaIServicio } from "@service.dao/compania.servicio"
class CompaniaServicio implements CompaniaIServicio{
    getCompanias(): Promise<CompaniaDTO[]> {
        throw new Error("Method not implemented.");
    }
    agregarCompania(companiaDTO: CompaniaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    actualizarCompania(companiaDTO: CompaniaDTO): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    eliminarCompania(companiaUuid: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    getCompaniaByUuid(compañiaUuid: String): Promise<CompaniaDTO> {
        throw new Error("Method not implemented.");
    }
   
}