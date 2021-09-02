const { gql } = require('apollo-server');

const ordenesTypeDefs = gql`
type AgregarProducto {
    message: String!
    order: Int!
}

input AgregarProductoInput {
    id_producto: Int!
    cantidad: Int!
    id: Int!
}

type EliminarProducto {
    message: String!
}

input EliminarProductoInput {
    id_order: Int!
    id_producto: Int!
    id: Int
}

type FinalizarCompra {
    message: String!
}

input FinalizarCompraInput {
    id_order: Int!
    id: Int
    address_order: String!
}

type ConsultarOrdenes {
    id_order: Int
    id_person: Int
    precio_total: Int
    address_order: String
    estado_order_id: String
}
type ConsultarCarrito {
    id_detalles_order: Int
    id_order_id: Int
    id_producto: Int
    cantidad: Int
    valor_total: Int
}
type CancelarCompra {
    message: String!
}

input CancelarCompraInput {
    id_order: Int!
    id: Int
}

input ConsultarOrdenClienteInput {
    id_order: Int!
    id: Int!
}

extend type Query {
    consultarOrdenes(id: Int!): [ConsultarOrdenes]
    consultarOrdenesCliente(id: Int!): [ConsultarOrdenes]
    consultarCarritoCliente(consulta: ConsultarOrdenClienteInput!): [ConsultarCarrito]
}

extend type Mutation {
    agregarProductoCarrito(producto: AgregarProductoInput!): AgregarProducto
    eliminarProductoCarrito(eliminar: EliminarProductoInput!): EliminarProducto
    finalizarCompra(finalizar: FinalizarCompraInput!): FinalizarCompra
    cancelarCompra(cancelar: CancelarCompraInput!): CancelarCompra
}
`;

module.exports = ordenesTypeDefs; 