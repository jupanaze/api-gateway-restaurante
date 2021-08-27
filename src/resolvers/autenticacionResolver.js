const autenticacionResolver = {
    Query: {
        usurioByUsername: function (parent, { username }, { dataSources }){
            return dataSources.autenticacionAPI.usurioByUsername(username);
        },
        usuarioById: function (parent, { id }, { dataSources, userIdToken }){
            if(id == userIdToken) 
                return dataSources.autenticacionAPI.usuarioById(id);
            else
                return null
        }  
    },
    Mutation: {
        authenticate: (_, { credentials }, { dataSources }) => dataSources.autenticacionAPI.authRequest(credentials),
        refreshToken: function (parent, { refresh }, { dataSources }){
            return dataSources.autenticacionAPI.refreshToken(refresh);
        },
        registro: function (parent, { usuario }, { dataSources }){
            return dataSources.autenticacionAPI.registro(usuario);
        },
        actualizar: function (parent, { usuario }, { dataSources }){
            return dataSources.autenticacionAPI.actualizar(usuario);
        },
    }
}

module.exports = autenticacionResolver;