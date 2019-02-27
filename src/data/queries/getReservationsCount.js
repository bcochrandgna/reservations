// @flow
import gql from 'graphql-tag';

export default gql`
  query {
    reservationsConnection {
      aggregate {
        count
      }
    }
  }
`;
