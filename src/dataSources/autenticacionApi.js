const { RESTDataSource } = require("apollo-datasource-rest");
const { autenticacionApiUrl } = require('../server')

class autenticacionAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL  =  autenticacionApiUrl;
    }

    async usurioByUsername(username){
        return await this.get('/actualizar/', username);
    }
 
    async usuarioById(id){
        return await this.get('/buscar/', id);
    }

    async authenticate(credentials){
        return await this.post('/token/', credentials);
    }

    async refreshToken(refresh){
        return await this.post('/token/refresh/', { refresh });
    }     

    async registro(usuario){
        return await this.post('/registro/', usuario);
    }

    async actualizar(usuario){
        return await this.put('/actualizar/', usuario);
    }
}

module.exports =  autenticacionAPI