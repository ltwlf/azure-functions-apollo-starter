
export const resolvers = {
    Query: {
        hello: async (_, { name }, ctx, info) => `Hello ${name}!`
    }
}