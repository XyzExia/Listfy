import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query Me {
  me {
    _id
    username
    email
  }
}
`;

export const ALL_NOTES= gql`
query AllNotes {
  allNotes {
    _id
    title
    content
  }
}
`;

export const GET_NOTE = gql`
query GetNote($id: ID!) {
  getNote(_id: $id) {
    _id
    title
    content
  }
}
`