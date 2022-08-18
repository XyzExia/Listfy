const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Note {
    _id: ID!
  title: String!,
  content: String!
 }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    users: [User]
    me: User
    getNote(_id: ID!): Note
    allNotes: [Note]
  }

  input NoteInput {
  title: String!
  content: String!
 }

 input NoteUpdateInput {
   title: String!
   content: String!
}
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createNote(title:String!, content:String!) : Note
    updateNote(_id: ID!, input: NoteUpdateInput): Note
    deleteNote(_id: ID!) : Note

  }
`;

module.exports = typeDefs;

//    updateNote(_id: ID!, input: NoteUpdateInput): Note
