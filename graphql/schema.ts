import { gql } from "apollo-server-azure-functions";

export const typeDefs = gql`
    type Query {
        hello(name: String!): String!
    }
`
