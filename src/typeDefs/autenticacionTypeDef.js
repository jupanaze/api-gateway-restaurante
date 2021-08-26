const { gql } = require('apollo-server');

const autenticacionTypeDefs = gql`

    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    type Mensaje {
        message: String!
    }

    input UsuarioNuevo {
        username: String!
        password: String!
        email: String!
        first_name: String!
        last_name: String!
        address: String!
        phone_number: Int!
    }

    input UsuarioViejo {
        username: String!
        email: String!
        first_name: String!
        last_name: String!
        address: String!
        phone_number: Int!
    }

    type Usuario {
        id: Int!
        username: String!
        email: String!
        first_name: String!
        last_name: String!
        address: String!
        phone_number: Int!
    }

    input NombreUsuario {
        username: String!
    }

    input IdUsuario {
        id: Int!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    type Query {
        usurioByUsername(username: NombreUsuario!): Usuario!
        usuarioById(id: Int!): Usuario!
    }

    type Mutation {
        authenticate(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
        registro(usuario: UsuarioNuevo!): Mensaje!
        actualizar(usuario: UsuarioViejo!): Mensaje!
    }
`;

module.exports = autenticacionTypeDefs; 