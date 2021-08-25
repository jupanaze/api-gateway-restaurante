const autenticacionResolver = {
    Query: {
        usurioByUsername: function (parent, { username }, { dataSource }){
            return dataSources.autenticacionAPI.usurioByUsername(username);
        },
        usuarioById: function (parent, { id }, { dataSource }){
            if(id.id == userIdToken) 
                return dataSources.autenticacionAPI.usuarioById(id)
            else
                return null
        }  
    },
    Mutation: {
        authenticate: function (parent, { credentials }, { dataSource }){
            return dataSources.autenticacionAPI.authenticate(credentials);
        },
        refreshToken: function (parent, { refresh }, { dataSource }){
            return dataSources.autenticacionAPI.refreshToken(refresh);
        },
        registro: function (parent, { usuario }, { dataSource }){
            return dataSources.autenticacionAPI.registro(usuario);
        },
        actualizar: function (parent, { usuario }, { dataSource }){
            return dataSources.autenticacionAPI.actualizar(usuario);
        },
    }
}

module.exports = autenticacionResolver