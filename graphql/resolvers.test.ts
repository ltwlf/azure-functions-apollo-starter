import { resolvers } from './resolvers'

test('Hello schould return greeting', async () => {

    const greeting = await resolvers.Query.hello({}, { name: 'Chris' }, {}, {})

    expect(greeting).toEqual('Hello Chris!')
});