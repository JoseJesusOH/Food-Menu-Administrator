import { Producto } from "../modelos/producto"
import { Alimento } from "../modelos/alimento"
class ProductoAlimento {
    private productoAlimentoID: Number;
    private productoAlimentoUUID: String;
    private cantidadMinima: Number;
    private cantidadMaxima: Number;
    private producto: Producto;
    private alimento: Alimento;
}