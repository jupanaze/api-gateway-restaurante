const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PedidosAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.pedidosApiUrl;    
    }

    async consultarOrdenes(){
        return await this.get(`/detalleorder/consultar/`);    
    }

    async consultarOrdenesCliente(id_person){
        return await this.get('/order/consultarcarrito/cliente/', {id_person});    
    }

    async consultarCarritoCliente(consulta){
        consulta = new Object(JSON.parse(JSON.stringify(consulta)));
        return await this.get(`/order/carrito/cliente/`, consulta);
    }
    async agregarProductoCarrito(producto){
        producto = new Object(JSON.parse(JSON.stringify(producto)));
        return await this.post(`/detalleorder/agregar/`, producto);    
    }

    async eliminarProductoCarrito(eliminar){
        eliminar = new Object(JSON.parse(JSON.stringify(eliminar)));
        return await this.delete('/detalleorder/eliminar/', eliminar);    
    }

    async finalizarCompra(finalizar){
        finalizar = new Object(JSON.parse(JSON.stringify(finalizar)));
        return await this.put(`/order/comprar/`, finalizar);
        
    }
    async cancelarCompra(cancelar){
        cancelar = new Object(JSON.parse(JSON.stringify(cancelar)));
        return await this.put(`/order/carrito/cancelar/`, cancelar);
        
    }
}

module.exports = PedidosAPI;