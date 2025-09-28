class ProductoControl {
        /**
     * Crea un nuevo producto.
     * Normalmente toma los datos del producto desde req.body
     * y responde con el producto creado o un mensaje de éxito.
     */
    agregarProducto = async (req, res, next) => {
    }
        /**
     * Elimina un producto existente.
     * El id del producto se recibe en req.params.id.
     */
    eliminarProducto = async (req, res, next) => {
    }
       /**
     * Actualiza un producto existente.
     * Suele recibir el id del producto en req.params.id
     * y los nuevos datos en req.body.
     */
    actualizarProducto = async (req, res, next) => {
    }
    obtenerProductos = async (req, res, next) => {
    }
    obtenerProductoById = async (req, res, next) => {
    }
}
export { ProductoControl }