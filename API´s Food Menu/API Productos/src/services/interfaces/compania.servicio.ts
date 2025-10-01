import { CompaniaDTO } from "@dto/compania.dto"
interface CompaniaIServicio {
    getCompanias(): Promise<CompaniaDTO[]>;
    agregarCompania(companiaDTO:CompaniaDTO):Promise<Boolean>;
    actualizarCompania(companiaDTO: CompaniaDTO): Promise<Boolean>
    eliminarCompania(companiaUuid:String): Promise<Boolean>;
    getCompaniaByUuid(compañiaUuid:String): Promise<CompaniaDTO>;
}
export {CompaniaIServicio}