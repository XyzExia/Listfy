import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`

export const ADD_NOTE =gql`
  mutation CreateNote($title: String!, $content: String!) {
    createNote(title: $title, content: $content) {
      _id
      title
      content
    }
  }
`

export const DELETE_NOTE =gql`
  mutation deleteNote($id: ID!) {
    deleteNote(_id: $id) {
      _id
      title
      content
    }
  }
`

export const UPDATE_NOTE = gql`
  mutation updateNote($id: ID!, $input: NoteUpdateInput) {
    updateNote(_id: $id, input: $input) {
      _id
      title
      content
    }
  }
`