const pedidosResolver = {
    Query: {
        consultarOrdenes: (_, { id_person }, {dataSources, userIdToken}) => {
            if(id_person == userIdToken) 
                return dataSources.pedidosAPI.consultarOrdenes(userId)
            else
                return null
        },
        consultarOrdenesCliente: (_, { id_person }, {dataSources, userIdToken}) => {
            if(id_person == userIdToken) 
                return dataSources.pedidosAPI.consultarOrdenesCliente(userId)
            else
                return null
        },
        consultarCarritoCliente: (_, { consulta }, {dataSources, userIdToken}) => {
            if(consulta.id_person == userIdToken) 
                return dataSources.pedidosAPI.consultarCarritoCliente(consulta)
            else
                return null
        }
    },
    Mutation: {
        agregarProductoCarrito: (_, {producto}, {dataSources, userIdToken}) => {
            if(producto.id_person == userIdToken) 
                return dataSources.pedidosAPI.agregarProductoCarrito(producto)
            else
                return null
        },
        eliminarProductoCarrito: (_, {eliminar}, {dataSources, userIdToken}) => {
            if(eliminar.id_person == userIdToken) 
                return dataSources.pedidosAPI.eliminarProductoCarrito(eliminar)
            else
                return null
        },
        finalizarCompra: (_, {finalizar}, {dataSources, userIdToken}) => {
            if(finalizar.id_person == userIdToken) 
                return dataSources.pedidosAPI.finalizarCompra(finalizar)
            else
                return null
        },
        cancelarCompra: (_, {cancelar}, {dataSources, userIdToken}) => {
            if(cancelar.id_person == userIdToken) 
                return dataSources.pedidosAPI.cancelarCompra(cancelar)
            else
                return null
        }
        
    }
};


module.exports = pedidosResolver;