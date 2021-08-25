const inventarioResolver = {
    Query: {
        productoByNombre: function (parent, { nombre }, { dataSource }){
            return dataSources.inventarioApiUrl.usurioByUsername(nombre);
        },
        carta: function (parent, { }, { dataSource }){
            return dataSources.inventarioAPI.usuarioById();
        },
        productoById: function (parent, { id_producto }, { dataSource }){
            return dataSources.inventarioAPI.usurioByUsername(id_producto);
        },
    },
    Mutation: {
        createProducto: function (parent, { nuevoProducto }, { dataSource }){
            return dataSources.inventarioAPI.createProducto(nuevoProducto);
        },
        deleteProducto: function (parent, { nombre }, { dataSource }){
            return dataSources.inventarioAPI.deleteProducto(nombre);
        },
        postCantidad: function (parent, { cantidad }, { dataSource }){
            return dataSources.inventarioAPI.postCantidad(cantidad);
        },
    }
}

module.exports = inventarioResolver;