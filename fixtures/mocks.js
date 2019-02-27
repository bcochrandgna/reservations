import reservations from './reservations';
import GET_RESERVATIONS from '../src/data/queries/getReservations';
import GET_SORT_OPTIONS from '../src/data/queries/getSortOptions';

export default [
  {
    request: { query: GET_SORT_OPTIONS },
    result: { data: { sortOptions: 'arrivalDate_ASC' } },
  },
  {
    request: {
      query: GET_RESERVATIONS,
      variables: {
        skip: 0,
        first: 10,
        orderBy: 'arrivalDate_ASC',
      },
    },
    result: {
      data: {
        reservations,
      },
    },
  },
];
