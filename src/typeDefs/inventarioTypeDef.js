const { gql } = require('apollo-server');

const InventarioTypeDefs = gql`

    type Producto {
        id_producto: Int
        nombre: String!
        precio: Int!
        descripcion: String!
        cantidad: Int!
        categoria: String!
    }

    type Mensaje {
        message: String!
    }

    input NuevoProducto {
        id_producto: Int!
        nombre: String!
        precio: Int!
        descripcion: String!
        cantidad: Int!
        categoria: String!
    }

    input Cantidad {
        nombre: String!
        cantidad: Int!
    }

    input BucarNombreInput {
        nombre: String!
    }

    input BucarIdInput {
        id_producto: Int!
    }

    extend type Query {
        productoByNombre(nombre: BucarNombreInput!): [Producto]
        carta(id_producto: BucarIdInput!):[Producto]
        productoById(id_producto: BucarIdInput!): [Producto]
    } 

    extend type Mutation {
        createProducto(nuevoProducto: NuevoProducto!): Mensaje
        deleteProducto(nombre: BucarNombreInput!): Mensaje
        postCantidad(cantidad: Cantidad!): Mensaje
    }

`;

module.exports = InventarioTypeDefs