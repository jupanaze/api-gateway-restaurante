const inventarioResolver = {
    Query: {
        productoByNombre: function (_, { nombre }, { dataSources }){
            return dataSources.inventarioAPI.productoByNombre(nombre);
        },
        carta: function (parent, { }, { dataSources }){
            return dataSources.inventarioAPI.carta();
        },
        productoById: function (parent, { id_producto }, { dataSources }){
            return dataSources.inventarioAPI.productoById(id_producto);
        },
    },
    Mutation: {
        createProducto: function (parent, { nuevoProducto }, { dataSources }){
            return dataSources.inventarioAPI.createProducto(nuevoProducto);
        },
        deleteProducto: function (parent, { nombre }, { dataSources }){
            return dataSources.inventarioAPI.deleteProducto(nombre);
        },
        postCantidad: function (parent, { cantidad }, { dataSources }){
            return dataSources.inventarioAPI.postCantidad(cantidad);
        },
    }
}

module.exports = inventarioResolver;