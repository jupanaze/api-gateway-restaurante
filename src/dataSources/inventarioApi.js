const { RESTDataSource } = require("apollo-datasource-rest");
const { inventarioApiUrl } = require('../server')
const serverConfig = require('../server');

class InventarioAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL  =  serverConfig.inventarioApiUrl;
    }

    async productoByNombre(nombre){
        nombre = new Object(JSON.parse(JSON.stringify(nombre)));
        data = nombre;
        return await this.get('/producto/', data);
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
        return await this.put('/cantidad/', cantidad);
    }
}

module.exports =  InventarioAPI