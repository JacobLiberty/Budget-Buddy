import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query FindManyUsers {
    users {
      edges {
        node {
          __typename
          id
          state
          name
          email
          createdAt
          updatedAt
          budgets {
            edges {
              cursor
              node {
                id
                title
                trasactions {
                  __typename
                  edges {
                    cursor
                    node {
                      id
                      title
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
