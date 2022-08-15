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