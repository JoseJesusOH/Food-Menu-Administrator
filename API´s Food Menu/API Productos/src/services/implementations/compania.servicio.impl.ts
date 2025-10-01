// Importa el DTO de compañía
import { CompaniaDTO } from "@dto/compania.dto";

// Importa la interfaz del servicio de compañía
import { CompaniaIServicio } from "@service.dao/compania.servicio";

/**
 * Servicio para manejar operaciones de compañías.
 * Actualmente los métodos no están implementados.
 */
class CompaniaServicio implements CompaniaIServicio {

  // Método para obtener todas las compañías
  getCompanias(): Promise<CompaniaDTO[]> {
        throw new Error("Method not implemented.");
  }

  // Método para agregar una nueva compañía
  agregarCompania(companiaDTO: CompaniaDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
  }

  // Método para actualizar los datos de una compañía existente
  actualizarCompania(companiaDTO: CompaniaDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
  }

  // Método para eliminar una compañía por su UUID
  eliminarCompania(companiaUuid: string): Promise<boolean> {
        throw new Error("Method not implemented.");
  }

  // Método para obtener los datos de una compañía por su UUID
  getCompaniaByUuid(companiaUuid: string): Promise<CompaniaDTO> {
        throw new Error("Method not implemented.");
  }
}

export { CompaniaServicio };
