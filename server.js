import { ApolloServer, gql } from "apollo-server";
// get의 url을 만드는 것과 비슷 하다.
// request 하고자 하는 것들은 type Query 에 넣어 주어야 한다.
const typeDefs = gql`
  type Query {
    text: String
    hello: String
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
