const { RESTDataSource } = require("apollo-datasource-rest");
const { autenticacionApiUrl } = require('../server')
const serverConfig = require('../server');

class AutenticacionAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL  =  serverConfig.autenticacionApiUrl;
    }

    async usurioByUsername(username){  
        var url = '/actualizar?username=';
        var new_url = url+username
        return await this.get(new_url);
    }

    async usuarioById(ids){
        var url = '/buscar/';
        var new_url = url+ids.id_search
        return await this.get(new_url);
    }

    async authRequest(credentials){
        console.log(credentials)
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post('/token/', credentials);
    }

    async refreshToken(refresh){
        return await this.post('/token/refresh/', { refresh });
    }     

    async registro(usuario){
        console.log(usuario)
        return await this.post('/registro/', usuario);
    }

    async actualizar(usuario){
        return await this.put('/actualizar', usuario);
    }
}

module.exports =  AutenticacionAPI