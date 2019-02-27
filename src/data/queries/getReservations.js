// @flow
import gql from 'graphql-tag';

export default gql`
  query GET_RESERVATIONS($skip: Int, $first: Int, $orderBy: ReservationOrderByInput) {
    reservations(skip: $skip, first: $first, orderBy: $orderBy) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;
