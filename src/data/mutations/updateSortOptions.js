// @flow
import gql from 'graphql-tag';

export default gql`
  mutation UPDATE_SORT_OPTIONS($sortOptions: String!) {
    updateSortOptions(sortOptions: $sortOptions) @client
  }
`;
