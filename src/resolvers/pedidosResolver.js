const pedidosResolver = {
    Query: {
        consultarOrdenes: (_, { id }, {dataSources, userIdToken}) => {
            if(id == userIdToken) 
                return dataSources.pedidosAPI.consultarOrdenes(id)
            else
                return null
        },
        consultarOrdenesCliente: (_, { id }, {dataSources, userIdToken}) => {
            if(id == userIdToken) 
                return dataSources.pedidosAPI.consultarOrdenesCliente(id)
            else
                return null
        },
        consultarCarritoCliente: (_, { consulta }, {dataSources}) => {
            return dataSources.pedidosAPI.consultarCarritoCliente(consulta)
            if(consulta.id == userIdToken) 
                return dataSources.pedidosAPI.consultarCarritoCliente(consulta)
            else
                return null
        }
    },
    Mutation: {
        agregarProductoCarrito: (_, {producto}, {dataSources, userIdToken}) => {
            if(producto.id == userIdToken) 
                return dataSources.pedidosAPI.agregarProductoCarrito(producto)
            else
                return null
        },
        eliminarProductoCarrito: (_, {eliminar}, {dataSources, userIdToken}) => {
            if(eliminar.id == userIdToken) 
                return dataSources.pedidosAPI.eliminarProductoCarrito(eliminar)
            else
                return null
        },
        finalizarCompra: (_, {finalizar}, {dataSources, userIdToken}) => {
            if(finalizar.id == userIdToken) 
                return dataSources.pedidosAPI.finalizarCompra(finalizar)
            else
                return null
        },
        cancelarCompra: (_, {cancelar}, {dataSources, userIdToken}) => {
            if(cancelar.id == userIdToken) 
                return dataSources.pedidosAPI.cancelarCompra(cancelar)
            else
                return null
        }
        
    }
};


module.exports = pedidosResolver;