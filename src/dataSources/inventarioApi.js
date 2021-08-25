const { RESTDataSource } = require("apollo-datasource-rest");
const { inventarioApiUrl } = require('../server')

class inventarioAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL  =  inventarioApiUrl;
    }

    async productoByNombre(nombre){
        return await this.get('/actualizar/', nombre);
    }
 
    async carta(){
        return await this.get('/carta/');
    }

    async productoById(id_producto){
        return await this.get('/buscar/', id_producto);
    }

    async createProducto(nuevoProducto){
        return await this.post('/token/producto/', nuevoProducto);
    }

    async deleteProducto(nombre){
        return await this.delete('/producto/', nombre);
    }

    async postCantidad(cantidad){
        return await this.post('/cantidad/', cantidad);
    }
}

module.exports =  autenticacionAPI