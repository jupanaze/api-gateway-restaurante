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

    type MensajeInventario {
        mensaje: String!
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
        id_producto: Int!
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
        productoById(id_producto: Int!): [Producto]
    } 

    extend type Mutation {
        createProducto(nuevoProducto: NuevoProducto!): MensajeInventario
        deleteProducto(nombre: BucarNombreInput!): MensajeInventario
        postCantidad(cantidad: Cantidad!): MensajeInventario
    }

`;

module.exports = InventarioTypeDefs