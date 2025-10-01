// Importación del Data Transfer Object (DTO) para la entidad Alimento
import { AlimentoDTO } from "@dto/alimento.dto";

// Importación de la interfaz que define los métodos del servicio de Alimento
import { AlimentoIServicio } from "@service.dao/alimento.servicio";

/**
 * Clase que implementa la interfaz AlimentoIServicio.
 * Contiene los métodos necesarios para la gestión de alimentos,
 * incluyendo operaciones de consulta, inserción, eliminación y búsqueda.
 * 
 * Actualmente los métodos no están implementados.
 */
class AlimentoServicio implements AlimentoIServicio {
    
    /** Obtiene la lista de todos los alimentos registrados. */
    obtenerAlimentos(): Promise<AlimentoDTO[]> {
        throw new Error("Method not implemented.");
    }

    /** Agrega un nuevo alimento al sistema. */
    agregarAlimento(alimentoDTO: AlimentoDTO): Promise<AlimentoDTO> {
        throw new Error("Method not implemented.");
    }

    /** Elimina un alimento según su identificador único. */
    eliminar(alimentoId: Number): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    /** Busca un alimento específico a partir de su identificador. */
    obtenerAlimentoById(alimentoId: Number): Promise<AlimentoDTO> {
        throw new Error("Method not implemented.");
    }
}

export { AlimentoServicio }
