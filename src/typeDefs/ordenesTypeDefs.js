const { gql } = require('apollo-server');

const ordenesTypeDefs = gql`
type AgregarProducto {
    message: String!
}

input AgregarProductoInput {
    id_inventario: Int
    cantidad: String
    id_person: Int
}

type EliminarProducto {
    message: String!
}

input EliminarProductoInput {
    id_order: Int
    id_inventario: Int
    id_person: Int
}

type FinalizarCompra {
    message: String!
}

input FinalizarCompraInput {
    id_order: Int
    id_person: Int
}

type ConsultarOrdenes {
    id_order: Int
    id_person_id: Int
    precio_total: Int
    address_order: String
    estado_order_id: String
    id_person: Int
}

type CancelarCompra {
    message: String!
}

input CancelarCompraInput {
    id_order: Int
    id_person: Int
}

input ConsultarOrdenClienteInput {
    id_order: Int
    id_person: Int
}

extend type Query {
    consultarOrdenes(d_person: Int!): [ConsultarOrdenes]
    consultarOrdenesCliente(id_person: Int!): [ConsultarOrdenes]
    consultarCarritoCliente(consulta: ConsultarOrdenClienteInput!): [ConsultarOrdenes]
}

type Mutation {
    agregarProductoCarrito(producto: AgregarProductoInput!): AgregarProducto
    eliminarProductoCarrito(eliminar: EliminarProductoInput!): EliminarProducto
    finalizarCompra(finalizar: FinalizarCompraInput!): FinalizarCompra
    cancelarCompra(cancelar: CancelarCompraInput!): CancelarCompra
}
`;

module.exports = ordenesTypeDefs; 