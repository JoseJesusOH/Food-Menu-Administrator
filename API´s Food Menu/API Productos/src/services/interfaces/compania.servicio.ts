import { CompaniaDTO } from "@dto/compania.dto"
interface CompaniaIServicio {
    getCompanias(): CompaniaDTO;
    agregarCompania():Boolean;
    eliminarCompania(): Boolean;
    getCompaniaById(): CompaniaDTO;
}
export {CompaniaIServicio}